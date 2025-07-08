import React from "react";

const emptyData = []; // no data available

const EmptyTransactionTable = () => {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-[800px] w-full border-collapse border border-[#FCBD00] text-sm text-white">
        <thead className="bg-[#FCBD00] text-black">
          <tr>
            <th className="border border-[#590000] px-3 py-2">Usuario</th>
            <th className="border border-[#590000] px-3 py-2">Proveedor</th>
            <th className="border border-[#590000] px-3 py-2">TIPO</th>
            <th className="border border-[#590000] px-3 py-2">Balance Anterior</th>
            <th className="border border-[#590000] px-3 py-2">Monto</th>
            <th className="border border-[#590000] px-3 py-2">Balance Posterior</th>
            <th className="border border-[#590000] px-3 py-2">ID de la mesa</th>
            <th className="border border-[#590000] px-3 py-2">ID del torneo</th>
            <th className="border border-[#590000] px-3 py-2">Rake Mesa Viva</th>
            <th className="border border-[#590000] px-3 py-2">Rake Torneo</th>
            <th className="border border-[#590000] px-3 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {emptyData.length === 0 ? (
            <tr>
              <td
                colSpan="11"
                className="text-center py-4 text-[#fff] text-base border border-[#590000]"
              >
                No hay datos disponibles
              </td>
            </tr>
          ) : (
            emptyData.map((item, idx) => (
              <tr key={idx}>
                <td className="border border-[#590000] px-3 py-2">{item.usuario}</td>
                <td className="border border-[#590000] px-3 py-2">{item.proveedor}</td>
                <td className="border border-[#590000] px-3 py-2">{item.tipo}</td>
                <td className="border border-[#590000] px-3 py-2">{item.balanceAnterior}</td>
                <td className="border border-[#590000] px-3 py-2">{item.monto}</td>
                <td className="border border-[#590000] px-3 py-2">{item.balancePosterior}</td>
                <td className="border border-[#590000] px-3 py-2">{item.idMesa}</td>
                <td className="border border-[#590000] px-3 py-2">{item.idTorneo}</td>
                <td className="border border-[#590000] px-3 py-2">{item.rakeMesa}</td>
                <td className="border border-[#590000] px-3 py-2">{item.rakeTorneo}</td>
                <td className="border border-[#590000] px-3 py-2">{item.fecha}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmptyTransactionTable;
