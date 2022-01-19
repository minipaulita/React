import React from "react";
import ItemCount from "./ItemCount";
export default function Item({ stock, product }) {
  return (
    <>
      <ItemCount stock={{ stock }} product={{ product }} />
    </>
  );
}
