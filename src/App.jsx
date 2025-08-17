import officeImg from './assets/images/service_office.jpg'
import homeImg   from './assets/images/home_services.jpg'
import disinfectionImg from './assets/images/disinfection_services.jpg'
import iconImg from './assets/images/icon.png'
import proImg from './assets/images/trusted_pro.jpg'
import timeImg from './assets/images/always_time.jpg'
import ecoImg from './assets/images/eco_product.jpg'
import './App.css'
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isVisible;
}

function App() {

  const homeRef = useRef(null);
  const officeRef = useRef(null);
  const disinfectionRef = useRef(null);

  const homeVisible = useOnScreen(homeRef);
  const officeVisible = useOnScreen(officeRef);
  const disinfectionVisible = useOnScreen(disinfectionRef);

  const trustedRef = useRef(null);
  const onTimeRef = useRef(null);
  const ecoRef = useRef(null);

  const trustedVisible = useOnScreen(trustedRef);
  const onTimeVisible = useOnScreen(onTimeRef);
  const ecoVisible = useOnScreen(ecoRef);

  return (
    <div>
      <header>
        <div className="navbar">
        <h1 className="title-with-icon">
          <img src={iconImg} alt="icon" className="icon" />
           FreshNest Cleaning
        </h1>          
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="home">
          <div className="home-content">
            <h2>We make your spaces shine</h2>
            <p>
              FreshNest Cleaning provides professional cleaning services for homes and offices,
              with a focus on quality, trust, and punctuality.
            </p>
            <button className="cta-btn" onClick={() => window.location.href="#quote"}>
              Get a Free Quote
            </button>
          </div>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="services-container">
            <div ref={homeRef} className={`service-card ${homeVisible ? "visible" : ""}`}>
              <img src={homeImg} alt="Home cleaning" />
              <h3>Home cleaning</h3>
              <p>Let us take care of your house cleaning so you can enjoy your time.</p>
            </div>

            <div ref={officeRef} className={`service-card ${officeVisible ? "visible" : ""}`}>
              <img src={officeImg} alt="Office cleaning" />
              <h3>Office cleaning</h3>
              <p>Impeccable work environments for greater productivity and well-being.</p>
            </div>

            <div ref={disinfectionRef} className={`service-card ${disinfectionVisible ? "visible" : ""}`}>
              <img src={disinfectionImg} alt="Disinfection services"/>
              <h3>Disinfection services</h3>
              <p>Deep cleaning of specific areas according to your needs.</p>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="why-choose-us">
          <h2 className="title">Why Choose Us</h2>
          <div className="cards-container">
            <div ref={trustedRef} className={`card ${trustedVisible ? "visible" : ""}`}>
              <img src={proImg} alt="trusted pro"/>
              <h3>✨ Trusted Professional Cleaning</h3>
              <p>Our experienced team delivers reliable, detail-oriented cleaning services.</p>
            </div>

            <div ref={onTimeRef} className={`card ${onTimeVisible ? "visible" : ""}`}>
              <img src={timeImg} alt="always on time"/>
              <h3>⏰ Always On Time</h3>
              <p>We respect your schedule and guarantee punctuality every time.</p>
            </div>

            <div ref={ecoRef} className={`card ${ecoVisible ? "visible" : ""}`}>
              <img src={ecoImg} alt='eco product'></img>
              <h3>🌱 Eco-Friendly Products</h3>
              <p>We use safe, eco-friendly products to protect your health and the planet.</p>
            </div>
          </div>
        </section>

        <section id="quote" className="quote-section">
          <h2 className='title'>Request a Free Quote</h2>
          <form className="quote-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Service Needed" required />
            <textarea placeholder="Additional Details"></textarea>
            <button type="submit">Send Request</button>
          </form>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">Contact us</h2>
          <div className="contact-info">
            <p><strong>Address:</strong> 210 Collins Street, Melbourne, VIC, Australia</p>
            <p><strong>Phone:</strong> +61 3 9876 5432</p>
            <p><strong>Email:</strong> contact@freshnest.com.au</p>
          </div>
          <div className="contact-map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840290374633!2d144.96315791531727!3d-37.81627937975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c1a77a07d9f!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1ses!2sco!4v1690000000000!5m2!1ses!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 FreshNest Cleaning. All rights reserved</p>
        <div className="social-icons">
          <a target='_blank' rel="noopener noreferrer">
            <FaYoutube size={22} color="#CD201F"/>
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={22} color="#4267B2" />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <FaTwitter size={22} color="#1DA1F2" />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} color="#E1306C" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
