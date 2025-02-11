type championSkills = {
    id?: string,
    name: string,
    description: string,
    image: {
        full: string
    }
}

type championSkins = {
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
}

export type propsType = {
    id: string
}