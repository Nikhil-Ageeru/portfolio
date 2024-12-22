import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();  // Get current location

    // A helper function to determine if the link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo">
                        <img style={{maxWidth:"80%"}}
                            src="../wp-content/themes/gridx/assets/images/logo.png"
                            alt="Logo"
                        />
                    </Link>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <nav className="navbar">
                        <ul data-in="#" data-out="#" className="menu" id="menu-main-menu">
                            <li
                                id="menu-item-1850"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1850 ${isActive('/')}`}
                            >
                                <Link title="Home" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                id="menu-item-1851"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1851 ${isActive('/about')}`}
                            >
                                <Link title="About" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                id="menu-item-1853"
                                className={`menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1084 current_page_item menu-item-1853 ${isActive('/works')}`}
                            >
                                <Link title="Works" to="/works">
                                    Works
                                </Link>
                            </li>
                            <li
                                id="menu-item-1852"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1852 ${isActive('/contact')}`}
                            >
                                <Link title="Contact" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <a href="../contact-info/index.html" className="theme-btn">
                        Let s talk
                    </a>
                    {/* End Navigation */}
                    <div className="show-menu">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
