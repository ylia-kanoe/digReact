import { useState, useEffect } from "react";
import { ChampoinsApi } from "../../services/championsApi";
import { responseMapper } from "../../helper/responseMapper";
import "./style.css";

export function ListChampions() {
    const [champions, setChampions] = useState([]);

    const getApiData = async () => {
        const response = await ChampoinsApi.getChampionsList()
        setChampions(responseMapper(response.data));
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (<div className="">
        <div className="listChampions">
            {champions.map(item => {
                return (<div className="champions" id={item.id}>
                    <a href={"/" + item.id}>
                        <div className="imageContainer">
                            <img className="championsImage" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + item.id + "_0.jpg"} />
                        </div>
                        <p className="championsName">{item.name}</p>
                    </a>
                </div>)

            })}
            {champions.name}</div>
    </div>)
}
