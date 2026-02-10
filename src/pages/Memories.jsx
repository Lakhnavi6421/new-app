import { useNavigate } from "react-router-dom";

export default function Memories() {
  const navigate = useNavigate();

  return (
    <div className="page memories">
      <h1>Things I Love 🫶</h1>

      <div className="memory-box">
        <p>🌸 Teri machli jaisi aankhein, tere resham se baal, tere koyal si awaaz or tote jaisi naak 😂.</p>
        <p>💖 Tera baccho jaisa behaviour tujhe or bhi sundar banata h.</p>
        <p>😤 Tujhe jaan bujh krr chidhana mujhe accha lagta h, taaki tu mujhe bura bole or mujhe achha lage. 😌</p>
        <p>❤️ Archiii, tu jab bhi mujhse baat karti h n, ye duniya ruk si jati h.</p>
        <p>🥺 Lekin jab tu ignore karti h or attitude dikhati h, wo mujhe bilkul nhi pasand nhi.</p>
        <p>❤️ Mujhe teri care karna bhot achha lagta h. </p>
    </div>


      <button onClick={() => navigate("/archiii")}>
        Abhi to bhot kuch h ✨
      </button>
    </div>
  );
}
