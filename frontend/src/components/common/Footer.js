import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p><b>{t('footer.copyright')}</b></p>
      <p>{t('footer.author')}</p>
      <p>{t("footer.tlf")}</p>
      <p>{t('footer.mail')}</p>
    </footer>
  );
}

export default Footer;
