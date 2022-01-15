import React from "react";
import ItemCount from "./ItemCount";
export default function Item() {
  return (
    <>
      <ItemCount stock={10} product={"Cuaderno"} />
    </>
  );
}
