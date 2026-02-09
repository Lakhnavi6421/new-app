import { useNavigate } from "react-router-dom";

export default function Compliment() {
  const navigate = useNavigate();

  return (
    <div className="page compliment">
      <h1>Why You Are Special 💖</h1>

      {/* <h1 className="glow-name">For Archiii 💖</h1> */}

      <div className="card">
        <p>🌸 Archiii, you are not just beautiful, you are rare.</p>
        <p>💖 You act strong, but I know you have the softest heart.</p>
        <p>😌 Honestly, the world feels boring without you.</p>
        <p>❤️ You are not an option, you are my choice.</p>
        <p>✨ In a world full of options, I choose you again and again 💫</p>
      </div>


      <button onClick={() => navigate("/memories")}>
        Aage badho 👉
      </button>
    </div>
  );
}
