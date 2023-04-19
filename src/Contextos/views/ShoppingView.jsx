import React, { useContext, useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Product from "../components/Product/Product";
import { ShopContext } from "../contexts/ShopContext";

const PRODUCTS_JSON = [
  {
    title: "Producto 1",
    description: "Descripcion del producto 1",
    price: 100,
  },
  {
    title: "Producto 2",
    description: "Descripcion del producto 1",
    price: 100,
  },
  {
    title: "Producto 3",
    description: "Descripcion del producto 1",
    price: 100,
  },
];

const ShoppingView = () => {
  const [products, setProducts] = useState(PRODUCTS_JSON);

  const { addToCart } = useContext(ShopContext);

  return (
    <GeneralLayout>
      <div>
        <h1>Shopping</h1>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        {products.map((product) => (
          <Product
            key={product.title}
            header={product.title}
            body={product.description}
            footer={product.price}
            textBtn="Add to cart"
            onClicked={(data) => {
              addToCart(data);
            }}
          />
        ))}
      </div>
    </GeneralLayout>
  );
};

export default ShoppingView;
