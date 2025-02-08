import { useState } from "react";
import "./style.css";

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
        } else {
            setSliderTransform(-((massImage.length - 5) * 230))
        }
        setSliderIndicator(((massImage.indexOf(num)) * 100) / (massImage.length - 1))
    }

    return (<>
        <div className="sliderMain">
            <img src={mainImg} />
        </div>
        <div className="sliderItems">
            <ul className="sliderItemList" style={{ transform: "translateX(" + sliderTransform + "px)" }}>{props.skins.map(item => {
                return (
                    <li className={item.num === active ? "sliderItem active" : 'sliderItem'} onClick={() => nextImage(item.num)}>
                        <img className="sliderItemImage" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + props.id + "_" + item.num + ".jpg"} />
                        <p className="sliderItemTitle">{item.name === 'default' ? props.name : item.name}</p>
                    </li>
                )
            })}
            </ul>
        <div className="sliderControl">
            <div className="indicator"><div style={{ width: sliderIndicator + "%" }}></div></div>
            <button className="sliderButton left" onClick={() => nextImage(massImage.indexOf(active) === 0 ? massImage[massImage.length - 1] : massImage[massImage.indexOf(active) - 1])}>➤</button>
            <button className="sliderButton right" onClick={() => nextImage(massImage.indexOf(active) === massImage.length - 1 ? massImage[0] : massImage[massImage.indexOf(active) + 1])}>➤</button>
        </div>
        </div>
    </>)
}
