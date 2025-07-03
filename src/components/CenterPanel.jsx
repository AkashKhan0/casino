// src/components/CenterPanel.jsx
import { useBetSlip } from "../context/BetSlipContext";
import { matches } from "../data/matches";

export default function CenterPanel() {
  const { addBet } = useBetSlip();

  const handleSelect = (match, type, odd) => {
    addBet({
      id: `${match.id}-${type}`,
      match: match.teams,
      selection: type,
      odds: odd,
    });
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Apuestas en Vivo</h1>

      <div className="space-y-4">
        {matches.map((m) => (
          <div key={m.id} className="bg-gray-800 p-4 rounded hover:bg-gray-700">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-lg font-bold">{m.teams}</p>
                <p className="text-gray-400 text-sm">
                  {m.score} · {m.time}
                </p>
              </div>
              <div className="flex gap-2">
                {m.odds.home && (
                  <button
                    onClick={() => handleSelect(m, "Home", m.odds.home)}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                  >
                    {m.odds.home}
                  </button>
                )}
                {m.odds.draw && (
                  <button
                    onClick={() => handleSelect(m, "Draw", m.odds.draw)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                  >
                    {m.odds.draw}
                  </button>
                )}
                {m.odds.away && (
                  <button
                    onClick={() => handleSelect(m, "Away", m.odds.away)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                  >
                    {m.odds.away}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
