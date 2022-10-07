import React from "react";
import Gallery from "../Galary/Gallery";

const Favourites = () => {
  const galeryLocalStorage = JSON.parse(localStorage.getItem("gallery"));

  return (
    <div>
      {!galeryLocalStorage ? (
        <p>You haven't added anything to your favorites yet</p>
      ) : (
        <Gallery galleryImages={galeryLocalStorage} />
      )}
    </div>
  );
};
export default Favourites;
