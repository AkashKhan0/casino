const sports = [
  { name: "Fútbol", count: 863 },
  { name: "Basquet", count: 43 },
  { name: "Tenis", count: 471 },
  { name: "Voleibol", count: 11 },
];

export default function LeftSidebar() {
  return (
    <aside className="w-full h-full bg-[#0000006b] p-4 overflow-auto">
      <h2 className="text-md mb-4">Competencia Popular</h2>
      <ul className="space-y-2">
        {sports.map((s, i) => {
          <li
            key={i}
            className="flex justify-between hover:bg-gray-700 p2 rounded cursor-pointer "
          >
            <span>{s.name}</span>
            <span className="text-gray-400">({s.count})</span>
          </li>;
        })}
      </ul>
    </aside>
  );
}
