type championSkillsDataDto = {
    id?: string,
    name: string,
    description: string,
    image: {
        full: string
    }
}

type championSkinsDataDto = {
    num: number,
    name: string
}

export type championDataDto = {
    id: string,
    name: string,
    title: string,
    lore: string,
    skins: championSkinsDataDto[],
    spells: championSkillsDataDto[],
    passive: championSkillsDataDto[]
    tags: string[]
}

export type championsDataDto = {
    data: Record<string,Omit<championDataDto, "lore" | "skins" | "spells" | "passive">>
}

