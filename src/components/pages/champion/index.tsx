import React from "react";
import { Champions } from "../../champion";
import { useParams } from "react-router";

export const Champion = () => {
    let { championName } = useParams<{ championName: string }>()
    return <Champions id={championName} />
}
