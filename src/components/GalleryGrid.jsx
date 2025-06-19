import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RevealOnScroll from "./RevealOnScroll";
import imageData from "../data/imagesData.json";

function GalleryGrid() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    setFilteredImages(imageData); // pas de filtre pour l'instant
  }, []);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = () =>
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () =>
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );

  return (
    <>
      {/* Grille type Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((img, index) => (
          <RevealOnScroll key={img.id}>
            <div
              className="w-full mb-4 break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-lg group"
              onClick={() => openModal(index)}
            >
              <img
                src={img.filename}
                alt={img.alt || `Tatouage ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Modale d'image plein écran */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex].filename}
              alt="Zoom"
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black p-2 text-white text-xl rounded-full"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white px-3 py-2 rounded-full text-xl"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white px-3 py-2 rounded-full text-xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

GalleryGrid.propTypes = {
  mode: PropTypes.string, // réserve pour usage futur (filtrage, etc.)
};

export default GalleryGrid;
