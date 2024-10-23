import React from 'react';
import { useTranslation } from 'react-i18next';

// CSS for contact page
import "../styles/components/contact.css";

// Common Components
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Contact = () => {
  const { t } = useTranslation();

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
      </section>
      <Footer />
    </>
  );
}

export default Contact;
