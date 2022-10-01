import styles from './dragon.module.css';
import Header from "../header/header";
import Slider from "../slider/slider";
import Description from "../description/description";
import Params from "../params/params";

export default function Dragon():JSX.Element{
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <Slider/>
                <Description/>
                <Params/>
            </div>
        </>
    )
}