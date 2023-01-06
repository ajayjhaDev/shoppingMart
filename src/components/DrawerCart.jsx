import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

import { Button } from "antd";

const App = ({ open, onClose }) => {
  const cartItems = useSelector((state) => state.app.cartItems);
  const total = useSelector((state) => state.app.total);

  const dispatch = useDispatch();

  const addToCart = (ele) => {
    dispatch(appActions.AddToCart(ele));
  };

  const removeToCart = (ele) => {
    dispatch(appActions.removeFromCart(ele));
  };

  return (
    <>
      <Drawer
        title="CART"
        placement="right"
        onClose={onClose}
        open={open}
        width={"1000px"}
      >
        {cartItems.map((ele) => (
          <main
            key={ele.item_id}
            className="d-flex justify-content-between mt-5 crtItems align-items-center"
          >
            <div>
              <img
                src={ele.picture_url}
                alt="pic"
                height={"180px"}
                width={"180px"}
              />
            </div>
            <div>
              <strong>{ele.name}</strong>
              <p>{ele.description}</p>

              {}
            </div>
            <div style={{ width: "300px" }}>
              <span
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "6px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(ele)}
              >
                +
              </span>{" "}
              <span className="fs-6">{ele.totalItems} </span>
              <span
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "6px",
                  cursor: "pointer",
                }}
                onClick={() => removeToCart(ele)}
              >
                -
              </span>
            </div>
            <div>
              {ele.price.base_unit}
              <span className="ms-2">{ele.price.iso_4217}</span>
            </div>
          </main>
        ))}

        <div className="mt-5 d-flex justify-content-between">
          <strong>Total: {total}</strong>
          <Button type="primary">PROCEED TO BUY</Button>
        </div>
      </Drawer>
    </>
  );
};
export default App;
