
import { Slider } from "../slider";
import styles from "./championSkins.module.scss";

export function ChampionSkins(props) {
    return (
        <div className={styles.championSkins}>
            <h2 className={styles.championTitleH2}>Доступные образы</h2>
            <Slider id={props.id} skins={props.skins} name={props.name} />
        </div>
    )
}