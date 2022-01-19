import React from "react";
import Item from "./Item";

export default function ItemList() {
  let itemArray = [
    { product: "cuaderno", stock: 10 },
    { product: "anotador", stock: 15 },
    { product: "agenda", stock: 7 },
  ];
  return (
    <>
      {itemArray.map((item) => (
        <Item stock={item.stock} product={item.product} />
      ))}
    </>
  );
}
