import React from "react";
import ItemCount from "./ItemCount";
export default function Item({ stock, product, price, img }) {
  return (
    <>
      <div className="m-3 flex flex-col justify-center items-center">
        <h2 className="m-2">{product}</h2>
        <img className="" src={img} alt="" width="200vr" />
        <p>{price}</p>
        <ItemCount stock={stock} />
      </div>
    </>
  );
}
