import styles from './description.module.css'
import {SiSpacex} from "react-icons/si";
import DragonI from "../../models/dragon";

export default function Description({dragon}:{dragon:DragonI}){
    const name = dragon.name;
    const description = dragon.description;
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