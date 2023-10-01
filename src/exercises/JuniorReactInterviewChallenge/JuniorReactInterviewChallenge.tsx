import { FC, useState } from "react";

interface IPoint {
  x?: number;
  y?: number;
}

export const JuniorReactInterviewChallenge: FC<IPoint> = () => {
  const [points, setPoints] = useState<IPoint[]>([]);
  const [popped, setPopped] = useState<IPoint[]>([]);

  const handlePlaceCircle = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX - 60,
        y: clientY - 10,
      },
    ]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  };

  return (
    <div className="relative">
      <button
        disabled={points.length === 0}
        className="absolute top-4 left-4 z-10 py-3 px-6 border disabled:opacity-50 bg-slate-600 font-semibold border-white rounded-lg text-white uppercase"
        onClick={handleUndo}
      >
        Undo
      </button>

      <button
        disabled={popped.length === 0}
        className="absolute top-4 left-32 z-10 py-3 px-6 border disabled:opacity-50 bg-slate-600 font-semibold border-white rounded-lg text-white uppercase"
        onClick={handleRedo}
      >
        Redo
      </button>

      <div className="h-screen bg-slate-900" onClick={handlePlaceCircle}>
        {points.map((point, index) => (
          <div
            key={index}
            className="w-5 h-5 border-2 border-white rounded-full bg-inherit inline-block absolute"
            style={{
              left: point.x + "px",
              top: point.y + "px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
