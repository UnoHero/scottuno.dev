// Home page

// Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

// common Components
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"


const Home = () => {
  const { t } = useTranslation();

  return (  
    <div>
      <Header />

      <section className="main-box">
        <h2>
          {t("pages.home.title")}
        </h2>
      </section>
      <Footer />
    </div>
  );
}
 
export default Home;