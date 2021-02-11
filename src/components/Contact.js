import ItemTitle from './ItemTitle';
import insImg from '../assets/images/instagram.svg';
import mediumImg from '../assets/images/medium.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import emailImg from '../assets/images/email.svg';

const Contact = () => {
  return (
    <div id="contact" className="contact section">
      <ItemTitle titleName="Contact" description="this is Contact"/>
      <div className="row px-5">
        <div className="contact-item col-lg-6 my-3">
          <a href="mailto:jinglelin82@gmail.com">
            <div className="img-container">
              <img src={emailImg} alt="email-icon"/>
            </div>
            jinglelin82@gmail.com</a>
        </div>
        <div className="contact-item col-lg-6 my-3">
          <a href="https://www.linkedin.com/in/jingle-lin-157260139/">
            <div className="img-container">
              <img src={linkedinImg} alt="linkedin-icon"/>
            </div>
            Lin Ping Chun</a>
        </div>
        <div className="contact-item col-lg-6 my-3">
          <a href="https://instagram.com/brocnpotato">
            <div className="img-container">
              <img src={insImg} alt="instagram-icon"/>
            </div>
            brocnpotato</a>
        </div>
        <div className="contact-item col-lg-6 my-3">
          <a href="https://medium.com/jiingler">
            <div className="img-container">
              <img src={mediumImg} alt="medium-icon"/>
            </div>
            jiingler</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;