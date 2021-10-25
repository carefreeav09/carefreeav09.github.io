import React from "react";
import styled from "styled-components";

interface ICard {
  children: React.ReactNode;
  className?: string;
  transparent?: boolean;
  rounded?: boolean;
  shadow?: boolean;
}

const StyledCard = styled.div<ICard>`
  box-shadow: ${(props) =>
    props.shadow
      ? "0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%)"
      : "0 0 transparent"};
  border: 0;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: ${(props) => (props.rounded ? "0.5rem" : "0rem")};
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.cardBackground};

  a img {
    border-top-left-radius: ${(props) => (props.rounded ? "0.5rem" : "0rem")};
    border-top-right-radius: ${(props) => (props.rounded ? "0.5rem" : "0rem")};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 250px;
    width: 100%;
  }

  .card-content {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1.5rem;
  }
`;

const Card = ({ children, className }: ICard) => {
  return (
    <StyledCard className={`${className}`} shadow rounded>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  transparent: false,
  rounded: true,
  shadow: true,
};

export default Card;
