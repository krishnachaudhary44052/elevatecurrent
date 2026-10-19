import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, UserRound } from 'lucide-react';
import Logo from './Logo.jsx';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  const isActive = (key) => {
    if (key === 'home') return pathname === '/';
    if (key === 'destinations') return pathname === '/destinations' || pathname.startsWith('/destinations/') || pathname.startsWith('/destination/');
    if (key === 'courses') return pathname === '/courses';
    if (key === 'hospitals') return pathname === '/for-hospitals' || pathname === '/hospitals';
    if (key === 'career-desk') return pathname === '/career-desk' || pathname.startsWith('/career-desk/');
    if (key === 'contact') return pathname === '/contact' || pathname === '/contact-us' || pathname === '/contact_us';
    return false;
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo />
        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Toggle navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a className={isActive('home') ? 'active' : ''} href="/" onClick={closeMenu}>Home</a>
          <a className={isActive('destinations') ? 'active' : ''} href="/destinations/" onClick={closeMenu}>Destinations</a>
          <a className={isActive('courses') ? 'active' : ''} href="/courses/" onClick={closeMenu}>Courses</a>
          <a className={isActive('hospitals') ? 'active' : ''} href="/for-hospitals/" onClick={closeMenu}>For Hospitals</a>
          <a className={isActive('career-desk') ? 'active' : ''} href="/career-desk/" onClick={closeMenu}>Career Desk</a>
          <a className={isActive('contact') ? 'active' : ''} href="/contact_us/" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="header-signin" href="/signin/" aria-label="Sign in"><UserRound size={20} /><span>Sign in</span></a>
          <a className="header-cta" href="/register/">Register <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </header>
  );
}
