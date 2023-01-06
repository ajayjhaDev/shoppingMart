import React from "react";
import data from "../data/products.json";
import Product from "./Product";

const Products = ({ showDrawer, onClose }) => {
  return (
    <div className="mt-4">
      <Product data={data} showDrawer={showDrawer} onClose={onClose} />
    </div>
  );
};

export default Products;
