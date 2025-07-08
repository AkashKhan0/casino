import React, { useState } from "react";

const DateRangeSelector = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const setDateRange = (rangeType) => {
    const today = new Date();
    let start = new Date();
    let end = new Date();

    switch (rangeType) {
      case "Hoy":
        break;
      case "Ayer":
        start.setDate(today.getDate() - 1);
        end.setDate(today.getDate() - 1);
        break;
      case "Semana actual":
        const currentDay = today.getDay(); // 0 = Sunday
        const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1); // Monday
        start = new Date(today.setDate(diff));
        end = new Date();
        break;
      case "Mes actual":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date();
        break;
      case "La semana pasada":
        const prevWeek = new Date();
        prevWeek.setDate(today.getDate() - 7);
        const prevDay = prevWeek.getDay();
        const startOffset = prevWeek.getDate() - prevDay + (prevDay === 0 ? -6 : 1);
        start = new Date(prevWeek.setDate(startOffset));
        end = new Date(start);
        end.setDate(start.getDate() + 6);
        break;
      case "El mes pasado":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        break;
    }

    // Format to yyyy-mm-dd
    const format = (date) => date.toISOString().split("T")[0];
    setFromDate(format(start));
    setToDate(format(end));
  };

  const handleClear = () => {
    setFromDate("");
    setToDate("");
  };

  const handleApply = () => {
    alert(`From: ${fromDate} \nTo: ${toDate}`);
  };

  return (
    <div className="py-4 w-full space-y-5">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          "Hoy",
          "Ayer",
          "Semana actual",
          "Mes actual",
          "La semana pasada",
          "El mes pasado",
        ].map((label) => (
          <button
            key={label}
            onClick={() => setDateRange(label)}
            className="bg-[#FCBD00] text-black px-3 py-1 rounded hover:bg-yellow-400 text-sm font-semibold"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <label className="text-base font-medium text-white">
            Fecha Desde:
          </label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full border border-[#FCBD00] rounded px-3 py-1 bg-transparent text-white"
          />
        </div>
        <div>
          <label className="text-base font-medium text-white">
            Fecha Hasta:
          </label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full border border-[#FCBD00] rounded px-3 py-1 bg-transparent text-white"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleApply}
          className="bg-[#FCBD00] text-[#590000] px-4 py-1 rounded hover:bg-yellow-400 font-medium"
        >
          Aplicar
        </button>
        <button
          onClick={handleClear}
          className="bg-transparent text-white px-4 py-1 rounded hover:bg-[#00000054] duration-300 border border-[#FCBD00]"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default DateRangeSelector;