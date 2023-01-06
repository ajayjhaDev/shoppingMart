import { useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";
import Drawer from "./components/Drawer";
import DrawerCart from "./components/DrawerCart";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
  };

  return (
    <div>
      <Header showDrawer1={showDrawer1} />
      <Products showDrawer={showDrawer} />
      <Drawer open={open} onClose={onClose} />
      <DrawerCart open={open1} onClose={onClose1} />
    </div>
  );
}

export default App;
