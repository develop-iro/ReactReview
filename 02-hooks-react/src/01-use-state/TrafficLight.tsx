import { useState } from "react";

const colors = {
  default: "bg-gray-800",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

type TrafficLightColors = keyof typeof colors;

type Props = {};

export function TrafficLight({}: Props) {
  const [light, setLight] = useState<TrafficLightColors>("red");
  const handleColorChange = (color: "red" | "yellow" | "green") => {
    setLight((prev) => color);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
          <div
            className={`w-32 h-32 ${
              light === "red" ? colors.red : colors.default
            } rounded-full`}
          ></div>
          <div
            className={`w-32 h-32 ${
              light === "yellow" ? colors.yellow : colors.default
            } rounded-full`}
          ></div>
          <div
            className={`w-32 h-32 ${
              light === "green" ? colors.green : colors.default
            } rounded-full`}
          ></div>

          {/* Botón para cambiar el estado de la luz */}
          <div className="flex gap-2">
            <button
              onClick={() => handleColorChange("red")}
              className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Rojo
            </button>
            <button
              onClick={() => handleColorChange("yellow")}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Amarillo
            </button>
            <button
              onClick={() => handleColorChange("green")}
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Verde
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
