import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <>
            {/* Desktop Footer starts*/}

            <footer className="footer-area d-none d-lg-block">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link to="/" className="logo">
                            <img
                                src="/wp-content/themes/gridx/assets/images/logo.png"
                                alt="Logo"
                            />
                        </Link>
                        <ul
                            data-in="#"
                            data-out="#"
                            className="footer-menu"
                            id="menu-footer-menu"
                        >
                            <li
                                id="menu-item-1856"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1856"
                            >
                                <Link title="Home" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                id="menu-item-1857"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1857"
                            >
                                <Link title="About" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                id="menu-item-1859"
                                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1084 current_page_item menu-item-1859 active"
                            >
                                <Link title="Works" to="/works">
                                    Works
                                </Link>
                            </li>
                            <li
                                id="menu-item-1858"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"
                            >
                                <Link title="Contact" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <p className="copyright">© All rights reserved</p>
                    </div>
                </div>
            </footer>
            {/* Desktop Footer end */}


            {/* Mobile Bottom Navigation start */}
            <nav className="mobile-nav d-md-none">
                <div className="container-fluid px-0">
                    <div className="row no-gutters text-center">
                        <div className="col">
                            <Link to="/" className="nav-icon">
                                <i className="iconoir-home"></i>
                                <small>Home</small>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/about" className="nav-icon">
                                <i className="iconoir-user"></i>
                                <small>About</small>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/works" className="nav-icon">
                                <i className="iconoir-folder"></i>
                                <small>Works</small>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/contact" className="nav-icon">
                                <i className="iconoir-mail"></i>
                                <small>Contact</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation end*/}


        </>
    )
}

export default Footer
