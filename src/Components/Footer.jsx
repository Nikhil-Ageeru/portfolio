import React from 'react'

function Footer() {
  return (
    <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <a href="../index.html" className="logo">
                            <img
                                src="../wp-content/themes/gridx/assets/images/logo.svg"
                                alt="Logo"
                            />
                        </a>
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
                                <a title="Home" href="../index.html">
                                    Home
                                </a>
                            </li>
                            <li
                                id="menu-item-1857"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1857"
                            >
                                <a title="About" href="../about-page/index.html">
                                    About
                                </a>
                            </li>
                            <li
                                id="menu-item-1859"
                                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1084 current_page_item menu-item-1859 active"
                            >
                                <a title="Works" href="index.html">
                                    Works
                                </a>
                            </li>
                            <li
                                id="menu-item-1858"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"
                            >
                                <a title="Contact" href="../contact-info/index.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <p className="copyright">© All rights reserved</p>
                    </div>
                </div>
            </footer>
  )
}

export default Footer
