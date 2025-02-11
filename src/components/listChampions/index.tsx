import React, { useEffect, useState } from "react";
import { mapChampions } from "../../helper/responseMapper";
import { mapChampionsType } from "../../helper/responseMapper/types";
import { ChampoinsApi } from "../../services/championsApi";
import styles from "./listChampions.module.scss";
import { Link } from "react-router-dom";

export function ListChampions() {
    const [champions, setChampions] = useState<mapChampionsType[]>([]);

    const getApiData = async () => {
        const { data } = await ChampoinsApi.getChampionsList()
        setChampions(mapChampions(data));
        
    };

    useEffect(() => {
        getApiData();
    }, []);
    console.log(champions)
    return (
        <div>
            <div className={styles.listChampions}>
                {champions.map((item, i) => {
                    return (<div key={i} className={styles.champions} id={item.id}>
                        <Link to={"/champions/" + item.id}>
                            <div className={styles.imageContainer}>
                                <img className={styles.championsImage}
                                    src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + item.id + "_0.jpg"}
                                    alt={item.id} />
                            </div>
                            <p className={styles.championsName}>{item.name}</p>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}
