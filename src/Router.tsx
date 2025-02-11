import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Champion } from "./components/pages/champion"
import { Champions } from "./components/pages/champions"
import { ProductPage } from "./components/pages/product"
import { Home } from "./components/pages/home"

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/champions">
                        <Champions />
                    </Route>
                    <Route path="/champions/:championName">
                        <Champion />
                    </Route>
                    <Route exact path="/product">
                        <ProductPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}