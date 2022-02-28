import React from "react";
import { BrowserRouter as Router, Routes, Route, withRouter  } from "react-router-dom";
import Home from "../components/Home";
import Survey from "../components/Survey"
import NewUser from "../components/NewUser"
import Products from "../components/Products"

export default (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/Survey" exact component={<Survey />} /> */}
      <Route path="/survey" element={<NewUser />} exact />
      <Route path="/survey-start" element={<Survey />} exact />
      <Route path="/products" element={<Products />} exact />
    </Routes>
  </Router>
);