import React, { useState } from 'react'
import Search from '../Search/Search'
import "./Navbar.css"
import logo from "../../img/logo.png"
import NavIcons from '../NavIcons/NavIcons'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    // const handleSticky = () => {
    //     if (window.scrollY >= 52 ) {
    //         setSticky(true)
    //     } else {
    //         setSticky(false)
    //     }
    // }

    // window.addEventListener('scroll', handleSticky)

    return (
        <header className="Navbar">
            <div className="top-bar">
                <img src={logo} className="logo" alt="" />
                <Search />
            </div>

            <div className={sticky ? "bottom-bar sticky" : "bottom-bar"}>
                <NavIcons />
            </div>

        </header>
    )
}

export default Navbar
