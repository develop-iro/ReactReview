import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MyAwesomeApp from "./components/MyAwesomeApp.tsx";
import ItemCounter from "./components/ItemCounter.tsx";

// Purpose of StrictMode:

// Detect unsafe side effects.
// Warn about deprecated lifecycle methods.
// Help prepare your code for future React versions.
// It does not affect production behavior—only development—by
// showing warnings to improve code quality and safety.
// In your code, wrapping <App /> with <StrictMode> ensures these checks are active.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <MyAwesomeApp />
    <ItemCounter initialCount={10} />
  </StrictMode>
);
