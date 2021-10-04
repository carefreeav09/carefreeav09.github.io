import React from "react";
import { Link } from "react-router-dom";

import {
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "../../constants";

interface ISocialProfiles {
  facebook?: boolean;
  twitter?: boolean;
  instagram?: boolean;
  linkedin?: boolean;
  github?: boolean;
  youtube?: boolean;
}

const Social = (props: ISocialProfiles) => {
  const { facebook, twitter, instagram, linkedin, github, youtube } = props;
  return (
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        {facebook && (
          <a
            className="me-4 text-reset"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
        )}

        {twitter && (
          <a
            className="me-4 text-reset"
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        )}

        {instagram && (
          <a
            className="me-4 text-reset"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        )}

        {linkedin && (
          <a
            className="me-4 text-reset"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        )}

        {github && (
          <a
            className="me-4 text-reset"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        )}

        {youtube && (
          <a
            className="me-4 text-reset"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube" />
          </a>
        )}
      </div>
    </section>
  );
};

export default Social;
