import { useState } from "react";

function App() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [randomPost, setRandomPost] = useState(null);

  const handleSubmit = () => {
    if (!nickname || !content) return alert("닉네임과 내용을 써줘");

    const newPost = {
      nickname,
      content,
      createdAt: Date.now(),
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...posts, newPost]));

    const others = posts.filter(p => p.nickname !== nickname);
    if (others.length > 0) {
      const random = others[Math.floor(Math.random() * others.length)];
      setRandomPost(random);
    } else {
      setRandomPost(null);
    }

    setContent("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>📮편지 가게</h1>

      <input
        placeholder="닉네임"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="편지를 써보세요"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>편지 보내기</button>

      {randomPost && (
        <div style={{ marginTop: 40 }}>
          <h2>📬 도착한 편지</h2>
          <p><b>{randomPost.nickname}</b></p>
          <p>{randomPost.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;