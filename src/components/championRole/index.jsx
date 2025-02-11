import React from "react";
import styles from "./championRole.module.scss"

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
        <div className={styles.championRole}>
            <div className={styles.championRoleContainer}>
                <p className={styles.role}>Роль</p>
                <p className={styles.roleName}>
                    {props.tags.map((item, i) => {
                        return (
                            <span key={i}>
                                {i > 0 ? ' / ' + listRole[item] : listRole[item]}
                            </span>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}