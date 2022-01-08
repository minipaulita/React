import React from "react";
import Cart from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <div className="NavBar bg-yellow-300 p-2">
        <nav className="">
          <div className="flex flex-row">
            <p className="mr-96 ml-8 p-2 text-xl font-bold ">Lara Barovero</p>
            <ul className="flex space-x-20">
              <li className="inline-block hover:bg-yellow-500 p-2 rounded-full">
                <a href=""> Home</a>
              </li>
              <li className="inline-block hover:bg-yellow-500 p-2 rounded-full">
                <a href=""> Sobre nosotros</a>
              </li>
              <li className="inline-block hover:bg-yellow-500 p-2 rounded-full">
                <a href=""> Tienda</a>
              </li>
              <Cart />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
