import { useEffect, useState } from "react";

const colors = {
  default: "bg-gray-800",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

type TrafficLightColors = keyof typeof colors;

export function useTrafficLight() {
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
  }, [light, countDown]);

  return {
    light,
    colors,
    percent: (countDown / 10) * 100,
    greenLight: light === "green" ? colors.green : colors.default,
    yellowLight: light === "yellow" ? colors.yellow : colors.default,
    redLight: light === "red" ? colors.red : colors.default,
    countDown,
    setLight,
  };
}
