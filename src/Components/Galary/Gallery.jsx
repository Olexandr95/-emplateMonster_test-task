import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCirclePlus,
  faCircleXmark,
  faSquare,
  faTableCells,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.scss";
import galleryLocalStorageArr from "../../Constants/GalleryLocalStorage";

const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  // Add  to favourites
  const handleAddFavourites = () => {
    //const galeryStorage = JSON.parse(localStorage.getItem("gallery"));
    galleryLocalStorageArr.push({ img: galleryImages[slideNumber].img });
    localStorage.setItem("gallery", JSON.stringify(galleryLocalStorageArr));
  };

  // Change size galary
  const [mdSize, setMdSize] = useState(false);
  const [lgSize, setLGSize] = useState(false);
  const handleChangeSizeMedium = () => {
    setMdSize(!mdSize);
  };
  const handleChangeSizeLarge = () => {
    setLGSize(!lgSize);
  };

  const handleChangeSizeDefoult = () => {
    setMdSize(false);
    setLGSize(false);
  };
  // Toggle change display box
  const [openDispBox, setOpenDispBox] = useState(false);
  const handleChangeDispBox = () => {
    setOpenDispBox(!openDispBox);
  };
  return (
    <div>
      <div className="change__disp__block">
        <div>
          {!openDispBox ? (
            <FontAwesomeIcon icon={faBars} onClick={handleChangeDispBox} />
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={handleChangeDispBox}
            />
          )}
          <div className={openDispBox ? "active" : "hide"}>
            <div className="">
              <FontAwesomeIcon
                className="icon__position"
                icon={faTableCells}
                onClick={handleChangeSizeDefoult}
              />
              <FontAwesomeIcon
                className="icon__position"
                icon={faTableCellsLarge}
                onClick={handleChangeSizeMedium}
              />
              <FontAwesomeIcon
                className="icon__position"
                icon={faSquare}
                onClick={handleChangeSizeLarge}
              />
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="slider__wrap">
          <p className="calc-number-slides">
            current slide: {slideNumber + 1} from {galleryImages.length}
          </p>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btn__close"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="btn__add"
            onClick={handleAddFavourites}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btn__prev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btn__next"
            onClick={nextSlide}
          />
          <div className="full__screen-image">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div
        className={`gallery__wrap ${mdSize ? "medium" : ""} ${
          lgSize ? "large" : ""
        } `}
      >
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt={`image ${index + 1}`} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
