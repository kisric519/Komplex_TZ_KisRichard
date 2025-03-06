import React from "react";
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'

const Navbar = (() => {
    return (
        <div className="mb-5">
            <img src="/oktatas-01.jpg" className="top" />
            <nav className="pa3 pa4-ns bb bt">
                <div className="tc pb3">
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to="/">Főoldal</NavLink>
                </div>
            </nav>
        </div>
    )
})

export default Navbar