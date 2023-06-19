import React from 'react'
import { NavLink } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div>
            <NavLink className="navItem" to="/home/about">About</NavLink>
            <NavLink className="navItem" to="/home/contact">Contact</NavLink>
        </div>
    )
}

export default HomeHeader
