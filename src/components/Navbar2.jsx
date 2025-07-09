import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "SLOTS",
    path: "/slots",
    children: [
      { name: "Slots A", path: "/slots/a" },
      { name: "Slots B", path: "/slots/b" },
      { name: "Slots C", path: "/slots/c" },
    ],
  },
  {
    title: "Casino en directo",
    path: "/casino-en-directo",
    children: [
      { name: "SALA A", path: "/casino-en-directo/sala-a" },
      { name: "SALA B", path: "/casino-en-directo/sala-b" },
      { name: "SALA C", path: "/casino-en-directo/sala-c" },
    ],
  },
  {
    title: "DEPORTES",
    path: "/deportes",
    children: [
      { name: "Deportes A", path: "/deportes/a" },
      { name: "Deportes B", path: "/deportes/b" },
    ],
  },
  {
    title: "Poker",
    path: "/poker",
    children: [
      { name: "Poker Online", path: "/poker/online" },
      { name: "Poker vs. Banca", path: "/poker/banca" },
    ],
  },
  {
    title: "Loteria y Bingo",
    path: "/loteria-bingo",
    children: [
      { name: "SALA A", path: "/loteria-bingo/sala-a" },
      { name: "SALA B", path: "/loteria-bingo/sala-b" },
    ],
  },
  {
    title: "Funciones",
    path: "/funciones",
  },
];


const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    {
      title: "SLOTS",
      children: ["Slots A", "Slots B", "Slots C"],
    },
    {
      title: "Casino en directo",
      children: ["SALA A", "SALA B", "SALA C"],
    },
    {
      title: "DEPORTES",
      children: ["Deportes A", "Deportes B"],
    },
    {
      title: "Poker",
      children: ["Poker Online", "Poker vs. Banca"],
    },
    {
      title: "Loteria y Bingo",
      children: ["SALA A", "SALA B"],
    },
    {
      title: "Funciones",
    },
  ];

return (
    <nav className="bg-black text-white px-4 py-3 w-full">
      <div className="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
        {navItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <Link
              to={item.path}
              className="cursor-pointer font-semibold hover:text-yellow-400"
            >
              {item.title}
            </Link>

            {item.children && (
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 w-44">
                {item.children.map((child, i) => (
                  <Link
                    to={child.path}
                    key={i}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar2;
