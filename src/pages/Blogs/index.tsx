import React from "react";
import { EmptySpace, Card } from "../../components";
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
      <div className="container">
        <div className="row g-0">
          {posts?.map((post: any) => (
            <Card key={post.id}>
              <div className="col-4">
                <img
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt="..."
                  className="img-fluid rounded-start"
                  style={{
                    height: "250px",
                  }}
                />
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
