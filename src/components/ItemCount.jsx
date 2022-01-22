import React, { useState } from "react";

export default function ItemCount({ stock }) {
  const [cantidad, setCantidad] = useState(0);
  let agregar = () => {
    stock > cantidad
      ? setCantidad(cantidad + 1)
      : alert("No hay suficiente stock");
  };
  let onSubtract = () => {
    cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("No puede ser menos que cero");
  };
  let onAdd = () => {
    alert("Agregado al Carrito");
  };
  return (
    <>
      <div className="">
        <div className="flex flex-row justify-center items-center">
          <button
            className="p-1  hover:bg-yellow-500 rounded-full"
            onClick={() => onSubtract()}
          >
            -
          </button>
          <p>Cantidad: {cantidad}</p>

          <button
            className="p-1  hover:bg-yellow-500 rounded-full"
            onClick={() => agregar()}
          >
            +
          </button>
        </div>
        <button
          className="hover:bg-yellow-500 rounded-full"
          onClick={() => onAdd()}
        >
          Agregar Al Carrito
        </button>
      </div>
    </>
  );
}
