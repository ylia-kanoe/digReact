import { Champions } from "./champion";

const BuildPage = (id) => (
    <>
        <Champions id={id}/>
    </>
);

export const PageChampion = () => BuildPage(window.location.pathname.slice(1));