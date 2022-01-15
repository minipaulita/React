import React from "react";
import ItemCount from "./ItemCount";
export default function ItemList({ greeting }) {
  return (
    <>
      <p>{greeting}</p>
      <ItemCount stock={10} product={"Cuaderno"} />
    </>
  );
}
