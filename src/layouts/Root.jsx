import React from "react"
import Header from "../components/Header/Header.jsx"
import { Outlet } from "react-router-dom"
const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;