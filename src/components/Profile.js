import ItemTitle from './common/ItemTitle';
import profileImg from '../assets/images/profile.jpg';

import { useTranslation } from 'react-i18next'; 

const Profile = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="profile" className="profile section">
      <ItemTitle titleName="Profile" description="this is profile"/>
      <div className="row d-flex">
        <div className="profile-img col-lg-4 col-12">
          <img src={profileImg} alt="profile-img" />
        </div>
        <div className="info col-lg-8 col-12">
          <h3 className="title">Basic info</h3>
          <ul className="content">
            <li>
              <p><span className="fw-700 me-2">{t('name-title')}</span>{t('name')}</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">{t('birth-title')}</span>{t('birth')}</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">{t('locate-title')}</span>{t('locate')}</p>
            </li>
          </ul>
          <h3 className="title">About me</h3>
          <article>
            {t('article-1')}
          </article>
          <article>
            {t('article-2')}
          </article>
          <article>
            {t('article-3')}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Profile;