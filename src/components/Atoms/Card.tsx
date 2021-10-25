import React from "react";
import styled from "styled-components";

interface ICard {
  children: React.ReactNode;
  className?: string;
  image?: any;
  transparent?: boolean
}

const StyledCard = styled.div`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%);
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
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.cardBackground};

  .card-body {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1.5rem;
  }
`;

const Card = ({ children, className, image, transparent }: ICard) => {
  return (
    <StyledCard className={`card ${className}`}>
      {image && <img src={image} alt="Snow" />}
      <div className="card-body">{children}</div>
    </StyledCard>
  );
};

Card.defaultProps = {
  image: null,
  transparent: false,
};

export default Card;
