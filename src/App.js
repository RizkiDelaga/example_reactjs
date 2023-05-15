import { Fragment } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormOrder from "./pages/FormOrder/FormOrder";
import ListOrder from "./pages/ListOrder/ListOrder";
import DetailOrder from "./pages/DetailOrder/DetailOrder";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="FormOrder" element={<FormOrder />} />
          <Route path="Order" element={<ListOrder />} />
          <Route path="Order/id" element={<DetailOrder />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
