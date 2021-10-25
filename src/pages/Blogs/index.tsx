import React from "react";
import { EmptySpace, Card, TextDefault, Button } from "../../components";
import { fetchAllPosts } from "../../services/posts";
import ReactHtmlParser from "react-html-parser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import "./styles.css";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchedData = fetchAllPosts();
    fetchedData.then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handleExcerpt = (excerpt: string): string => {
    return excerpt.substring(0, 200) + " ...";
  };

  return (
    <div>
      <EmptySpace height={100} />
      <div className="container">
        {loading ? (
          <>
            <Skeleton height={400} />
            <Skeleton count={5} />
          </>
        ) : (
          <div className="row g-0 blog-grids">
            {posts?.map((post: any, index: number) => (
              <Card
                // image={post.jetpack_featured_media_url}
                shadow
                rounded
                key={index}
              >
                <Link to={`/blog/${post.id}/${post.slug}`}>
                  <img
                    src={post.jetpack_featured_media_url}
                    alt=""
                    className="card-image"
                  />
                </Link>
                <div className="card-content">
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
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
