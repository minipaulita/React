import React, { useEffect, useState } from "react";
import Item from "./Item";
export default function ItemList() {
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          product: "Cuaderno",
          stock: 10,
          precio: "$300",
          pictureUrl:
            "https://www.thisiscolossal.com/wp-content/uploads/2019/11/felicia-Room-Giant-768x1006@2x.jpg",
        },
        {
          product: "Anotador",
          stock: 15,
          precio: "$150",
          pictureUrl:
            "https://i.pinimg.com/550x/b7/9e/cc/b79eccccfc46371d8377f2030e6b3670.jpg",
        },
        {
          product: "Agenda",
          stock: 7,
          precio: "$1000",
          pictureUrl:
            "https://cdn.girlsclub.asia/wp-content/uploads/2019/09/22130458/AnotherApartment.jpg",
        },
      ]);
    }, 5000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        setLlegoLaPromesa(true);
        setArrayDeProductos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      {llegoLaPromesa ? (
        <>
          {arrayDeProductos.map((item) => {
            return (
              <Item
                stock={item.stock}
                product={item.product}
                price={item.precio}
                img={item.pictureUrl}
              />
            );
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
