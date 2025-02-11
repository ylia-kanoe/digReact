import { useState } from "react";
import styles from "./championSkills.module.scss"
import React from "react";
import { championSkillsPropsType } from "./types";

export function ChampionSkills(props: championSkillsPropsType) {
    const [activeSkills, setActiveSkills] = useState(props.passive.name)

    function skillClick(name: string) {
        setActiveSkills(name)
    }

    return (
        <div className={styles.championSkills}>
            <div className={styles.container}>
                <div className={styles.championSkillBlock}>
                    <div className={styles.championSkillsListItems}>
                        <div className={styles.championSkillsTitle}>Умения</div>
                        <div className={styles.championSkilllist}>
                            <div className={`${styles.skillItem} ${activeSkills === props.passive.name ? styles.active : ''}`}
                                onClick={() => { skillClick(props.passive.name) }}>
                                <img className={styles.skillItemImage}
                                    src={"https://ddragon.leagueoflegends.com/cdn/15.3.1/img/passive/" + props.passive.image.full}
                                    alt={props.passive.name} />
                                <p className={styles.skillItemName}>{props.passive.name}</p>
                            </div>

                            {props.skills.map((item, i) => {
                                return (
                                    <div key={i} className={`${styles.skillItem} ${activeSkills === item.name ? styles.active : ''}`}
                                        onClick={() => { skillClick(item.name) }}>
                                        <img className={styles.skillItemImage}
                                            src={"https://ddragon.leagueoflegends.com/cdn/15.3.1/img/spell/" + item.image.full}
                                            alt={item.name} />
                                        <p className={styles.skillItemName}>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.championSkillInfo}>
                        <div className={`${styles.skillInfo} ${activeSkills === props.passive.name ? styles.active : ''}`} >
                            <p className={styles.skillInfoName}>{props.passive.name}</p>
                            <p className={styles.skillInfoKey}>Пассивное</p>
                            <p className={styles.skillInfoDescription}>{props.passive.description.replace(/<[^>]*>/g, '')}</p>
                        </div>
                        {props.skills.map((item, i) => {
                            return (
                                <div key={i} className={`${styles.skillInfo} ${activeSkills === item.name ? styles.active : ''}`}>
                                    <p className={styles.skillInfoName}>{item.name}</p>
                                    <p className={styles.skillInfoKey}>{item.id?.toString().slice(-1)}</p>
                                    <p className={styles.skillInfoDescription}>{item.description.replace(/<[^>]*>/g, '')}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}