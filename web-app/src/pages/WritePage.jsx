import { useState } from "react";

function WritePage({ onSubmit }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>당신의 편지를 남겨주세요</h2>

      <input
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        style={{ width: "100%" }}
      />

      <button
        onClick={() => onSubmit(nickname, content)}
        style={{ marginTop: "10px" }}
      >
        편지 보내기
      </button>
    </div>
  );
}

export default WritePage;
