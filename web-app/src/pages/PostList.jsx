import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h2>게시글</h2>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
