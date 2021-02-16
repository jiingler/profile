import ItemTitle from './common/ItemTitle';
import { useTranslation } from 'react-i18next'; 

const Abilities = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="abilities" className="abilities section">
      <ItemTitle titleName="Abilities" description="this is Abilities"/>
      <div className="row d-flex">
        <h3 className="title col-lg-3 my-3">Skills</h3>
        <div className="col-lg-9 my-3">
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">Familiar with</h4>
            <ul className="col-lg-8">
              <li>HTML(5)</li>
              <li>CSS(3)</li>
              <li>Bootstrap</li>
              <li>SASS / SCSS</li>
              <li>RWD Web</li>
              <li>JS(ES6)</li>
              <li>Angular</li>
              <li>Typescript</li>
            </ul>
          </div>
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">good at</h4>
            <ul className="col-lg-8">
              <li>React Hooks</li>
              <li>webpack</li>
              <li>Ionic</li>
              <li>Cordova</li>
              <li>MySQL</li>
              <li>gulp</li>
            </ul>
          </div>
          <div className="level row p-3">
            <h4 className="level-title col-lg-4">know</h4>
            <ul className="col-lg-8">
              <li>Object Orientated Programming</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <h3 className="title col-lg-3 my-3">Languages</h3>
        <div className="col-lg-9 my-3">
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">Native</h4>
            <ul className="col-lg-8">
              <li>{t('lang-zh')}</li>
            </ul>
          </div>
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">Intermediate</h4>
            <ul className="col-lg-8">
              <li>{t('lang-kr')}</li>
            </ul>
          </div>
          <div className="level row p-3">
            <h4 className="level-title col-lg-4">Basic</h4>
            <ul className="col-lg-8">
              <li>{t('lang-en')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <h3 className="title col-lg-3 my-3">Tools</h3>
        <div className="col-lg-9 my-3">
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">OS</h4>
            <ul className="col-lg-8">
              <li>Mac</li>
              <li>Windows</li>
            </ul>
          </div>
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">Version Control</h4>
            <ul className="col-lg-8">
              <li>Git/Git Flow</li>
              <li>Source Tree</li>
            </ul>
          </div>
          <div className="level row mb-1 p-3">
            <h4 className="level-title col-lg-4">Coding</h4>
            <ul className="col-lg-8">
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="level row p-3">
            <h4 className="level-title col-lg-4">Process Management</h4>
            <ul className="col-lg-8">
              <li>Atlassian / Jira</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abilities;