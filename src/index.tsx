import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.scss";
import "./assets/styles/collections.scss";
import "./assets/styles/button.scss";
import "./assets/styles/divider.scss";
import "./assets/styles/register.scss";
import "./assets/styles/product-carousel.scss";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
