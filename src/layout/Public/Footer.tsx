import React from "react";
import { Footer } from "../../components";
import { Link } from "react-router-dom";

const MainFooter = (props: any) => {
  return (
    <Footer
      className={`carefreeav-page-footer text-center text-lg-start`}
      hasSocials
      socials={["facebook", "github", "twitter", "instagram"]}
      style={props.style}
    >
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                CarefreeAV
              </h6>
              <p>
                React JS developer from Nepal with ADHD. I am a passionate about
                doing frontend things.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              {/* <p>
                <Link to={""} className="text-reset">
                  Angular
                </Link>
              </p> */}
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to={"/components"} className="text-reset">
                  Components
                </Link>
              </p>
              <p>
                <Link to={"/about"} className="text-reset">
                  About Me
                </Link>
              </p>
              <p>
                <Link to={"/blogs"} className="text-reset">
                  Blogs
                </Link>
              </p>
              <p>
                <Link to={"/contact"} className="text-reset">
                  Contact Me
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Kathmandu, Nepal
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                carefreeav09@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> 9861551591
              </p>
              <p>
                <i className="fas fa-print me-3" /> 9842409030
              </p>
            </div>
          </div>
        </div>
      </section>
    </Footer>
  );
};

export default MainFooter;
