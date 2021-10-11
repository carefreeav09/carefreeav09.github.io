import React from "react";
import { EmptySpace, Button } from "../../components";
import { fetchAllPosts } from "../../services/posts";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchedData = fetchAllPosts();
    fetchedData.then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <EmptySpace height={100} />
      {posts?.map((post: any) => (
        <div key={post.id}>{post.title.rendered}</div>
      ))}
      <Button className="fw-bold me-5 ms-5">Hello</Button>
    </div>
  );
};

export default Blog;
