import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import Screen from "./components/Screen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Screen />
  </StrictMode>
);
