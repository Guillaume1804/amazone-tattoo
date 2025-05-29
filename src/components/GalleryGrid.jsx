import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

// Import dynamique des images
const imageModules = import.meta.glob("../assets/gallery-imgs/*.png", {
  eager: true,
});
const images = Object.entries(imageModules)
  .map(([path, module]) => ({
    src: module.default,
    filename: path.split("/").pop(),
  }))
  .sort((a, b) => b.filename.localeCompare(a.filename)); // Tri décroissant

function GalleryGrid({ limit, mode = "gallery" }) {
  const navigate = useNavigate();
  const [visibleImages, setVisibleImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setVisibleImages(limit ? images.slice(0, limit) : images);
  }, [limit]);

  const handleImageClick = (image) => {
    if (mode === "home") {
      navigate("/galerie");
    } else {
      setActiveImage(image);
    }
  };

  const relatedImages = activeImage
    ? images.filter(
        (img) =>
          img.filename.split("-")[0] === activeImage.filename.split("-")[0]
      )
    : [];

  const columns = [];
  const maxPerColumn = 5;
  for (let i = 0; i < relatedImages.length; i += maxPerColumn) {
    columns.push(relatedImages.slice(i, i + maxPerColumn));
  }

  return (
    <>
      {/* GRILLE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((img, index) => (
          <RevealOnScroll key={index}>
            <div
              className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img.src}
                alt={`Tatouage ${index + 1}`}
                className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-[1px] group-hover:brightness-75"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white font-semibold">
                {mode === "home" ? "Voir plus" : "Voir"}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* MODALE */}
      {mode === "gallery" && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-[90vw] max-h-[90vh] bg-transparent flex flex-col md:flex-row gap-6 items-center md:items-start justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE PRINCIPALE */}
            <div className="relative max-w-3xl w-full">
              <img
                src={activeImage.src}
                alt="Tatouage en grand"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/90 transition p-2 rounded-full text-lg"
              >
                ✖
              </button>
            </div>

            {/* MINIATURES SUR LE CÔTÉ (Desktop) */}
            <div
              className="hidden md:flex gap-4 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {columns.map((group, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {group.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={`Mini ${i}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(img);
                      }}
                      className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer ${
                        img.src === activeImage.src
                          ? "border-yellow-400"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* MINIATURES EN BAS (Mobile) */}
            <div
              className="md:hidden flex overflow-x-auto max-w-full whitespace-nowrap gap-2 mt-4 no-scrollbar scroll-smooth px-2"
              onClick={(e) => e.stopPropagation()}
            >
              {relatedImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={`Mini ${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(img);
                  }}
                  className={`w-20 h-20 object-cover flex-shrink-0 rounded-md border-2 cursor-pointer ${
                    img.src === activeImage.src
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

GalleryGrid.propTypes = {
  limit: PropTypes.number,
  mode: PropTypes.oneOf(["home", "gallery"]),
};

export default GalleryGrid;
