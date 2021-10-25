import React from "react";
import { useParams } from "react-router";
import ReactHtmlParser from "react-html-parser";

import { EmptySpace, TextDefault } from "../../components";
import { fetchIndividualPosts } from "../../services/posts";

const Individual = () => {
  const [post, setPost] = React.useState<any>({});

  //@ts-ignore
  let { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const fetchedData = fetchIndividualPosts(id);
      fetchedData.then((data) => {
        setPost(data);
      });
    }
  }, [id]);
  return (
    <div>
      <EmptySpace height={100} />
      <div className="container">
        <TextDefault as="h1">
          {ReactHtmlParser(post?.title?.rendered)}
        </TextDefault>

        <TextDefault as="p" fontSize="18px">
          {ReactHtmlParser(post?.content?.rendered)}
        </TextDefault>
      </div>
    </div>
  );
};

export default Individual;
