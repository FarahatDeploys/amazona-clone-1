import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingC from "../components/Rating";
import data from "../data";

function ProductScreen() {
  const { id } = useParams();
  console.log(typeof Number(id));
  const product = data.products.find(
    (product) => Number(product._id) === Number(id)
  );
  console.log(product);
  return (
    <div className="row top">
      <Link to="/">Back to Main</Link>
      <div className="col-2">
        <img className="large" src={product.images} alt={product.name} />
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <RatingC
              Rating={product.rating}
              numReviews={product.numReviews}
            ></RatingC>
          </li>
          <li>Price: ${product.price}</li>
          <li>
            Description: <p>{product.description}</p>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">${product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? (
                    <span className="sucsses">In Stock</span>
                  ) : (
                    <span className="error">Out of Stock</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
