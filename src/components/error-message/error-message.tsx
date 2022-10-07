import styles from './error-message.module.css'
import {useAppSelector} from "../../hooks/redux";

export default function ErrorMessage(){
    const error = useAppSelector(({dragonSlice}) => dragonSlice.error);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.message}>
                    <span className={styles.cycle}>!</span>
                    {error}
                </div>
            </div>
        </>
    )
}