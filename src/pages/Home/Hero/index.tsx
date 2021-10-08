import { TextDefault, Social } from "../../../components";
import aabhushan from "../../../assets/images/aabhushan.jpg";

const HeroSection = () => {
  return (
    <div className="section-header bg-primary-app pb-0">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12 col-sm-8">
            <div className="mt-4 mb-5">
              <img
                src={aabhushan}
                className="rounded-circle img-thumbnail image-lg border-gray-300 p-2"
                alt="Profile"
                height="150"
                width="150"
              />
              <TextDefault as="h1" className="display-4 fw-normal my-4">
                Hello, I’m <span className="fw-bold">Aabhushan Gautam</span>
              </TextDefault>
              <TextDefault as="h5" className="fw-normal text-gray">
                React JS Developer at <span className="fw-bold">Touchware</span>
              </TextDefault>
            </div>
            <Social
              facebook
              youtube
              github
              instagram
              linkedin
              twitter
              showMessage={false}
              position="center"
              classNames="p-0 mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
