import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Proposal() {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ top: "50%", left: "50%" });

  const moveNo = () => {
    setPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
    });
  };

  return (
    <div className="page proposal">
      <h1>Will you be my Valentine? 💕</h1>

      <button className="yes" onClick={() => navigate("/celebration")}>
        Yes 😍
      </button>

      <button
        className="no"
        style={{ position: "absolute", top: pos.top, left: pos.left }}
        onMouseEnter={moveNo}
      >
        No 🙄
      </button>
    </div>
  );
}
