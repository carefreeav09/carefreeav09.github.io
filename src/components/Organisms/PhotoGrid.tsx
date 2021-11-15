import styled from "styled-components";

const PhotoGridEL = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  .photo-grid-column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;

    img {
      margin-top: 8px;
      vertical-align: middle;
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .photo-grid-column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .photo-grid-column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
`;

const PhotoGrid = ({ imageList }: { imageList: any[] }) => {
  return (
    <PhotoGridEL>
      {imageList?.map((image, index) => (
        <div className="photo-grid-column">
          <img key={index} src={image.jetpack_featured_media_url} alt={`${index}`} />
        </div>
      ))}
    </PhotoGridEL>
  );
};

export default PhotoGrid;
