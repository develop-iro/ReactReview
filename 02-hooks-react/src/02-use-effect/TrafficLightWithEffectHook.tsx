import { useTrafficLight } from "./hooks/useTrafficLight";
type Props = {};

export function TrafficLightWithEffect({}: Props) {
  const {
    light,
    colors,
    countDown,
    percent,
    greenLight,
    yellowLight,
    redLight,
  } = useTrafficLight();

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
            style={{ width: `${percent}%` }}
          ></div>
          <div className={`w-32 h-32 ${redLight} rounded-full`}></div>
          <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>
          <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>
          ></div>
        </div>
      </div>
    </>
  );
}
