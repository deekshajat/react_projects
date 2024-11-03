import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
  //useState
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect
  useEffect(() => {
    //make http request
    axios
      .get(URL)
      .then((post) => {
        //console.log(post);
        //Update loading state
        setIsLoading(false);
        //update the posts state
        setPosts(post.data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [loading, error]);
  //display loading
  if (loading)
    return (
      <div style={{ color: "green", textAlign: "center" }}>Loading...</div>
    );
  //display error
  if (error)
    return (
      <div style={{ color: "red", textAlign: "center" }}>{error.message}</div>
    );
  return (
    <div>
      <h2>Network Request</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
