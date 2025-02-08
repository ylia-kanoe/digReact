import { useState, useEffect } from "react";
import { ChampoinsApi } from "../../services/championsApi";
import { responseMapper } from "../../helper/responseMapper";
import { ChampionRole } from "../championRole";
import { ChampionSkills } from "../championSkills";
import { ChampionSkins } from "../championSkins";
import "./style.css";

export function Champions(props) {
    const [champion, setChampion] = useState([]);

    const getApiData = async () => {
        const response = await ChampoinsApi.getChampion(props.id)
        setChampion(responseMapper(response.data));
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (<>
        {champion.map(item => {
            return (<div id={item.id}>
                <div className="championShadow">
                    <img className="championImage" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + item.id + "_0.jpg"} />
                </div>
                <div className="container">
                    <div className="championText">
                        <p className="championTitle">{item.title}</p>
                        <p className="championName">{item.name}</p>
                        <p className="championLore">{item.lore}</p>
                        <p><ChampionRole tags={item.tags}/></p>
                    </div>
                </div>
                    <ChampionSkills skills={item.spells} passive={item.passive}/>
                <div className="container">
                    <ChampionSkins  id={item.id} skins={item.skins} name={item.name} />
                </div>
            </div >)
        })}</>)

}


