import React from "react";

const tableData = [
  {
    usuario: "nicoplayer",
    juego: "Digitain",
    proveedor: "BSW",
    tipo: "debit",
    balanceAnterior: "324.623,69 ARS",
    monto: "10,00 ARS",
    balancePosterior: "323.623,69 ARS",
    fecha: "9/7/2025, 12:00:15",
  },
  {
    usuario: "nicoplayer",
    juego: "Joker's Jewels(Original)",
    proveedor: "PragmaticPlay",
    tipo: "WIN",
    balanceAnterior: "326.223,69 ARS",
    monto: "400,00 ARS",
    balancePosterior: "326.623,69 ARS",
    fecha: "8/7/2025, 11:43:35",
  },
];

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-[800px] w-full border-collapse border border-[#FCBD00] text-sm text-white">
        <thead className="bg-[#FCBD00] text-black">
          <tr>
            <th className="border border-[#590000] px-3 py-2">Usuario</th>
            <th className="border border-[#590000] px-3 py-2">Juego</th>
            <th className="border border-[#590000] px-3 py-2">Proveedor</th>
            <th className="border border-[#590000] px-3 py-2">TIPO</th>
            <th className="border border-[#590000] px-3 py-2">Balance Anterior</th>
            <th className="border border-[#590000] px-3 py-2">Monto</th>
            <th className="border border-[#590000] px-3 py-2">Balance Posterior</th>
            <th className="border border-[#590000] px-3 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={idx} className="hover:bg-[#fcbd0033]">
              <td className="border border-[#590000] px-3 py-2">{item.usuario}</td>
              <td className="border border-[#590000] px-3 py-2">{item.juego}</td>
              <td className="border border-[#590000] px-3 py-2">{item.proveedor}</td>
              <td className="border border-[#590000] px-3 py-2">{item.tipo}</td>
              <td className="border border-[#590000] px-3 py-2">{item.balanceAnterior}</td>
              <td className="border border-[#590000] px-3 py-2">{item.monto}</td>
              <td className="border border-[#590000] px-3 py-2">{item.balancePosterior}</td>
              <td className="border border-[#590000] px-3 py-2">{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
