import React from "react"
import styles from "./product.module.scss"
import { ProductCart } from "../../test2/ProductCart"

export function ProductPage() {

    return (<>
        <div className={styles.container}>
            <ProductCart />
        </div>
    </>)

}