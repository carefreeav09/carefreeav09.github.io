import React from "react";
import styled from "styled-components";
import { TextDefault } from "../index";

interface IImageCard {
  title: string;
  description?: string;
  featuredImage: string;
  height?: number;
  width?: number;
  cardWidth?: string;
  className?: string;
  link?: string;
  rounded?: boolean;
}

const ImageCardEl = styled.div<IImageCard>`
  position: relative;
  text-align: left;
  border-radius: ${(props) => (props.rounded ? "20px" : "0px")};
  width: ${(props) => props.cardWidth};
  margin: auto;

  .bg-image {
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    border-radius: ${(props) => (props.rounded ? "20px" : "0px")};
  }

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
    background: transparent;
    cursor: pointer;
  }

  .mask:hover {
    background: #00000080;
    transition: background 0.3s ease-in-out;

    .bottom-right {
      .title {
        display: contents;
        z-index: 1;
      }
    }
  }

  img {
    border-radius: ${(props) => (props.rounded ? "20px" : "0px")};
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
      opacity: 0;
    }
  }
`;

const ImageCard = ({
  title,
  featuredImage,
  height,
  width,
  cardWidth,
  className,
  link,
}: IImageCard) => {
  return (
    <ImageCardEl
      className={`${className}`}
      title={title}
      featuredImage={featuredImage}
      cardWidth={cardWidth}
    >
      <a href={link ? link : "#"} target={"_blank"} rel="noreferrer">
        <div className="bg-image">
          <img src={featuredImage} alt="Snow" height={height} width={width} />
          <div className="mask">
            <div className="bottom-right">
              <TextDefault className="title" as="p">
                {title}
              </TextDefault>
            </div>
          </div>
        </div>
      </a>
    </ImageCardEl>
  );
};

ImageCard.defaultProps = {
  width: "100%",
  // cardWidth: "50%",
};

export default ImageCard;
