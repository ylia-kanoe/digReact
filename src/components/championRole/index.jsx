import React from "react";
import "./style.css";

export function ChampionRole(props) {
    const listRole = {
        "Fighter": "Воин",
        "Assassin": "Убийца",
        "Mage": "Маг",
        "Marksman": "Стрелок",
        "Tank": "Танк",
        "Support": "Поддержка",
    }

    return (
        <div className="championRole">
            <div className="championRoleContainer">
                <p className="role">Роль</p>
                <p className="roleName">
                    {props.tags.map((item, i) => {
                        return (
                            <span>
                                {i > 0 ? ' / ' + listRole[item] : listRole[item]}
                            </span>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}