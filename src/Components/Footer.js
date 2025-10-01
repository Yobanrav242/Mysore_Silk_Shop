import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className=" text-light pt-5 pb-3" style={{ background: "linear-gradient(135deg, hsl(355 65% 35%), hsl(280 60% 50%))"}}>
      <div className="container">
        <div className="row gy-4">
          {/* Brand & Social */}
          <div className="col-md-3">
            <h3 className="h5 fw-bold mb-3">Sri Mysore Silk</h3>
            <p className="text-light-50 mb-3">
              Your trusted destination for authentic Mysore silk sarees.
            </p>
            {/* <div className="d-flex gap-3">
              <a href="#" className="text-light hover:text-secondary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light hover:text-secondary">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-light hover:text-secondary">
                <Twitter size={24} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h4 className="h6 fw-semibold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light-50 text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#collections" className="text-light-50 text-white text-decoration-none">Collections</a>
              </li>
              <li className="mb-2">
                <a href="#offers" className="text-light-50 text-white text-decoration-none">Offers</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light-50 text-white text-decoration-none">Services</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h4 className="h6 fw-semibold mb-3">Contact Us</h4>
            <ul className="list-unstyled text-light-50">
              <li className="d-flex align-items-center mb-2">
                <Phone size={18} className="me-2" />
                +91 82208 95877
              </li>
              <li className="d-flex align-items-center mb-2">
                <Mail size={18} className="me-2" />
                srimysoresilk@gmail.com
              </li>
              <li className="d-flex align-items-start">
                <MapPin size={18} className="me-2 mt-1" />
                <span>
                  Antharapatty Road, Musiri<br />TamilNadu - 621 211
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="col-md-3">
            <h4 className="h6 fw-semibold mb-3">Business Hours</h4>
            <ul className="list-unstyled text-light-50">
              <li>Monday - Saturday: 10:00 AM - 9:00 PM</li>
              <li>Sunday: 11:00 AM - 6:00 PM</li>
              <li className="mt-2 text-white fw-bold">All major festivals open!</li>
            </ul>
          </div>
        </div>

        <div className="border-top border-light-25 pt-3 mt-4 text-center">
          <p className="mb-0 text-light-50">
            © 2023 Sri Mysore Silk. All rights reserved. | Handcrafted with tradition and love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
