import React from "react";

function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <h3>name: {props.product.name}</h3>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
    </div>
  );
}

export default Product;