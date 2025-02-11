
import React from "react";
import { Slider } from "../slider";
import styles from "./championSkins.module.scss";
import { championSkinsPropsType } from "./types";

export function ChampionSkins(props: championSkinsPropsType) {
    return (
        <div className={styles.championSkins}>
            <h2 className={styles.championTitleH2}>Доступные образы</h2>
            <Slider id={props.id} skins={props.skins} name={props.name} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"} />
        </div>
    )
}