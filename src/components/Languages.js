import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <ul className="nav d-flex">
      <li>
        <button
          onClick={() => changeLanguage("zh-tw")}
          className="btn btn-outline"
        >
          中文
        </button>
      </li>
      <li>
        <button
          onClick={() => changeLanguage("en")}
          className="btn btn-outline"
        >
          English
        </button>
      </li>
      {/* <li>
        <button
          onClick={() => changeLanguage("kr")}
          className="btn btn-outline"
        >
          한국어
        </button>
      </li> */}
    </ul>
  );
};

export default Languages;
