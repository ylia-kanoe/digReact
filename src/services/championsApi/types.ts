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

type championData = {
    id: string,
    name: string,
    title: string,
    lore: string,
    skins: championSkinsDataDto[],
    spells: championSkillsDataDto[],
    passive: championSkillsDataDto
    tags: string[]
}

export type championDataDto = {
    data: Record<string, championData>
}

export type championsDataDto = {
    data: Record<string, Omit<championData, "lore" | "skins" | "spells" | "passive">>
}

