import React from "react";
import ItemList from "./ItemList";
export default function ItemListContainer({ greeting }) {
  return (
    <>
      <p>{greeting}</p>
      <ItemList />
    </>
  );
}
