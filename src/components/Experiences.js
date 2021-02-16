import ItemTitle from './common/ItemTitle';

import ExperienceItemName from './ExperienceItemName';
import ExperienceItemPosition from './ExperienceItemPosion';

import { useTranslation } from 'react-i18next'; 

const Experiences = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="experiences" className="experiences section">
      <div className="container">
        <ItemTitle titleName="Experiences" description="this is Experiences"/>
        <div className="row d-md-flex d-block">
          <h3 className="title col-lg-2 col-md-3 text-md-start text-center my-3">Education</h3>
          <ul className="content col-lg-10 col-md-9 col-12 my-3">
            <li className="agency row">
              <ExperienceItemName name={t('university-name')} date={t('university-date')} />
              <div className="col-lg-8 col-7 mb-3 p-2">
                <ExperienceItemPosition position={t('university-position')} />
              </div>
            </li>
            <li className="agency row">
              <ExperienceItemName name={t('high-school-name')} date={t('high-school-date')} />
              <div className="col-lg-8 col-7 mb-3 p-2">
                <ExperienceItemPosition position={t('high-school-position')} />
              </div>
            </li>
          </ul>
        </div>

        <div className="row d-md-flex d-block">
          <h3 className="title col-lg-2 col-md-3 text-md-start text-center my-3">Careers</h3>
          <ul className="content col-lg-10 col-md-9 col-12 my-3">
            <li className="agency row">
              <ExperienceItemName name={t('company-1-name')} date={t('company-1-date')}/>
              <div className="col-lg-8 col-12 mb-3 p-2">
                <ExperienceItemPosition position={t('company-1-position')}/>
                <ul className="agency-tool mb-2 px-2">
                  <li>{t('company-1-tool.0')}</li>
                  <li>{t('company-1-tool.1')}</li>
                  <li>{t('company-1-tool.2')}</li>
                  <li>{t('company-1-tool.3')}</li>
                </ul>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">{t('company-1-case.0.way')}</p>
                  <p className="my-2">{t('company-1-case.0.name')}</p>
                  {t('company-1-case.0.content')}
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">{t('company-1-case.1.way')}</p>
                  <p className="my-2">{t('company-1-case.1.name')}</p>
                  {t('company-1-case.1.content')}
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">{t('company-1-case.2.way')}</p>
                  <p className="my-2">{t('company-1-case.2.name')}</p>
                  {t('company-1-case.2.content')}
                </div>
              </div>
            </li>
            <li className="company row">
              <ExperienceItemName name={t('company-2-name')} date={t('company-2-date')}/>
              <div className="col-lg-8 col-12 mb-3 p-2">
                <ExperienceItemPosition position={t('company-2-position')}/>
                <ul className="agency-tool mb-2 px-2">
                  <li>{t('company-2-tool.0')}</li>
                  <li>{t('company-2-tool.1')}</li>
                  <li>{t('company-2-tool.2')}</li>
                </ul>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">{t('company-2-case.0.way')}</p>
                  <p className="my-2">{t('company-2-case.0.name')}</p>
                  {t('company-2-case.0.content')}
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">{t('company-2-case.1.way')}</p>
                  <p className="my-2">{t('company-2-case.1.name')}</p>
                  {t('company-2-case.1.content')}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;