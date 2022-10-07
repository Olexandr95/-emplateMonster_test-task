import Gallery from "./Components/Galary/Gallery";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Favourites from "./Components/Favourites/Favourites";
import galleryImages from "./Constants/GalleryImages";
import Header from "./Components/Header/Header";


function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Gallery  galleryImages={galleryImages}/>} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
