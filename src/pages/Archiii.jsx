import { useNavigate } from "react-router-dom";

export default function Archiii() {
  const navigate = useNavigate();

  return (
    <div className="page archiii-page">
      <h1 className="archiii-title">For Archiii 💖</h1>

      <div className="special-card">
        <p>🌸 If beauty had a name, it would be Archiii 😌</p>
        <p>💫 Teri beauty k samne Shillong ka night view bhi feeka h.</p>
        <p>✨ Maybe I’m not perfect, but my feelings for you are real ❤️</p>
        <p>😌 Tune jab mujhse train me Choco Lava cake k liye bola, tab mene apne aap ko bhot special feel kiya.</p>
        <p>🥺 Honestly Archiii, tere ke bina sab boring lagta hai.</p>
        <p>❤️ You are not an option, you are my choice.</p>
        <p>🌍 There are millions of girls in the world, but there is only one Archiii 💎</p>
      </div>
        <br /><br />
    <div>Iss duniya ka sabse achhe insaan ki image dekhna chahegi ???</div>

<button onClick={() => navigate("/photos")}>
  Bss tu nazar mt lagana 🧿💖
</button>


    </div>
  );
}
