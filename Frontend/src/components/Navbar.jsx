import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                <NavLink to="/">
                    <img src="./img/ShopSwiftly-logo-DB.png" alt="ShopSwiftly Logo" />
                </NavLink>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/category">Category</NavLink></li>
            </ul>
            <form className="search-container" action="/search" method="GET">
                <input className="search-bar" type="search" name="q" placeholder="Search..." />
                <button className="search-button" type="submit">
                    <i className="fas fa-search"></i> Search
                </button>
            </form>
            <ul className="nav-links right">
                <li><NavLink to="/cart">Cart <i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                <li><NavLink to="/orders">Orders <i className="fa-solid fa-box"></i></NavLink></li>
                <li><NavLink to="/wishlist">Wishlist <i className="fa-solid fa-heart"></i></NavLink></li>
                <li><NavLink to="/login">Login <i class="fa-solid fa-right-to-bracket"></i></NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
