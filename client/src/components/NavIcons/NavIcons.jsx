import React,{useState} from "react";
import {  NavLink } from "react-router-dom";
import {RiHomeFill} from 'react-icons/ri'
import {RiMessage2Fill} from 'react-icons/ri'
import {RiNotification2Line} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import { useSelector } from "react-redux";
import './NavIcons.css'


const NavIcons = () => {
  const [css, setCss] = useState()

  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="navIcons">
     <div>
      <NavLink style={({isActive})=>{return {color: isActive? '#f9862c': '#242d49'}}} to="../home">
       <RiHomeFill size="1.6rem"/>
      </NavLink>
      </div>
      
      <div>
      <NavLink style={({isActive})=>{return {color: isActive? '#f9862c': '#242d49'}}} to="../people">
      <IoIosPeople size="1.6rem"/>
      </NavLink>
      </div>
      <div>
      <NavLink style={({isActive})=>{return {color: isActive? '#f9862c': '#242d49'}}} to="../notification">
      <RiNotification2Line size="1.6rem"/>
      </NavLink>
      </div>
      <div>
      <NavLink style={({isActive})=>{return {color: isActive? '#f9862c': '#242d49'}}} to="../chat">
        <RiMessage2Fill size="1.6rem"/>
      </NavLink>
      </div>
      <div>
      <NavLink  style={({isActive})=>{return {color: isActive? '#f9862c': '#242d49'}}} to={`/profile/${user._id}`}>
        <GiHamburgerMenu size="1.6rem"/>
      </NavLink>
      </div>
    </div>
  );
};

export default NavIcons;
