import ItemTitle from './common/ItemTitle';
import profileImg from '../assets/images/profile.jpg';

const Profile = () => {
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
              <p><span className="fw-700 me-2">姓名：</span>林品君</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">出生年月:</span>1994/01</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">現居地:</span>南韓 首爾</p>
            </li>
          </ul>
          <h3 className="title">About Me</h3>
          <article>
            我是一位有三年工作經驗的前端工程師，不算資深，也不算菜鳥，喜歡前端的工作，對自己刻出來的畫面感到很有成就感。我有一隻貓，叫珍珠，是一隻虎斑白的米克斯。
          </article>
          <article>
            我喜歡獨立開發，也喜歡和團隊一起討論的氛圍。有很多想法，但是不擅長表達；話不多，屬於內向的人，但也喜歡跟大家玩在一起。有不懂的地方，會和夥伴一起討論，若自己先前有一些經驗，也會和工作夥伴一起分享。偶爾也看一些線上課程，加強自己的觀念及開發速度。
          </article>
          <article>
            有時間的話，我喜歡和朋友一起打籃球，也喜歡自己出門走走，也很喜歡外國的旅遊，下一個目標是歐洲旅遊。
          </article>
        </div>
      </div>
    </div>
  );
}

export default Profile;