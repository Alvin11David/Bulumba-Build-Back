import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, X, Facebook } from "lucide-react";
import B3 from "../assets/images/B2.jpg";

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <div className="footer-logo-bg">
                <img src={B3} alt="Bulumba Logo" className="footer-logo-img" />
              </div>
              <div>
                <span className="footer-logo-title">Bulumba</span>
                <span className="footer-logo-subtitle">Build Back Better</span>
              </div>
            </div>
            <p className="footer-brand-description">
              Transforming Makerere University through innovative campaigns and
              community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="footer-link">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/vision" className="footer-link">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-involved">
            <h3 className="footer-involved-title">Get Involved</h3>
            <ul className="footer-involved-list">
              <li>
                <Link to="/join" className="footer-link">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contact</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <MapPin className="footer-contact-icon" />
                <span className="footer-contact-text">
                  Makerere University, Kampala
                </span>
              </div>
              <div className="footer-contact-row">
                <Mail className="footer-contact-icon" />
                <span className="footer-contact-text">
                  timothybulumba4@gmail.com
                </span>
              </div>
              <div className="footer-contact-row">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">+256 703 743 491</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://x.com/TBulumba" className="footer-social-link">
              <X className="footer-social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/bulumba-timothy-120bb126b/"
              className="footer-social-link"
            >
              <Linkedin className="footer-social-icon" />
            </a>
            <a
              href="https://wa.me/qr/LL35LR6NT6ZJG1 "
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="footer-social-icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082311822729"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="footer-social-icon" />
            </a>
          </div>
          <p className="footer-copyright">
            © 2025 Bulumba Build Back Better. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/waluube-alvin-david-75778336b/"
            className="footer-siteby-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            Site By Waluube Alvin David
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
