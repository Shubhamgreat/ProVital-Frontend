import React, { useEffect } from 'react';
import logo from "../../assets/logo.svg";
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="mobile-menu-overlay" onClick={onClose}>
            <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                <div className="mobile-menu-header">
                    <img 
                        src={logo}
                        alt="ProVital logo" 
                        className="logo" 
                        width="120" 
                        height="24"
                    />
                    <button 
                        className="close-button" 
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6L18 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="auth-card">
                    <div className="auth-section">
                        <div className="auth-row">
                            <span>Doctor</span>
                            <div className="auth-links">
                                <a href="#doctor-login">Login</a>
                                <span>•</span>
                                <a href="#doctor-signup">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="auth-section">
                        <div className="auth-row">
                            <span>Patients</span>
                            <div className="auth-links">
                                <a href="#patient-login">Login</a>
                                <span>•</span>
                                <a href="#patient-signup">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="mobile-nav">
                    <a href="#doctors" className="nav-item">
                        Doctors
                        <span className="arrow">→</span>
                    </a>
                    <a href="#practice" className="nav-item">
                        List your practice
                        <span className="arrow">→</span>
                    </a>
                    <a href="#employers" className="nav-item">
                        For Employers
                        <span className="arrow">→</span>
                    </a>
                    <a href="#courses" className="nav-item">
                        Courses
                        <span className="arrow">→</span>
                    </a>
                    <a href="#books" className="nav-item">
                        Books
                        <span className="arrow">→</span>
                    </a>
                    <a href="#speakers" className="nav-item">
                        Speakers
                        <span className="arrow">→</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu; 