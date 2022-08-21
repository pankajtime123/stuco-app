import React from "react";
import Logo from "../../img/logo.png";
import Search from "../Search/Search";
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <Search/>
    </div>
  );
};

export default LogoSearch;
