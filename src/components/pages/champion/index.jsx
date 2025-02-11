import { Champions } from "../../champion";
import { useParams } from "react-router";

export const Champion = () => {
    let {championName} = useParams()
    return <Champions id={championName} />
}
