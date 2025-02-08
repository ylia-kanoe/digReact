import React from "react"

class Instance extends React.Component {

    getChampion = async (championId) => {
        return await fetch(
            "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion/" + championId + ".json"
        ).then((response) => response.json())
    }
    getChampionsList = async () => {
        return await fetch(
            "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion.json"
        ).then((response) => response.json())
    }
    /*
        async getChampion(championId) {
            return await fetch(
                "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion/" + championId + ".json"
            ).then((response) => response.json())
        }*/
    /*
        async getChampionsList() {
            return await fetch(
                "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/ru_RU/champion.json"
            ).then((response) => response.json())
        }*/
}
export const ChampoinsApi = new Instance();