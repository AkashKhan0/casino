import React from 'react'
import { ImCross } from 'react-icons/im'

const Depositar = ({ onClose }) => {
  return (
    <div>
        <div className="fixed z-50 w-screen h-screen bg-[#000000a8] flex items-center justify-center top-0 left-0">

          <div className="w-[400px] min-w-[250px] h-fit border-[3px] border-[#fcbd0057] bg-[#590000] rounded-md p-3 flex flex-col gap-2 z-50 relative">

            <button onClick={onClose} className='cancel absolute top-3 right-4 text-[#cd0000] hover:text-[#FCBD00] duration-300'><ImCross /></button>

            <h1 className='text-[#FCBD00] text-2xl font-semibold text-start '>Depósito</h1>
              <h5 className='mt-1'>ALIAS PARA TRANSFERIR:</h5>
              <h1 className='text-5xl font-bold mb-3'>aguante.TEL</h1>
              <p>Datos de la cuenta:</p>
              <p>Entidad: PAGAR S.A.</p>
              <p>CUIT: 30715305050</p>
              <h2 className='my-2 text-3xl font-bold text-[#cd0000]'>¡ATENCION!</h2>
              <p className='font-semibold text-md'>El CUIL de la cuenta desde donde transfiera debe coincidir con el de su usuario.</p>
              <p className='text-[#FCBD00] font-semibold text-md'>Y EL MINIMO DE CARGA ES $2.000,00</p>
              <p className='font-semibold text-md'>¡Sino no se acreditara la transferencia!</p>
          </div>
        </div>
    </div>
  )
}

export default Depositar