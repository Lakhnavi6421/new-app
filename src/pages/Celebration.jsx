import { useEffect } from "react";

export default function Celebration() {

  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement("div");
      emoji.innerHTML = ["💖","🎉","💃","🕺","❤️","✨","😍"][Math.floor(Math.random() * 7)];
      emoji.className = "floating-emoji";
      emoji.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 3000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page celebration">
      <h1>Yayyyy 🥳❤️</h1>
      <p>You are officially my Valentine 💖</p>
      <p>You just made my day the happiest 😍</p>
      <p>Hey Archiii 💕
This world has millions of girls…
but none of them is like you 💖</p>

      <div className="dance">

        💃 🕺 💃 🕺 💃
      </div>
<p>Ab surprise diya h to call Thanx bol bhi de, or agar nhi kregi to mujhe yahi lagega ki tujhe ye surpise achha nhi laga.</p>
    </div>
  );
}
