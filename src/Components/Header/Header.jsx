import React from 'react'
import "./Header.scss"
import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <>
            <nav className='header-container'>
                <div className='input-feild'>
                    <CiSearch className='search'/>
                    <input type='text' />
                </div>
                <div className="header-menu">Categories</div>
                <div className="header-menu">Website Builders</div>
                <div className="header-menu">Today's Deals</div>
            </nav>
        </>
    )
}

export default Header



