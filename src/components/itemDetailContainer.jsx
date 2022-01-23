import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";

export default function ItemDetailContainer() {
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const [arrayDetail, setArrayDetail] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          product: "Cuaderno",
          description: "Cuaderno de tapa dura ilustrada, de hojas rayadas.",
          precio: "$300",
          pictureUrl:
            "https://www.thisiscolossal.com/wp-content/uploads/2019/11/felicia-Room-Giant-768x1006@2x.jpg",
        },
        {
          id: 2,
          product: "Anotador",
          description:
            "Anotador pequeño de hojas lisas con tapa blanda ilustrada",
          precio: "$150",
          pictureUrl:
            "https://i.pinimg.com/550x/b7/9e/cc/b79eccccfc46371d8377f2030e6b3670.jpg",
        },
        {
          id: 3,
          product: "Agenda",
          description:
            "Agenda 2022 de tapa dura ilustrada, semanal con planner mensual",
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
        setArrayDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      {llegoLaPromesa ? (
        <>
          {arrayDetail.map((item) => {
            return arrayDetail.map((item) => {
              return (
                <>
                  <ItemDetail
                    id={item.id}
                    product={item.product}
                    description={item.description}
                    precio={item.precio}
                    pictureUrl={item.pictureUrl}
                  />
                </>
              );
            });
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
