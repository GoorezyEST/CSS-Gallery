import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Error from "./components/404/Error";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Settings from "./components/settings/Settings";
import CardHover from "./components/projects/card-hover-tilt/CardHover";
import Waves from "./components/projects/waves/Waves";
import TextSideSide from "./components/projects/text-side-to-side/TextSideSide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/gallery/card-hover-3d" element={<CardHover />} />
        <Route path="/gallery/waves-effect" element={<Waves />} />
        <Route path="/gallery/text-side-to-side" element={<TextSideSide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
