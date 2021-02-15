
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";
const Header = () => {
  const { t, i18n } = useTranslation();
  console.log(t("header-title"))
  return (
    <Suspense fallback="loading">
      <div className="jumbotron">
        <div className="header container">
          <h1 className="title">{t("header-title")}</h1>
          <p className="subtitle">{t('header-subtitle')}</p>
        </div>
        <div className="overlay"/>
      </div>
    </Suspense>
  );
}

export default Header;