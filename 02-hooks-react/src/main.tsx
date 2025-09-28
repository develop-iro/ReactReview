import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import {PokemonPage} from "./02-use-effect/PokemonPage.tsx";
// import { FocusPage } from "./03-use-ref/FocusPage.tsx";
// import { TrafficLightWithEffectHook } from "./02-use-effect/TrafficLightWithEffectHook.tsx";
// import {  TrafficLightWithEffect } from "./02-use-effect/TrafficLightWithEffect.tsx";
// import { TrafficLight } from "./01-use-state/TrafficLight.tsx";
// import { HookApp } from "./HookApp.tsx";
// import { TasksApp } from "./04-use-reducer/UseReducer.tsx";
import { ScrambleWords } from "./04-use-reducer/ScrambleWords";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <PokemonPage /> */}
    <ScrambleWords />
    {/* <TasksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <FocusPage /> */}
  </StrictMode>
);
