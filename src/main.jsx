import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { FavourateFood } from "./FavFood.jsx";
import { App2 } from "./new.jsx";
import Animals from "./Animals.jsx";
import PackingList from "./PackingList.jsx";
import MonthList from "./Months.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <FavourateFood />
    <App2 />
    <Animals />
    <App />
    <PackingList />
    <MonthList />
  </StrictMode>
);
