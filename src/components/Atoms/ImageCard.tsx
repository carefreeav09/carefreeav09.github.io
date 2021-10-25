import React from "react";
import styled from "styled-components";
import { TextDefault } from "../index";

const ImageCardEl = styled.div`
  position: relative;
  text-align: left;
  border-radius: 20px;

  img {
    max-height: 400px;
    width: 100%;
    border-radius: 20px;
    height: 400px;
  }

  .bottom-right {
    position: absolute;
    bottom: 8px;
    left: 0;
    padding: 20px;

    .title {
      font-weight: bold;
      font-size: 2rem;
      background: ${(props) => props.theme.colors.background}50;
      margin-bottom: 0;
    }

    .paragraph {
      font-weight: bolder;
      font-size: 2.5rem;
      background: transparent;
      color: white;
    }
  }
`;

const ImageCard = ({
  title,
  featuredImage,
}: {
  title: string;
  description: string;
  featuredImage: string;
}) => {
  return (
    <ImageCardEl className="card">
      <img src={featuredImage} alt="Snow" />
      <div className="bottom-right">
        <TextDefault className="title" as="p">
          {console.log(title, "image")}
          {title}
        </TextDefault>

        <TextDefault className="paragraph" as="p">
          {/* {description} */}
        </TextDefault>
      </div>
    </ImageCardEl>
  );
};

export default ImageCard;
