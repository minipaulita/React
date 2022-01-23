import React from "react";

export default function ItemDetail({
  product,
  description,
  precio,
  pictureUrl,
}) {
  return (
    <>
      <h1>{product}</h1>
      <p>{description}</p>
      <p>{precio}</p>
      <img src={pictureUrl} alt="" width={"300vr"} />
    </>
  );
}
