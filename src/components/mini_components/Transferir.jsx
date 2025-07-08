import React from 'react'
import { ImCross } from "react-icons/im";
import StarButton from './StarButton';

const Transferir = ({ onClose }) => {
  return (
    <div>
        <div className="fixed z-50 w-screen h-screen bg-[#000000a8] flex items-center justify-center top-0 left-0">

          <div className="w-[400px] min-w-[250px] h-fit border-[3px] border-[#fcbd0057] bg-[#590000] rounded-md p-3 flex flex-col gap-2 z-50 relative">

            <button onClick={onClose} className='cancel absolute top-3 right-4 text-[#cd0000] hover:text-[#FCBD00] duration-300'><ImCross /></button>

            <h1 className='text-[#FCBD00] text-2xl font-semibold text-start '>Transferir</h1>

            <label htmlFor="">Usuario a Transferir -</label>
          <input
            type="text"
            className="retirar_inp"
            placeholder="Ingrese el nombre de usuario o CUIL"
          />
          <label htmlFor="">Monto</label>
          <input
            type="text"
            className="retirar_inp mb-5"
            placeholder="Ingrese el monto a transferir"
          />
          <StarButton label="Transferir"/>

          </div>
        </div>
    </div>
  )
}

export default Transferir