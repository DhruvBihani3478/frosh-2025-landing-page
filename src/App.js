import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    
    AOS.init({ duration: 1000 });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Upcoming Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

     
      {showSplash && (
        <div className="splash-screen">
          <h1>FROSH2025</h1>
        </div>
      )}

      
      {!showSplash && (
        <div className="container">
          <h1>Welcome to Frosh!</h1>
          <motion.button whileHover={{ scale: 1.1 }}>Get Started</motion.button>

          
          <section id="about" className="about-section" data-aos="fade-up">
            <h2>About Us</h2>
            <p>
              Frosh is a student-led society dedicated to helping freshers transition smoothly into college life. Our mission is to create an inclusive and supportive environment where you can feel connected, confident, and ready to embrace the college experience. Through a combination of engaging events, personalized mentorship, and interactive activities, Frosh ensures that you not only get the academic support you need but also build meaningful relationships and explore campus life. Whether it's meeting new people, discovering resources, or just having fun, Frosh is here to guide you every step of the way and make your first year unforgettable. Join us and kickstart your college journey with the support of a community that cares!
            </p>
          </section>

          
          <section id="events" className="events" data-aos="fade-up">
            <h2>Upcoming Events</h2>
            <ul>
              <li>Welcome Party - 28th April</li>
              <li>Freshers Meetup - 1st May</li>
              <li>Game Night - 5th May</li>
            </ul>
          </section>

          
          <section id="contact" className="contact-us" data-aos="fade-up">
            <p>Have questions? Reach out!</p>
            <ul>
              <li>Email: frosh2025@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>
                <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
              </li>
            </ul>
          </section>

          
          <footer>
            <p>Follow us on social media!</p>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
            </ul>
            <p>Frosh 2025</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
