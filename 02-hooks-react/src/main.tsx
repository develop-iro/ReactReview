import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
// import {PokemonPage} from "./02-use-effect/PokemonPage.tsx";
// import { FocusPage } from "./03-use-ref/FocusPage.tsx";
// import { TrafficLightWithEffectHook } from "./02-use-effect/TrafficLightWithEffectHook.tsx";
// import {  TrafficLightWithEffect } from "./02-use-effect/TrafficLightWithEffect.tsx";
// import { TrafficLight } from "./01-use-state/TrafficLight.tsx";
// import { HookApp } from "./HookApp.tsx";
// import { TasksApp } from "./04-use-reducer/UseReducer.tsx";
// import { ScrambleWords } from "./04-use-reducer/ScrambleWords";
// import { MemoCounter } from "./05-use-memo/MemoCounter";
// import { SocialMediaApp } from "./06-use-optimistic/SocialMediaApp";
import { ClientInformation } from "./07-use-x-suspense/ClientInformation.tsx";
import { getUserAction } from "./07-use-x-suspense/api/get-user.action.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <MemoCounter /> */}
    {/* <PokemonPage /> */}
    {/* <ScrambleWords /> */}
    {/* <TasksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <FocusPage /> */}
    {/* <SocialMediaApp /> */}

    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>
);
