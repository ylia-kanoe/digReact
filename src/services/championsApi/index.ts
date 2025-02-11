import { championDataDto, championsDataDto } from "./types";

class Instance {

    getChampion = async (championId: string) : Promise<championDataDto>  => {
        return await fetch(
            "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion/" + championId + ".json"
        ).then((response) => response.json())
    }

    getChampionsList = async () : Promise<championsDataDto>  => {
        return await fetch(
            "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion.json"
        ).then((response) => response.json())
    }
}

export const ChampoinsApi = new Instance();