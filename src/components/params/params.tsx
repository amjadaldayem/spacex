import styles from './params.module.css';
import {BsFillCalendarFill} from "react-icons/bs";
import {SiZeromq} from "react-icons/si";
import {FaWeightHanging} from "react-icons/fa";
import DragonI from "../../models/dragon";

export default function Params({dragon}:{dragon:DragonI}){
    const params =  [
            {...dragon.first_flight,
                icon: <BsFillCalendarFill style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            },
            {...dragon.diameter,
                icon:<SiZeromq style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            },
            {...dragon.dry_mass,
                icon: <FaWeightHanging style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            }
        ];
    return (
        <>
            <div className={styles.container}>
                {params.map((param,key) => (
                    <div
                        className={styles.item}
                        key={key}
                    >
                        {param.icon}
                        <h4
                            className={styles.title}
                            children={param.title}
                        />
                        <p
                            className={styles.content}
                            children={param.content}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}