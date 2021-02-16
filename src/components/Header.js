
import { useTranslation } from 'react-i18next';
import Languages from './Languages';
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="jumbotron">
      <Languages />
      <div className="header container">
        <h1 className="title">{t("header-title")}</h1>
        <p className="subtitle">{t('header-subtitle')}</p>
      </div>
      <div className="overlay"/>
    </div>
  );
}

export default Header;