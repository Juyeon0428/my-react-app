export default function PostItem({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
