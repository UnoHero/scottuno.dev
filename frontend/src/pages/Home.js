// Home page

// Imports
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from "styled-components"

// Components
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

// Styled components
const Carousel = styled.div`

`;

const Home = () => {
  const { t } = useTranslation();

  return (  
    <div>
      <Header />

      <section>
        <h2>
          {t("home.title")}
        </h2>
        <Carousel />
      </section>
      
      <Footer />
    </div>
  );
}
 
export default Home;