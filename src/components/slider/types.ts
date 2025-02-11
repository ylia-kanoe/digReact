import { championSkins } from "../champion/types"

export type sliderPropsType = {
    id: string,
    name: string,
    skins: championSkins[],
    src: string
}