import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App";
import "./index.css";

document.addEventListener("visibilitychange", () => {
  document.documentElement.classList.toggle("page-hidden", document.hidden);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
