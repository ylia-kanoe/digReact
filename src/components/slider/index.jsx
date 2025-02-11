import { useState } from "react";
import styles from '../slider/slider.module.scss'

export function Slider(props) {
    const [mainImg, setMainImg] = useState("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + props.id + "_0.jpg")
    const [active, setActive] = useState(0)
    const [sliderTransform, setSliderTransform] = useState(0)
    const [sliderIndicator, setSliderIndicator] = useState(0)

    const massImage = []
    props.skins.map(item => {
        massImage.push(item.num)
    })

    function nextImage(num) {
        setMainImg("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + props.id + "_" + num + ".jpg")
        setActive(num)
        if (massImage.length - massImage.indexOf(num) > 5) {
            setSliderTransform(-(massImage.indexOf(num) * 230))
        } else if (massImage.length >= 5) {
            setSliderTransform(-((massImage.length - 5) * 230))
        }
        setSliderIndicator(((massImage.indexOf(num)) * 100) / (massImage.length - 1))
    }

    return (<>
        <div className={styles.sliderMain}>
            <img src={mainImg} alt={props.id} />
        </div>
        <div className={styles.sliderItems}>
            <ul className={styles.sliderItemList} style={{ transform: "translateX(" + sliderTransform + "px)" }}>
                {props.skins.map((item, i) => {
                    return (
                        <li key={i} className={`${styles.sliderItem} ${item.num === active ? styles.active : ''}`} onClick={() => nextImage(item.num)}>
                            <img className={styles.sliderItemImage}
                                src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + props.id + "_" + item.num + ".jpg"}
                                alt={item.name} />
                            <p className={styles.sliderItemTitle}>{item.name === 'default' ? props.name : item.name}</p>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.sliderControl}>
                <div className={styles.indicator}><div style={{ width: sliderIndicator + "%" }}></div></div>
                <button className={`${styles.sliderButton} ${styles.left}`}
                    onClick={() => nextImage(massImage.indexOf(active) === 0 ? massImage[massImage.length - 1] : massImage[massImage.indexOf(active) - 1])}>
                    ➤
                </button>
                <button className={`${styles.sliderButton}`}
                    onClick={() => nextImage(massImage.indexOf(active) === massImage.length - 1 ? massImage[0] : massImage[massImage.indexOf(active) + 1])}>
                    ➤
                </button>
            </div>
        </div>
    </>)
}
