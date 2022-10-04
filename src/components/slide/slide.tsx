import styles from './slide.module.css'

export default function Slide({link}:{link:string}){
    return (
        <>
            <div className={styles.container}>
                <img
                    src={link}
                    crossOrigin={"anonymous"}
                />
            </div>
        </>
    )
}