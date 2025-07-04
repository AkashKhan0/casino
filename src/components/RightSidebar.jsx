// src/components/RightSidebar.jsx
import { useBetSlip } from "../context/BetSlipContext";

export default function RightSidebar() {
  const { bets, removeBet, totalOdds } = useBetSlip();

  return (
    <aside className="w-full h-full bg-gray-800 p-4 flex flex-col">
      <h2 className="text-md mb-4">BET SLIP</h2>

      <div className="flex-1 space-y-3 overflow-y-auto">
        {bets.map((b) => (
          <div
            key={b.id}
            className="bg-gray-700 p-2 rounded flex justify-between items-center"
          >
            <div>
              <p>{b.match}</p>
              <p className="text-sm text-gray-400">{b.selection}</p>
            </div>
            <button
              onClick={() => removeBet(b.id)}
              className="text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-md">
          <span>Total Cuotas</span>
          <span>{totalOdds.toFixed(2)}</span>
        </div>
        <button className="w-full mt-3 bg-green-600 hover:bg-green-700 py-2 rounded">
          APOSTAR 👋
        </button>
      </div>
    </aside>
  );
}
