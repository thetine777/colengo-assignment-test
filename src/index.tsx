import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.scss";
import "./assets/styles/collections.scss";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
