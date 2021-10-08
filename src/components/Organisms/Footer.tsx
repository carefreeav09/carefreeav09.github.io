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
  style?: React.CSSProperties;
}

const Footer = ({
  children,
  className,
  hasSocials,
  socials,
  style,
}: IFooterProps) => {
  return (
    <FooterDOM className={className} style={style}>
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

      <hr />

      {children}
    </FooterDOM>
  );
};

export default Footer;
