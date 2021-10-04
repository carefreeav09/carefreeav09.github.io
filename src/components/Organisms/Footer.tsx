import React from "react";
import styled from "styled-components";
import { Social } from "..";

const FooterDOM = styled.div`
  color: ${(props: any) => props.theme.colors.footerTextColor};
  background-color: ${(props: any) => props.theme.colors.footerBackground};
`;

interface IFooterProps {
  children: React.ReactNode;
  className?: string;
  hasSocials?: boolean;
  socials: string[];
}

const Footer = ({ children, className, hasSocials, socials }: IFooterProps) => {
  return (
    <FooterDOM className={className}>
      {hasSocials && (
        <Social
          facebook={socials.includes("facebook")}
          youtube={socials.includes("youtube")}
          github={socials.includes("github")}
          instagram={socials.includes("instagram")}
          linkedin={socials.includes("linkedin")}
          twitter={socials.includes("twitter")}
        />
      )}

      {children}
    </FooterDOM>
  );
};

export default Footer;
