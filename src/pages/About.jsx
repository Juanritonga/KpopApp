import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/About.css"; 
import personal from "../assets/personal.jpg";

function App() {
  return (
    <div className="container-about py-5 mt-3 mb-3">
      <div className="profile d-flex flex-column align-items-center text-center">
        <img src={personal} alt="Juanda Ritonga" className="profile-img mb-4" />
        <div className="info">
          <h1 className="name mb-3">JUANDA RITONGA</h1>
          <p className="position mb-4">JUNIOR FRONT-END DEVELOPER</p>
          <p className="bio mb-5">
            I am passionate about crafting responsive and intuitive user interfaces, committed to delivering exceptional user experiences through creative problem-solving and technical expertise.
          </p>
          <ul className="contact-list list-unstyled">
            <li>
              <i className="fas fa-calendar-alt me-2"></i>
              8th December, 2001
            </li>
            <li>
              <i className="fas fa-phone-alt me-2"></i>
              (+62) 895 2938 8788
            </li>
            <li>
              <i className="fas fa-envelope me-2"></i>
              ritongajuanda46@gmail.com
            </li>
            <li>
              <i className="fas fa-home me-2"></i>
              Jakarta
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
