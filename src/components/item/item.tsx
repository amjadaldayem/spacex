import styles from './item.module.css'
import DragonI from "../../models/dragon";
import {useNavigate} from "react-router-dom";

export default function Item({dragon}:{dragon:DragonI}){
    const image = dragon.images[0];
    const navigate = useNavigate();
    return (
        <>
            <a
                className={styles.container}
                style={{
                    backgroundImage:`url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
                onClick={() => navigate(`/${dragon.id}`)}
            >
                <div
                    className={styles.header}
                    children={`SpaceX ${dragon.name}`}
                />
            </a>
        </>
    )
}