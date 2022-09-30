import styles from './dragon.module.css';
import Header from "../header/header";
import Slider from "../slider/slider";

export default function Dragon():JSX.Element{
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <Slider/>
            </div>
        </>
    )
}