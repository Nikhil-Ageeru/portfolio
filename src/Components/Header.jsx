import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
    const location = useLocation(); // Get current location

    // A helper function to determine if the link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    // Toggle menu visibility
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when link is clicked
    };

    return (
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo">
                        <img
                            style={{ maxWidth: "80%" }}
                            src="../wp-content/themes/gridx/assets/images/logo.png"
                            alt="Logo"
                        />
                    </Link>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                        <ul data-in="#" data-out="#" className="menu" id="menu-main-menu">
                            <li
                                id="menu-item-1850"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1850 ${isActive('/')}`}
                            >
                                <Link to="/" title="Home" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li
                                id="menu-item-1851"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1851 ${isActive('/about')}`}
                            >
                                <Link to="/about" title="About" onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>
                            <li
                                id="menu-item-1853"
                                className={`menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1084 current_page_item menu-item-1853 ${isActive('/works')}`}
                            >
                                <Link to="/works" title="Works" onClick={handleLinkClick}>
                                    Works
                                </Link>
                            </li>
                            <li
                                id="menu-item-1852"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1852 ${isActive('/contact')}`}
                            >
                                <Link to="/contact" title="Contact" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/contact" className="theme-btn">
                        Let’s talk
                    </Link>
                    {/* Toggle menu button */}
                    <div
                        className={`show-menu ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
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
