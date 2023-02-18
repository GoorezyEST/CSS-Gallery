import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Error from "./components/404/Error";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Settings from "./components/settings/Settings";
import Spinner from "./components/spinner/Spinner";
import CardHover from "./components/projects/card-hover-tilt/CardHover";
import Waves from "./components/projects/waves/Waves";
import TextSideSide from "./components/projects/text-side-to-side/TextSideSide";
import BtnRipple from "./components/projects/btn-ripple/BtnRipple";
import MultiWords from "./components/projects/multi-words/MultiWords";
import Hearth from "./components/projects/hearth/Hearth";

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
        <Route path="/gallery/btn-ripple" element={<BtnRipple />} />
        <Route path="/gallery/multi-words" element={<MultiWords />} />
        <Route path="/gallery/hearth-pulse" element={<Hearth />} />
        <Route path="/loading" element={<Spinner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
