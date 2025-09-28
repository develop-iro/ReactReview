import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {PokemonPage} from "./02-use-effect/PokemonPage.tsx";
// import {  TrafficLightWithEffect } from "./02-use-effect/TrafficLightWithEffect.tsx";
// import { TrafficLight } from "./01-use-state/TrafficLight.tsx";
// import { HookApp } from "./HookApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonPage />
    {/* <TrafficLightWithEffect /> */}
  </StrictMode>
);
