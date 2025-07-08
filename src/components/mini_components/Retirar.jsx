import React from "react";
import { ImCross } from "react-icons/im";
import StarButton from "./StarButton";

const Retirar = ({ onClose }) => {
  return (
    <div>
      <div className="fixed z-50 w-screen h-screen bg-[#000000a8] flex items-center justify-center top-0 left-0">
        <div className="w-[400px] min-w-[250px] h-fit border-[3px] border-[#fcbd0057] bg-[#590000] rounded-md p-3 flex flex-col gap-2 z-50 relative">
          <button
            onClick={onClose}
            className="cancel absolute top-3 right-4 text-[#cd0000] hover:text-[#FCBD00] duration-300"
          >
            <ImCross />
          </button>

          <h1 className="text-[#FCBD00] text-2xl font-semibold text-start ">
            Retiro
          </h1>

          <h2 className="my-2 text-2xl font-bold text-[#cd0000]">
            ¡Recuerde que solo puede hacer 1 retiro por día del monto que desee
            A UNA CUENTA CON SU PROPIO CUIL/CUIT!
          </h2>

          <label htmlFor="">CBU o Alias</label>
          <input
            type="text"
            className="retirar_inp"
            placeholder="Ingrese su CBU o Alias"
          />
          <label htmlFor="">Monto a retirar</label>
          <input
            type="text"
            className="retirar_inp"
            placeholder="Minimo: 5000"
          />
          <h3 className="text-2xl font-semibold">
            Nuestras transferencias son inmediatas
          </h3>

          <p>
            Tambien puede cobrar personalmente en nuestras oficinas en La Rioja,
            Pelagio B. Luna 561
          </p>
          <p className=" mb-3">
            Ante cualquier inconveniente, contáctenos por el chat de soporte o
            nuestras redes sociales.
          </p>

          <StarButton label="Retirar"/>

        </div>
      </div>
    </div>
  );
};

export default Retirar;
