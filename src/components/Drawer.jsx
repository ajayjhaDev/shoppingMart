import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import products from "../data/products.json";
import { appActions } from "../store/appSlice";
import options from "../data/options.json";

import { Button } from "antd";

const App = ({ open, onClose }) => {
  const id = useSelector((state) => state.app.detailId);
  const dispatch = useDispatch();

  let data = products.find((ele) => ele.item_id == id);

  let optionsData = options[id];

  const addToCart = (data) => {
    dispatch(appActions.AddToCart(data));
    alert("Item successfully added to cart");
  };

  return (
    <>
      <Drawer
        title="DETAIL"
        placement="right"
        onClose={onClose}
        open={open}
        width={"600px"}
      >
        <div className="d-flex justify-content-between crt">
          <div>
            <img
              src={data?.picture_url}
              alt="pic"
              height={"180px"}
              width={"180px"}
            />
          </div>
          <div>
            <strong>{data?.name}</strong>
            <p>{data?.description}</p>

            {optionsData?.map((ele) => (
              <div key={ele?.section_name}>
                <strong>{ele?.section_name}</strong>
                <hr />

                {ele.choices.map((ele) => (
                  <div className="d-flex">
                    <div>
                      {ele.uitype == "RADIO" ? (
                        <input type={"radio"} />
                      ) : (
                        <input type={"checkbox"} />
                      )}
                    </div>
                    <span key={ele.name}>{ele.name}</span>{" "}
                    <span className="ms-4">{`${ele.price.base_unit} USD`}</span>
                  </div>
                ))}
              </div>
            ))}

            <Button
              type="primary"
              onClick={() => addToCart(data)}
              className="mt-3"
            >
              Add TO CART
            </Button>
          </div>
          <div className={"text-primary"}>
            {data?.price?.base_unit} {data?.price?.iso_4217}
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default App;
