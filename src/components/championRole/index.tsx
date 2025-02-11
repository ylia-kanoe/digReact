import React from "react";
import styles from "./championRole.module.scss"
import { championRolePropsType, Roles } from "./types";

export function ChampionRole(props: championRolePropsType) {
    return (
        <div className={styles.championRole}>
            <div className={styles.championRoleContainer}>
                <p className={styles.role}>Роль</p>
                <p className={styles.roleName}>
                    {props.tags.map((item, i) => {
                        return (
                            <span key={i}>
                                {i > 0 ? ` / ${Roles[item as keyof typeof Roles]} `: Roles[item as keyof typeof Roles]}
                            </span>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}