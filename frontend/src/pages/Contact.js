import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// CSS for contact page
import "../styles/components/contact.css";

// Common Components
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Socials from "../components/common/Socials";

const Contact = () => {
  const { t } = useTranslation()
  
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const contactCardRef = useRef(null);

  const handleCardClick = () => {
    setIsBoxVisible(true); 
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (contactCardRef.current && !contactCardRef.current.contains(event.target)) {
        setIsBoxVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  return (
    <>
      <Header />
      <section className="main-box">
        <h2>{t("pages.contact.title")}</h2>
        
        <form className="contact-form">
          <ul>
            <li>
              <input type="email" id="email" name="email" placeholder={t("pages.contact.email")} required />
            </li>
            <li>
              <input type="text" id="name" name="name" placeholder={t("pages.contact.fullName")} required />
            </li>
            <li>
              <input type="text" id="subject" name="subject" placeholder={t("pages.contact.subject")} required />
            </li>
            <li>
              <textarea id="message" name="message" placeholder={t("pages.contact.message")} rows="5" required></textarea>
            </li>
          </ul>
          <button type="submit">{t("pages.contact.submitButton")}</button>
        </form>

        {isBoxVisible ? (
          <div className="contact-card" ref={contactCardRef} >
            <i 
              className="fa-solid fa-x fa-xl close-icon" 
              onClick={() => setIsBoxVisible(false)} 
              role="button" 
              aria-label="Close contact card"
              tabIndex="0"
            ></i>

            <div className="contact-detail">
              <strong>{t("pages.contact.card.nameLabel")}</strong>
              <p>{t("footer.author")}</p>
            </div>
            <div className="contact-detail">
              <strong>{t("pages.contact.card.tlfLabel")}</strong>
              <a href="tel:+4794146461">{t("footer.tlf")}</a>
            </div>
            <div className="contact-detail">
              <strong>{t("pages.contact.card.emailLabel")}</strong>
              <a href="mailto:scottunogundersen@gmail.com">{t("footer.mail")}</a>
            </div>
            <Socials />
          </div>
        ) : (
          <Socials />
        )}

      </section>
      <Footer variant="contact card" onCardClick={handleCardClick} />
    </>
  );
}

export default Contact;
