import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

const Product = ({ data, showDrawer }) => {
  const dispatch = useDispatch();

  const AddDetailId = (id) => {
    dispatch(appActions.adddetailId(id));
  };

  return (
    <div className="row mx-auto">
      {data.map((ele) => (
        <div
          key={ele.item_id}
          className="col"
          onClick={() => AddDetailId(ele.item_id)}
        >
          <Card
            onClick={showDrawer}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={ele.picture_url} />}
          >
            <strong>{ele.name}</strong>

            <div className="mt-3">
              <strong className="text-primary">{ele.price.base_unit}</strong>
              <strong
                className="text-primary"
                style={{ position: "relative", bottom: "8px" }}
              >
                {ele.price.exponent}
              </strong>

              <span className="ms-2">{ele.price.iso_4217}</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
