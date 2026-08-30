import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(<App></App>);

/* 

2 типа сущностей с которыми работает react

- реакт элементы div span p img
- реакт компоненты -> композиция из реакт элементы

*/
