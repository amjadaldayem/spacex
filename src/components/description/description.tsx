import styles from './description.module.css'
import {useAppSelector} from "../../hooks/redux";
import {SiSpacex} from "react-icons/si";

export default function Description(){
    const name = useAppSelector(state => state.dragon.name);
    const description = useAppSelector(state => state.dragon.description);
    return (
        <>
            <div className={styles.container}>
                <SiSpacex
                    fill={'white'}
                    style={{
                        minWidth: '75px',
                        minHeight: '75px',
                    }}
                />
                <div className={styles.content}>
                    <h2>SpaceX {name}</h2>
                    <p children={description}/>
                </div>
            </div>
        </>
    )
}