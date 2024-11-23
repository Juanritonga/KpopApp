import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="d-flex flex-column">
      

      {/* Footer */}
      <footer className="text-center text-white" style={{ backgroundColor: "rgb(250, 215, 232)" }}      >
        <div className="container p-4">
          <section>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/Zp-Jhuhq0bQ"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright: juanritonga_
        </div>
      </footer>
    </div>
  );
};

export default Footer;
