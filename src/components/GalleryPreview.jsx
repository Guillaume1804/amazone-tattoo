import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import RevealOnScroll from "./RevealOnScroll";
import imageData from "../data/imagesData.json";

function GalleryPreview({ limit = 3 }) {
  const navigate = useNavigate();
  const images = imageData
    .slice() // copie défensive
    .sort((a, b) => b.filename.localeCompare(a.filename)) // les plus récentes en premier
    .slice(0, limit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <RevealOnScroll key={img.id}>
          <div
            onClick={() => navigate("/galerie")}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg"
          >
            <img
              src={img.filename}
              alt={img.alt || `Tatouage ${index + 1}`}
              className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-[1px] group-hover:brightness-75"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white font-semibold">
              Voir plus
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}

GalleryPreview.propTypes = {
  limit: PropTypes.number,
};

export default GalleryPreview;
