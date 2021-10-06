import React from "react";
import { TextDefault } from "../../../components";

const HeroSection = () => {
  return (
    <div className="section-header bg-primary-app pb-0">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12 col-sm-8">
            <div className="mt-4 mb-5">
              <TextDefault as="h1" className="display-4 fw-normal my-4">
                Hello, I’m <span className="fw-bold">Aabhushan Gautam</span>
              </TextDefault>
              <TextDefault as="h5" className="fw-normal text-gray">
                React JS Developer at{" "}
                <span className="fw-bold">Kotuko.srl</span>
              </TextDefault>
            </div>
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item">
                <a
                  className="icon icon-md icon-twitter me-3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="twitter"
                  href="https://www.twitter.com"
                >
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="icon icon-md icon-github me-3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="github"
                  href="https://www.github.com/carefreeav09"
                >
                  <span className="fab fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
