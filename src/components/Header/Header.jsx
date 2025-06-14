import { useState, useCallback, memo } from "react";

const logoPath = new URL("../../assets/logo.png", import.meta.url).href;

const Header = memo(() => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setDropdownOpen((prev) => !prev);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen((prev) => !prev);
        // Prevent body scroll when mobile menu is open
        document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
    }, [mobileMenuOpen]);

    return (
        <div className="container">
            <header className="header">
                <div className="header-left">
                    <img src={logoPath} alt="Proactively logo" className="logo" width="120" height="24" loading="eager" />
                    <span style={{ fontWeight: 'bold', marginLeft: '8px', fontSize:22 }}>ProVital</span>
                </div>

                <div className="header-right">
                    <nav className="nav desktop">
                        <a href="#practice" className="nav-item">
                            List your practice
                        </a>
                        <div className="divider-vertical"></div>
                        <a href="#employers" className="nav-item">
                            For Employers
                        </a>
                        <div className="divider-vertical"></div>
                        <a href="#courses" className="nav-item">
                            Courses
                        </a>
                        <div className="divider-vertical"></div>
                        <a href="#books" className="nav-item">
                            Books
                        </a>
                        <div className="divider-vertical"></div>
                        <a href="#speakers" className="nav-item">
                            Speakers
                        </a>
                        <div className="divider-vertical"></div>
                        <a href="#doctors" className="nav-item">
                            Doctors
                        </a>
                    </nav>

                    <div className="login-wrapper desktop">
                        <button className="login-btn" onClick={toggleDropdown} aria-expanded={dropdownOpen} aria-haspopup="true">
                            Login / Signup <span className="arrow">▾</span>
                        </button>

                        {dropdownOpen && (
                            <div className="dropdown">
                                <div className="menu-section">
                                    <div className="menu-row">
                                        <span className="menu-label">Doctor</span>
                                        <div className="menu-links">
                                            <a href="#doctor-login" className="menu-link">
                                                Login
                                            </a>
                                            <span className="menu-separator">•</span>
                                            <a href="#doctor-signup" className="menu-link">
                                                Sign up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <hr className="divider" />
                                <div className="menu-section">
                                    <div className="menu-row">
                                        <span className="menu-label">Patient</span>
                                        <div className="menu-links">
                                            <a href="#patient-login" className="menu-link">
                                                Login
                                            </a>
                                            <span className="menu-separator">•</span>
                                            <a href="#patient-signup" className="menu-link">
                                                Sign up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button className={`header__menu-btn ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div className={`header__mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <div className="mobile-menu__header">
                    <img src={logoPath} alt="Proactively logo" className="logo" width="120" height="24" loading="eager" />
                    <button className="mobile-menu__close" onClick={toggleMobileMenu} aria-label="Close mobile menu" />
                </div>

                <div className="mobile-menu__auth">
                    <div className="auth-row">
                        <span className="user-type">Doctor</span>
                        <div className="auth-links">
                            <a href="#doctor-login">Login</a>
                            <a href="#doctor-signup">Sign up</a>
                        </div>
                    </div>
                    <div className="auth-row">
                        <span className="user-type">Patient</span>
                        <div className="auth-links">
                            <a href="#patient-login">Login</a>
                            <a href="#patient-signup">Sign up</a>
                        </div>
                    </div>
                </div>

                <nav className="mobile-menu__nav">
                    <ul>
                        <li>
                            <a href="#practice">
                                List your practice
                                <span className="arrow">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="#employers">
                                For Employers
                                <span className="arrow">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="#courses">
                                Courses
                                <span className="arrow">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="#books">
                                Books
                                <span className="arrow">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="#speakers">
                                Speakers
                                <span className="arrow">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="#doctors">
                                Doctors
                                <span className="arrow">›</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
});

Header.displayName = "Header";

export default Header;
