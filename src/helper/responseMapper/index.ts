import { championsDataDto } from "../../services/championsApi/types"
import { mapChampionsType } from "./types"

export function mapChampions(data: championsDataDto["data"]): mapChampionsType[] {
    return Object.entries(data).reduce((curr, [key, value], idx) => {
        console.log({ key, value })
        curr = [...curr, { ...value, id: key }]
        return curr
    }, [] as mapChampionsType[])
}
