import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import file CSS cho Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Quản lý Sản phẩm</h1>
            <ul className="navbar-menu">
                <li>
                    <Link to="/" className="navbar-item">Quản lý Hàng Hóa</Link>
                </li>
                <li>
                    <Link to="/guide" className="navbar-item">Hướng Dẫn</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
