import ItemTitle from './ItemTitle';
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
              <p><span className="fw-700 me-2">Name:</span>Lin Ping Chun</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">Born in:</span>1994/01</p>
            </li>
            <li>
              <p><span className="fw-700 me-2">Locate:</span>Seoul, South Korea</p>
            </li>
          </ul>
          <h3 className="title">About Me</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit maiores nesciunt similique rem minima, qui tempora ipsa iure laboriosam omnis laudantium enim. Est, odio. Facilis, maxime ipsam officiis libero nisi nihil est doloremque doloribus illum fuga voluptatibus nam quis magnam rerum unde at vero architecto consequatur repellat harum in! Modi consequuntur ipsum blanditiis exercitationem asperiores facere, eum quam voluptatem eaque veritatis voluptatibus aliquid! Libero molestias deserunt, placeat impedit voluptatum tempore facilis quibusdam magnam hic consectetur quod officia. Illum, animi obcaecati.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;