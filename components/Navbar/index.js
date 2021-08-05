import React, { useState } from 'react'

import './index.scss';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div>
                <h3 className="navbar__title">newslaundry</h3>
            </div>
            <div className="navbar__links--large">
                <a href="#subscribe" className="navbar__link">Subscribe</a>
                <a href="#about" className="navbar__link">About</a>
                <a href="#speakers" className="navbar__link">Speakers</a>
            </div>

            
            <button className="navbar__button" onClick={() => setOpen(!open)}>
                <i className="fas fa-bars"></i>
            </button>

            <div className={`navbar__drawer ${open && "navbar__drawer--open"}`}>
                <button onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="navbar__drawer-items">
                    <a onClick={() => setOpen(false)} href="#subscribe">Subscribe</a>
                    <a onClick={() => setOpen(false)} href="#about">About</a>
                    <a onClick={() => setOpen(false)} href="#speakers">Speakers</a>
                </div>
                
                
            </div>
        </div>
    );
}

export default Navbar;