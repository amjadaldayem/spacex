import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slide from "../slide/slide";
import styles from './slider.module.css'
import DragonI from "../../models/dragon";

export default function Slider({dragon}:{dragon:DragonI}){
    const images = dragon.images;
    return (
        <>
            <div className={styles.container}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    showStatus={false}
                    infiniteLoop={true}
                    showIndicators={false}
                >
                    {images.map((imageLink,index) => (
                        <Slide
                            key={index}
                            link={imageLink}
                        />
                    ))}
                </Carousel>
            </div>
        </>
    )
}