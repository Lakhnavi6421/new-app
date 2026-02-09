import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      <h1>Hey Princess 👑</h1>
      <p>I made something special for My Beautiful Chaos 💫 💕</p>
      <p>Are you ready to see it? 😌</p>
      <button onClick={() => navigate("/compliment")}>
        Chalo maja aaega 😍
      </button>
    </div>
  );
}
