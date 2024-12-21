import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Link href="/" className="logo">
                        <img
                            src="../wp-content/themes/gridx/assets/images/logo.svg"
                            alt="Logo"
                        />
                    </Link>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <nav className="navbar">
                        <ul data-in="#" data-out="#" className="menu" id="menu-main-menu">
                            <li
                                id="menu-item-1850"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1850"
                            >
                                <Link title="Home" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                id="menu-item-1851"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"
                            >
                                <Link title="About" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                id="menu-item-1853"
                                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1084 current_page_item menu-item-1853 active"
                            >
                                <Link title="Works" to="/works">
                                    Works
                                </Link>
                            </li>
                            <li
                                id="menu-item-1852"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1852"
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
    )
}

export default Header
