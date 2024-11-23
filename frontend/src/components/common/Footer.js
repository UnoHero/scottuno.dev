import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ variant, onCardClick }) => {
  const { t } = useTranslation();

  return (
    <footer className={variant === "contact card" ? "contact-footer" : ""}>
      {variant === "contact card" ? (
        <>
          <p onClick={onCardClick} style={{ cursor: "pointer" }}>{t('pages.contact.card.title')}</p>
          <p><b>{t('footer.copyright')}</b></p>
        </>
      ) : (
        <>
          <p><b>{t('footer.copyright')}</b></p>
          <p>{t('footer.author')}</p>
          <a href="tel:+4794146461">{t("footer.tlf")}</a>
          <a href="mailto:scottunogundersen@gmail.com">{t('footer.mail')}</a>
        </>
      )}

    </footer>
  );
}

export default Footer;
