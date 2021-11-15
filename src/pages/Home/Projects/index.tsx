import React from "react";
import { PhotoGrid, Section } from "../../../components";
import { fetchAllPosts } from "../../../services/posts";

const Projects = () => {
  const [images, setImages] = React.useState([]);
  
  React.useEffect(() => {
    const projectsList = fetchAllPosts();
    projectsList.then((projects) => {
      let tempProjects = projects;
      setImages(
        //@ts-ignore
        tempProjects?.filter((project: any) => project.categories[0] === 2008)
      );
    });
  }, []);

  return (
    <Section
      className="py-5 center-vertically"
      minHeight="80vh"
      gradient={{
        isGradient: true,
        gradientDark: ["#161c24", "#1b242f"],
        gradientLight: false,
      }}
    >
      <PhotoGrid imageList={images} />
    </Section>
  );
};

export default Projects;
