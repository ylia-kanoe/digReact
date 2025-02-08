
import { Slider } from "../slider";
import "./style.css";

export function ChampionSkins(props) {
    return (
        <div className="championSkins">
            <h2 className="championTitleH2">Доступные образы</h2>
            <Slider id={props.id} skins={props.skins} name={props.name} />
        </div>
    )
}