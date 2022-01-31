import React, { useEffect } from "react";
import ProductC from "../components/product";
import { useState } from "react";
import axios from "axios";
import MessageBox from "../components/MessagBox";
import LoadingBox from "../components/LoadingBox";
function HomeScreen() {
  const [productsState, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //since by default am not loading anything
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataBack = await axios.get("/api/products");
        console.log("Current Data From BackEND", dataBack.data.products);
        setProducts(dataBack.data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("Current State is", productsState);
  // let's build something to be shown to the user that
  // the website is loading
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {productsState.map((product) => {
            return <ProductC key={product._id} product={product}></ProductC>;
          })}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
