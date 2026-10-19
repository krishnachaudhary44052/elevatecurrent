import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <section className="footer-company" aria-label="About FDHS Elevate">
          <Logo footer />
          <p className="footer-about-copy">Your skills. Your next step. FDHS Elevate helps healthcare professionals build skills, explore career pathways and connect with healthcare employers.</p>
          <a className="footer-email" href="mailto:admin@fdhs.in"><Mail size={15} /> admin@fdhs.in</a>
          <small className="footer-tagline">Healthcare careers · India &amp; beyond</small>
          <div className="footer-social">
            <span>Follow us</span>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </section>

        <nav className="footer-column" aria-label="Quick links">
          <h3>Quick links</h3>
          <a href="/">Home</a>
          <a href="/courses/">Courses</a>
          <a href="/for-hospitals/">For Hospitals</a>
          <a href="/career-desk/">Career Desk</a>
          <a href="/contact_us/">Contact</a>
        </nav>

        <nav className="footer-column" aria-label="Destinations">
          <h3>Destinations</h3>
          <a href="/destinations/">Explore destinations</a>
          <a href="/destination/germany/">Germany</a>
          <a href="/destination/japan/">Japan</a>
          <a href="/destination/uae/">UAE</a>
          <a href="/destination/india/">India</a>
        </nav>

        <nav className="footer-column" aria-label="Support and account">
          <h3>Support</h3>
          <a href="/signin/">Sign in</a>
          <a href="/register/">Create an account</a>
          <a href="/privacy-policy/">Privacy policy</a>
          <a href="/terms/">Terms of use</a>
          <a href="/cookies/">Cookie policy</a>
          <a href="/disclaimer/">Disclaimer</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FDHS Elevate. All rights reserved.</span>
        <div className="footer-bottom-links" aria-label="Policies">
          <a href="/privacy-policy/">Privacy policy</a>
          <a href="/terms/">Terms of use</a>
          <a href="/cookies/">Cookie policy</a>
          <a href="/disclaimer/">Disclaimer</a>
        </div>
        <small>Design concept · Illustrative imagery</small>
      </div>
    </footer>
  );
}
