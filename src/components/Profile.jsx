import React, { useEffect, useState } from "react";
import StarButton from "./mini_components/StarButton";

import { BiHide, BiShow } from "react-icons/bi";
import DateRangeSelector from "./mini_components/DateRangeSelector";
import TransactionTable from "./mini_components/TransactionTable ";
import EmptyTransactionTable from "./mini_components/EmptyTransactionTable";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("perfil"); // "perfil" or "historial"
  const [activeSub, setActiveSub] = useState("info"); // default sub for perfil
  const [activeSubHistorial, setActiveSubHistorial] = useState("recent"); // for historial
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [today, setToday] = useState("");
  const [selected, setSelected] = useState("Todos");

  const perfilSubmenu = [
    { id: "info", label: "Datos personales" },
    { id: "password", label: "Seguridad" },
    { id: "notificaciones", label: "Transferencias" },
  ];

  const historialSubmenu = [
    { id: "recent", label: "JUGADAS GENERAL" },
    { id: "wins", label: "JUGADAS POKER" },
  ];

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  return (
    <div>
      <div className="w-full h-auto navbar flex justify-center items-center">
        <div className="w-full h-auto px-2 md:px-5 lg:px-10">
          <div className="my-5">
            {/* Top Tabs */}
            <div className="flex gap-4 mb-2">
              <button
                className={`px-4 py-1 rounded-t-md font-semibold ${
                  activeTab === "perfil"
                    ? "bg-[#FCBD00] text-black"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("perfil")}
              >
                Mi Perfil
              </button>
              <button
                className={`px-4 py-1 rounded-t-md font-semibold ${
                  activeTab === "historial"
                    ? "bg-[#FCBD00] text-black"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("historial")}
              >
                Historial de Jugadas
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-4 bg-[#0000003b] shadow-lg rounded-md p-4">
              {/* Left Side Submenu */}
              <div className="w-full md:w-[20%]">
                {(activeTab === "perfil"
                  ? perfilSubmenu
                  : historialSubmenu
                ).map((item) => {
                  const isActive =
                    activeTab === "perfil"
                      ? activeSub === item.id
                      : activeSubHistorial === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`cursor-pointer px-3 py-1 rounded mb-2 font-medium ${
                        isActive
                          ? "bg-[#FCBD00] text-black"
                          : "bg-gray-100 text-gray-700"
                      }`}
                      onClick={() =>
                        activeTab === "perfil"
                          ? setActiveSub(item.id)
                          : setActiveSubHistorial(item.id)
                      }
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>

              {/* Right Side Content */}
              <div className="w-full md:w-[80%] border-l pl-4">
                {/* my profile 1st item */}
                {activeTab === "perfil" && activeSub === "info" && (
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-xl font-semibold mb-2">Generales</h2>

                    <label htmlFor="">Nombre de Usuario</label>

                    <input
                      type="text"
                      className="outline-none rounded-md bg-transparent border-[1px] border-[#FCBD00] py-1 px-2"
                    />

                    <label htmlFor="">CUIL</label>

                    <input
                      type="text"
                      className="outline-none rounded-md bg-transparent border-[1px] border-[#FCBD00] py-1 px-2"
                    />

                    <h2 className="text-xl font-semibold mb-2">
                      Número de teléfono
                    </h2>

                    <label htmlFor="">Móvil</label>

                    <input
                      type="text"
                      className="outline-none rounded-md bg-transparent border-[1px] border-[#FCBD00] py-1 px-2"
                    />

                    <StarButton label="Editar" />
                  </div>
                )}

                {/* my profile 2nd item */}
                {activeTab === "perfil" && activeSub === "password" && (
                  <div>
                    <div className="flex flex-col gap-2 w-full">
                      <h2 className="text-xl font-semibold mb-2">Seguridad</h2>
                      <div className="p-5 bg-[#00000054] rounded-md w-full md:w-[50%]">
                        <h2 className="text-lg font-semibold mb-2">
                          Cambiar la contraseña
                        </h2>

                        <label htmlFor="">Contraseña actual</label>
                        <div className="w-full flex justify-between items-center  border-[1px] border-[#FCBD00] p-1 rounded-md my-2">
                          <input
                            type={showPassword ? "text" : "password"}
                            name=""
                            id=""
                            className="w-full bg-transparent outline-none text-base px-1"
                          />
                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-2xl text-[#FCBD00]"
                          >
                            {showPassword ? <BiHide /> : <BiShow />}
                          </span>
                        </div>

                        <label htmlFor="">Nueva contraseña</label>
                        <div className="w-full flex justify-between items-center  border-[1px] border-[#FCBD00] p-1 rounded-md my-2">
                          <input
                            type={showPassword1 ? "text" : "password"}
                            name=""
                            id=""
                            className="w-full bg-transparent outline-none text-base px-1"
                          />
                          <span
                            onClick={() => setShowPassword1(!showPassword1)}
                            className="text-2xl text-[#FCBD00]"
                          >
                            {showPassword1 ? <BiHide /> : <BiShow />}
                          </span>
                        </div>

                        <label htmlFor="">Confirmar nueva contraseña</label>
                        <div className="w-full flex justify-between items-center  border-[1px] border-[#FCBD00] p-1 rounded-md mt-2 mb-5">
                          <input
                            type={showPassword2 ? "text" : "password"}
                            name=""
                            id=""
                            className="w-full bg-transparent outline-none text-base px-1"
                          />
                          <span
                            onClick={() => setShowPassword2(!showPassword2)}
                            className="text-2xl text-[#FCBD00]"
                          >
                            {showPassword2 ? <BiHide /> : <BiShow />}
                          </span>
                        </div>

                        <StarButton label="Confirmar" />
                      </div>
                    </div>
                  </div>
                )}

                {/* my profile 3rd item */}
                {activeTab === "perfil" && activeSub === "notificaciones" && (
                  <div>
                    <div className="flex flex-col gap-2 w-full">
                      <h2 className="text-3xl font-semibold text-center mb-2 text-[#FCBD00]">
                        Movimientos Telepagos
                      </h2>
                      <div className="w-full">
                        <div className="my-5 p-2 flex flex-wrap gap-2 justify-between">
                          <div className="w-fit flex flex-col gap-2">
                            <label htmlFor="">Desde:</label>
                            <input
                              type="date"
                              value={today}
                              onChange={(e) => setToday(e.target.value)}
                              className="outline-none rounded-md bg-transparent border-[1px] border-[#FCBD00] px-2"
                            />
                          </div>

                          <div className="w-fit flex flex-col gap-2">
                            <label htmlFor="">Hasta:</label>
                            <input
                              type="date"
                              value={today}
                              onChange={(e) => setToday(e.target.value)}
                              className="outline-none rounded-md bg-transparent border-[1px] border-[#FCBD00] px-2"
                            />
                          </div>

                          <div className="w-fit flex flex-col gap-2">
                            <label htmlFor="">Tipo:</label>
                            <select
                              value={selected}
                              onChange={(e) => setSelected(e.target.value)}
                              className="outline-none rounded-md bg-transparent border border-[#FCBD00] py-[2px] px-2 text-white"
                            >
                              <option value="Todos">Todos</option>
                              <option value="Depósitos">Depósitos</option>
                              <option value="Retiros">Retiros</option>
                              <option value="Transferencias">
                                Transferencias
                              </option>
                              <option value="Rollbacks">Rollbacks</option>
                              <option value="Rechazados">Rechazados</option>
                            </select>
                          </div>

                          <div className="w-fit flex flex-col gap-2">
                            <div className="flex items-center justify-end gap-2 mt-8">
                              <StarButton label="Filtrar" />
                              <StarButton label="Resetear" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="w-full overflow-x-scroll">
                          <div className="w-full">
                            <ul className="flex items-center justify-between bg-[#FCBD00] tbl_data">
                              <li>Fecha</li>
                              <li>Emisor</li>
                              <li>Receptor</li>
                              <li>Tipo</li>
                              <li>Importe</li>
                              <li>Saldo Antes</li>
                              <li>Saldo Después</li>
                            </ul>
                          </div>
                          <div className="w-full tbl_data_show">
                            <p className="text-center p-2 text-lg">
                              No hay resultados
                            </p>
                          </div>
                          <div className="w-full flex mt-2 items-center justify-center gap-3">
                            <StarButton label="‹ Anterior" />
                            <p className="text-lg">Página 1</p>
                            <StarButton label="Siguiente ›" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


{/* second tab */}
                {activeTab === "historial" &&
                  activeSubHistorial === "recent" && (
                    <div>
                      <DateRangeSelector/>
                      <h2 className="px-4 text-2xl font-semibold">Reporte General</h2>
                      <TransactionTable/>

                      <div className="w-full flex mt-2 items-center justify-center gap-3">
                            <StarButton label="‹ Anterior" />
                            <p className="text-lg">Página 1</p>
                            <StarButton label="Siguiente ›" />
                          </div>
                    </div>
                  )}
                {activeTab === "historial" && activeSubHistorial === "wins" && (
                  <div>
                      <DateRangeSelector/>
                      <h2 className="text-2xl font-semibold">Detalles Poker</h2>
                      <EmptyTransactionTable/>

                      <div className="w-full flex mt-2 items-center justify-center gap-3">
                            <StarButton label="‹ Anterior" />
                            <p className="text-lg">Página 1</p>
                            <StarButton label="Siguiente ›" />
                          </div>

                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
