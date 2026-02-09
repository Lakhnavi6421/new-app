import { useNavigate } from "react-router-dom";

export default function Memories() {
  const navigate = useNavigate();

  return (
    <div className="page memories">
      <h1>Things I Love 🫶</h1>

      <div className="memory-box">
        <p>🌸 I love your Eyes, Nose, Hair, Voice and your cosmic AURA. </p>
        <p>💖 Your childish nature makes you more beautiful.</p>
        <p>😤 When you get angry, you look cute, not scary.</p>
        <p>❤️ Archiii, tu jab bhi mujhse baat karti h n, ye duniya ruk si jati h.</p>
        <p>🥺 Lekin jab tu ignore karti h or attitude dikhati h, wo mujhe bilkul nhi pasand nhi.</p>
    </div>


      <button onClick={() => navigate("/archiii")}>
        Abhi to bhot kuch h ✨
      </button>
    </div>
  );
}
