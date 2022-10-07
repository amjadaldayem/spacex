import styles from './item-full.module.css';
import DragonHeader from "../dragon-header/dragon-header";
import Slider from "../slider/slider";
import Description from "../description/description";
import Params from "../params/params";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import DragonI from "../../models/dragon";
import {AiFillHome} from "react-icons/ai";
import { useState } from 'react';

export default function ItemFull():JSX.Element{
    const [hide,setHide] = useState<boolean>(false)

    const navigate = useNavigate();
    const params = useParams();

    const id = params.id;
    const dragon = useAppSelector(({dragonSlice}) => dragonSlice.dragons.find(dragon => dragon.id === id)) as DragonI;
    return (
        <>
            {dragon && (<div className={`${styles.container} ${hide ? styles.hide : ''}`}>
                <DragonHeader dragon={dragon}/>
                <Slider dragon={dragon}/>
                <Description dragon={dragon}/>
                <Params dragon={dragon}/>
                <a
                    onClick={() => {
                        setHide(true);
                        setTimeout(() => navigate('/home'),1000)
                        // navigate('/home');
                    }}
                    children={<AiFillHome style={{fill: "white",maxWidth:'20px',maxHeight:'20px'}}/>}
                    className={styles.home}
                />
            </div>)}
        </>
    )
}