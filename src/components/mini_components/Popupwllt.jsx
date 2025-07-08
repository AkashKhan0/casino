import React, { useEffect, useRef, useState } from "react";
import { ImCross } from 'react-icons/im'
import Depositar from "./Depositar";
import Retirar from "./Retirar";
import Transferir from "./Transferir";

const Popupwllt = ({ onClose }) => {

  const [depsiter, setDepositar] = useState(false);
  const [retirar, setRetirar] = useState(false);
  const [transferir, setTransferir] = useState(false);

  return (
    <div>
        <div className="w-screen h-screen bg-[#000000a8] flex items-center justify-center fixed top-0 left-0 z-10">
            <div className="w-[400px] min-w-[250px] h-fit border-[3px] border-[#fcbd008e] bg-[#590000] rounded-md p-3 flex flex-col gap-5 z-50 relative">
              <button onClick={onClose} className='cancel absolute top-3 right-4 text-[#cd0000] hover:text-[#FCBD00] duration-300'><ImCross /></button>
              <h1 className='text-[#FCBD00] text-2xl font-semibold text-center'>Billetera</h1>
              <button className='pop_btn' onClick={() => setDepositar(true)}>Depositar</button>
              <button className='pop_btn' onClick={() => setRetirar(true)}>Retirar</button>
              <button className='pop_btn' onClick={() => setTransferir(true)}>Transferir</button>
            </div>
        </div>

        <div className="">
          {depsiter && <Depositar onClose={() => setDepositar(false)} />}
          {retirar && <Retirar onClose={() => setRetirar(false)} />}
          {transferir && <Transferir onClose={() => setTransferir(false)} />}
        </div>
    </div>
  )
}

export default Popupwllt