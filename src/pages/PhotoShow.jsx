import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const images = [
  "public/her.png",
  
];

export default function PhotoShow() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    // Show button after 15 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
      clearInterval(interval);
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="photo-page"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="overlay">
        <h1>You look magical ✨💖</h1>
        
        {showButton && (
          <button onClick={() => navigate("/proposal")}>
            <h4>I have a Question</h4>
            May I ask ?
          </button>
        )}
      </div>
    </div>
  );
}
