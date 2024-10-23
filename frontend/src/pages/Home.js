// Home page

// Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

// common Components
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

// partials Components
import ProjectCarousel from '../components/partials/ProjectCarousel';


const Home = () => {
  const { t } = useTranslation();

  return (  
    <div>
      <Header />

      <section>
        <h2>
          {t("pages.home.title")}
        </h2>
        <ProjectCarousel />
      </section>
      
      <Footer />
    </div>
  );
}
 
export default Home;