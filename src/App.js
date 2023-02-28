import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";
import FooterPlayer from "./components/FooterPlayer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/album/:id" element={<Album />}></Route>
          <Route path="/artist/:id" element={<Artist />}></Route>
        </Routes>
        <FooterPlayer />
      </BrowserRouter>
    </div>
  );
}

export default App;
