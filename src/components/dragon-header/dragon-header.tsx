import styles from './dragon-header.module.css'
import {FaWikipediaW} from "react-icons/fa";
import {useAppSelector} from "../../hooks/redux";
import DragonI from "../../models/dragon";

export default function DragonHeader({dragon}:{dragon:DragonI}){
    const name = dragon.name;
    const wikiLink = dragon.wikipedia;
    return (
        <>
            <div className={styles.container}>
                <h3
                    children={`SpaceX ${name}`}
                />
                <a
                    href={wikiLink}
                    children={<FaWikipediaW/>}
                    className={styles.wiki}
                />
            </div>
        </>
    )
}