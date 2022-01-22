import React from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <h1>{greeting}</h1>
      <ItemList />
    </>
  );
}
