function ResultPage({ letter }) {
  if (!letter) return null;

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>누군가의 편지</h2>
      <p>{letter.content}</p>
      <p style={{ textAlign: "right" }}>– {letter.nickname}</p>
    </div>
  );
}

export default ResultPage;
