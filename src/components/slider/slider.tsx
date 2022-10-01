import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {useAppSelector} from "../../hooks/redux";
import Slide from "../slide/slide";
import styles from './slider.module.css'

export default function Slider(){
    const images = useAppSelector(state => state.dragon.images);
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
                    {images.map((imageLink,key) => <Slide key={key} link={imageLink}/>)}
                </Carousel>
            </div>
        </>
    )
}