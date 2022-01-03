import React from "react";

import {
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "../../constants";

interface ISocialProfiles {
  container?: boolean;
  facebook?: boolean;
  twitter?: boolean;
  instagram?: boolean;
  linkedin?: boolean;
  github?: boolean;
  youtube?: boolean;
  showMessage?: boolean;
  position?: string;
  classNames?: string;
  iconsClassNames?: string;
}

const Social = (props: ISocialProfiles) => {
  const {
    facebook,
    twitter,
    instagram,
    linkedin,
    github,
    youtube,
    showMessage,
    position,
    classNames,
    iconsClassNames,
  } = props;
  return (
    <section
      className={`container d-flex justify-content-center justify-content-lg-between ${classNames}`}
    >
      {showMessage ? (
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      ) : (
        <div> </div>
      )}

      <div>
        {facebook && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
        )}

        {twitter && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        )}

        {instagram && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        )}

        {linkedin && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        )}

        {github && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        )}

        {youtube && (
          <a
            className={`me-4 text-reset ${iconsClassNames}`}
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube" />
          </a>
        )}
      </div>

      {position === "center" && <div></div>}
    </section>
  );
};

export default Social;

Social.defaultProps = {
  showMessage: true,
  classNames: "p-4",
};
