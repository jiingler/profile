import ItemTitle from './common/ItemTitle';

import ExperienceItemName from './ExperienceItemName';
import ExperienceItemPosition from './ExperienceItemPosion';

const Experiences = () => {
  return (
    <div id="experiences" className="experiences section">
      <div className="container">
        <ItemTitle titleName="Experiences" description="this is Experiences"/>
        <div className="row d-md-flex d-block">
          <h3 className="title col-lg-2 col-md-3 text-md-start text-center my-3">Education</h3>
          <ul className="content col-lg-10 col-md-9 col-12 my-3">
            <li className="agency row">
              <ExperienceItemName name={"私立長庚大學"} date={"Sep 2012 - Jun 2016"} />
              <div className="col-lg-8 col-7 mb-3 p-2">
                <ExperienceItemPosition position={"資訊管理系"} />
              </div>
            </li>
            <li className="agency row">
              <ExperienceItemName name={"臺北市立麗山高級中學"} date={"Sep 2009 - Jun 2012"} />
              <div className="col-lg-8 col-7 mb-3 p-2">
                <ExperienceItemPosition position={"一般科"} />
              </div>
            </li>
          </ul>
        </div>

        <div className="row d-md-flex d-block">
          <h3 className="title col-lg-2 col-md-3 text-md-start text-center my-3">Careers</h3>
          <ul className="content col-lg-10 col-md-9 col-12 my-3">
            <li className="agency row">
              <ExperienceItemName name={"三竹資訊股份有限公司 Mitake"} date={"Apr 2019 - Aug 2020"}/>
              <div className="col-lg-8 col-12 mb-3 p-2">
                <ExperienceItemPosition position={"正職 - 前端工程師"}/>
                <ul className="agency-tool mb-2 px-2">
                  <li>Angular開發框架</li>
                  <li>Bootstrap樣式庫</li>
                  <li>RWD響應式架構</li>
                  <li>CSS動畫</li>
                </ul>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">獨立開發1：</p>
                  <p className="my-2">D電工公司</p>
                  客戶公司內部的表單系統，登入後，可以進行表單填寫及送出。
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">獨立開發2：</p>
                  <p className="my-2">N基金公司</p>
                  這個專案是該公司網頁的功能更新，使用Angular進行。<br/>
                  新增線上開戶功能，內容有表單資料填寫、適性問卷調查、檔案上傳及與金融服務連結認證等。
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">
                    調整修正功能：
                  </p> 
                  <p className="my-2">N基金公司</p>
                  這個專案是該公司網頁的功能更新，使用Angular進行。<br/>
                  主要功能是調整內部企業邏輯及畫面修改。
                </div>
              </div>
            </li>
            <li className="company row">
              <ExperienceItemName name={"香港商科銳投資控股有限公司台灣分公司 CBX Software"} date={"Apr 2017 - Feb 2019"} />
              <div className="col-lg-8 col-12 mb-3 p-2">
                <ExperienceItemPosition position={"正職 - Mobile App工程師"}/>
                <ul className="agency-tool mb-2 px-2">
                  <li>Ionic(Angular+Cordova)開發框架</li>
                  <li>RWD響應式架構</li>
                  <li>canvas 縮圖、畫圖</li>
                </ul>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">獨立開發1：</p>
                  <p className="my-2">公司客戶專用社群App - Capture</p>
                  讓客戶可以分享其公司製造的產品，使其他批發商購買。
                </div>
                <div className="agency-work">
                  <p className="fw-700 text-decoration-underline">獨立開發2：</p>
                  <p className="my-2">公司客戶專用審核App - Audit</p>
                  記錄一些生產工廠的有關資料，可拍照、錄影紀錄還有紀錄者簽名功能。
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