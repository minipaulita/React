import React, { useState } from "react";

export default function ItemCount({ stock, product }) {
  const [cantidad, setCantidad] = useState(0);
  let onAdd = () => {
    stock > cantidad
      ? setCantidad(cantidad + 1)
      : alert("No hay suficiente stock");
  };
  let onSubtract = () => {
    cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("No puede ser menos que cero");
  };
  return (
    <>
      <div className="m-2">
        <h2>{product}</h2>
        <div className="flex flex-row justify-center items-center">
          <button
            className="p-2  hover:bg-yellow-500 rounded-full"
            onClick={() => onSubtract()}
          >
            -
          </button>
          <p>Cantidad: {cantidad}</p>

          <button
            className="p-2  hover:bg-yellow-500 rounded-full"
            onClick={() => onAdd()}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
