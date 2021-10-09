import React from "react";
import { EmptySpace } from "../../components";
import { fetchAllPosts } from "../../services/posts";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchedData = fetchAllPosts();
    console.log(fetchedData, "fetched data");
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
    </div>
  );
};

export default Blog;
