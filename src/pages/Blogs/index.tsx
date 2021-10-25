import React from "react";
import { EmptySpace, Card, TextDefault, Button } from "../../components";
import { fetchAllPosts } from "../../services/posts";
import ReactHtmlParser from "react-html-parser";

import { Link } from "react-router-dom";
import "./styles.css";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchedData = fetchAllPosts();
    fetchedData.then((data) => {
      setPosts(data);
    });
  }, []);

  const handleExcerpt = (excerpt: string): string => {
    return excerpt.substring(0, 200) + " ...";
  };

  return (
    <div>
      <EmptySpace height={100} />
      <div className="container">
        <div className="row g-0 blog-grids">
          {posts?.map((post: any) => (
            <Card image={post.jetpack_featured_media_url}>
              <TextDefault as="h3" background="transparent">
                {ReactHtmlParser(post.title.rendered)}
              </TextDefault>
              <TextDefault as="p" background="transparent">
                {ReactHtmlParser(handleExcerpt(post.excerpt.rendered))}
              </TextDefault>
              <Link to={`/blog/${post.id}/${post.slug}`}>
                <Button roundedOutline type="button" buttonType="secondary">
                  Read More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
