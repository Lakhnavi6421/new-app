import { useNavigate } from "react-router-dom";

export default function Magic() {
  const navigate = useNavigate();

  return (
    <div className="page magic">
      <h1>One in a Billion 🌌</h1>

      <p className="typing">
        In this entire universe, there is only one girl like you 💖
      </p>

     

      <button onClick={() => navigate("/archiii")}>
  Show something special 
</button>

    </div>
  );
}
