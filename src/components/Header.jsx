import React from "react";
import { useSelector } from "react-redux";

const Header = ({ showDrawer1 }) => {
  const cartItems = useSelector((state) => state.app.cartItems);

  return (
    <div
      style={{ backgroundColor: "#1e2e40", color: "white" }}
      className="d-flex justify-content-evenly p-3"
    >
      <div>
        <h4>Shopping Mart</h4>
      </div>
      <div onClick={showDrawer1}>
        <div className="total">
          <span>{cartItems.length}</span>
        </div>
        <i className="bi bi-cart4 fs-4"></i>
      </div>
    </div>
  );
};

export default Header;
