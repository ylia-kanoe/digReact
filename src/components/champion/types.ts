
export type championSkills = {
    id?: string,
    name: string,
    description: string,
    image: {
        full: string
    }
}

export type championSkins = {
    num: number,
    name: string
}

export type championType = {
    id: string,
    name: string,
    title: string,
    tags: string[],
    lore: string,
    skins: championSkins[],
    spells: championSkills[],
    passive: championSkills,
}

export type championPropsType = {
    id: string
}