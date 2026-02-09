// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home.jsx";
// import Compliment from "./pages/Compliment.jsx";
// import Memories from "./pages/Memories.jsx";
// import Magic from "./pages/Magic.jsx";
// import Proposal from "./pages/proposal.jsx";
// import Celebration from "./pages/Celebration.jsx";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/compliment" element={<Compliment />} />
//         <Route path="/memories" element={<Memories />} />
//         <Route path="/magic" element={<Magic />} />
//         <Route path="/proposal" element={<Proposal />} />
//         <Route path="/celebration" element={<Celebration />} />
//       </Routes>
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

import Home from "./pages/Home.jsx";
import Compliment from "./pages/Compliment.jsx";
import Memories from "./pages/Memories.jsx";
import Magic from "./pages/Magic.jsx";
import PhotoShow from "./pages/PhotoShow.jsx"; // ✅ NEW
import Proposal from "./pages/Proposal.jsx";
import Celebration from "./pages/Celebration.jsx";
import Archiii from "./pages/Archiii.jsx";


export default function App() {
  return (
    <Router>
      <MusicPlayer /> {/* 🎵 Music will play on ALL pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compliment" element={<Compliment />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/archiii" element={<Archiii />} />
        <Route path="/photos" element={<PhotoShow />} /> {/* ✅ NEW */}
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/celebration" element={<Celebration />} />

      </Routes>
    </Router>
  );
}
