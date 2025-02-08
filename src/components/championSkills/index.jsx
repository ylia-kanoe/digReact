import { useState } from "react";
import "./style.css";

export function ChampionSkills(props) {
    return (
        <div>
            <div>Умения</div>
            <img src={"https://ddragon.leagueoflegends.com/cdn/15.3.1/img/passive/" + props.passive.image.full} />
            <p>{props.passive.name}</p>
            <p>{props.passive.description}</p>
            {props.skills.map(item => {
                return (
                    <div>
                        <img src={"https://ddragon.leagueoflegends.com/cdn/15.3.1/img/spell/" + item.image.full} />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.id.toString().slice(-1)}</p>
                    </div>
                )
                console.log(item)
            })}

        </div>
    )
}