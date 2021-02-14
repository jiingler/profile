import ItemTitle from './common/ItemTitle';
import insImg from '../assets/images/instagram.svg';
import mediumImg from '../assets/images/medium.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import emailImg from '../assets/images/email.svg';

const Contact = () => {
  return (
    <div id="contact" className="contact section">
      <div className="container">
        <ItemTitle titleName="Contact Me" description="this is Contact"/>
        <div className="links row">
          <div className="contact-item col-md-6 col-3 my-md-3 my-2">
            <a href="mailto:jinglelin82@gmail.com">
              <div className="img-container">
                <img src={emailImg} alt="email-icon"/>
              </div>
              <p className="d-md-block d-none">jinglelin82@gmail.com</p>
            </a>
          </div>
          <div className="contact-item col-md-6 col-3 my-md-3 my-2">
            <a href="www.linkedin.com/in/ping-chun-lin">
              <div className="img-container">
                <img src={linkedinImg} alt="linkedin-icon"/>
              </div>
              <p className="d-md-block d-none">Lin Ping Chun</p>
            </a>
          </div>
          <div className="contact-item col-md-6 col-3 my-md-3 my-2">
            <a href="https://instagram.com/brocnpotato">
              <div className="img-container">
                <img src={insImg} alt="instagram-icon"/>
              </div>
              <p className="d-md-block d-none">brocnpotato</p>
            </a>
          </div>
          <div className="contact-item col-md-6 col-3 my-md-3 my-2">
            <a href="https://medium.com/jiingler">
              <div className="img-container">
                <img src={mediumImg} alt="medium-icon"/>
              </div>
              <p className="d-md-block d-none">jiingler</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;