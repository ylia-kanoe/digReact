import { useState, useEffect } from "react";
import { ChampoinsApi } from "../../services/championsApi";
import { ChampionRole } from "../championRole";
import { ChampionSkills } from "../championSkills";
import { ChampionSkins } from "../championSkins";
import styles from "./champion.module.scss"
import { championType, championPropsType } from "./types";
import React from "react";

export function Champions(props: championPropsType) {
    const [champion, setChampion] = useState<championType | null>(null);

    const getApiData = async () => {
        const { data } = await ChampoinsApi.getChampion(props.id)
        setChampion(data[props.id] as championType)
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (<>
        {champion &&
            <div id={champion.id}>
                <div className={styles.championShadow}>
                    <img className={styles.championImage}
                        src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg"}
                        alt={props.id} />
                </div>
                <div className={styles.container}>
                    <div className={styles.championText}>
                        <p className={styles.championTitle}>{champion.title}</p>
                        <p className={styles.championName}>{champion.name}</p>
                        <p className={styles.championLore}>{champion.lore}</p>
                        <div><ChampionRole tags={champion.tags} /></div>
                    </div>
                </div>
                <ChampionSkills skills={champion.spells} passive={champion.passive} />
                <div className="container">
                    <ChampionSkins id={champion.id} skins={champion.skins} name={champion.name} />
                </div>
            </div >}
    </>
    )


}


