import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const startMusic = () => {
      audio.volume = 0.9;
      audio.play().catch(() => {});
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/love-song.mp3" type="audio/mp3" />
    </audio>
  );
};

export default MusicPlayer;
