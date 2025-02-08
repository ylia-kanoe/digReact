import { ListChampions } from "./listChampions"

export function Home() {

    return (<>
        <div className="container">
            <div className="homeText">
                <p>ВЫБЕРИТЕ</p>
                <h1 className="homeTitle">ЧЕМПИОНА</h1>
            </div>
            <ListChampions />
        </div>
    </>)

}
