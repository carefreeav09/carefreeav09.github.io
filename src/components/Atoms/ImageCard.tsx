import React from "react";
import styled from "styled-components";
import { TextDefault } from "../index";

interface IImageCard {
  title: string;
  description?: string;
  featuredImage: string;
  height?: number;
  width?: number;
}

const ImageCardEl = styled.div`
  position: relative;
  text-align: left;
  border-radius: 20px;

  img {
    border-radius: 20px;
  }

  .bottom-right {
    position: absolute;
    top: 8px;
    left: 0;
    padding: 20px;

    .title {
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const ImageCard = ({ title, featuredImage, height, width }: IImageCard) => {
  return (
    <ImageCardEl className="card">
      <img src={featuredImage} alt="Snow" height={height} width={width} />
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

ImageCard.defaultProps = {
  height: 400,
  width: '100%'
};

export default ImageCard;
