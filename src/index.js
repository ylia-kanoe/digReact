import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


import {Test} from "./components/Test";
import {ProductCart} from "./components/ProductCart"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     <ProductCart/>
  </StrictMode>
);