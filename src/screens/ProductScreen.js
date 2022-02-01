import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessagBox from "../components/MessagBox";
import RatingC from "../components/Rating";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ProductScreen() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.prodcutDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  console.log(productDetails);

  useEffect(() => {
    dispatch(detailProducts(id));
  }, [dispatch, id]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessagBox varient="danger">{error}</MessagBox>
      ) : (
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
      )}
    </div>
  );
}

export default ProductScreen;
