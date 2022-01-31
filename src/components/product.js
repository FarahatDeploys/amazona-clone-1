import React from "react";
import RatingC from "../components/Rating";

function productC(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="card">
        <a href={`/product/${product._id}`}>
          <img className="medium" src={product.images} alt={product.name} />
        </a>
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <RatingC
            Rating={product.rating}
            numReviews={product.numReviews}
          ></RatingC>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default productC;
