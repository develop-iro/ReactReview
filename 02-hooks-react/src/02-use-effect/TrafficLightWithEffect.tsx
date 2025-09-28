import { useEffect, useState } from "react";

const colors = {
  default: "bg-gray-800",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

type TrafficLightColors = keyof typeof colors;

type Props = {};

export function TrafficLightWithEffect({}: Props) {
  const [light, setLight] = useState<TrafficLightColors>("red");
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  useEffect(() => {
    if (countDown > 0) return;

    setCountDown(10);
    if (light === "red") {
      setLight("green");
      return;
    }
    if (light === "green") {
      setLight("yellow");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
    return;

    return;
  }, [light, countDown]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-white text-4xl font-bold">
            Semáforo con useEffect
          </h1>
          <h2 className="text-white text-2xl font-semibold">
            Cambio de luz cada {countDown} segundos
          </h2>
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(countDown / 10) * 100}%` }}
          ></div>
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
        </div>
      </div>
    </>
  );
}
