import GalleryGrid from "../components/GalleryGrid";
import PageWrapper from "../components/PageWrapper";
import RevealOnScroll from "../components/RevealOnScroll";

function Gallery() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-4 py-20 bg-gradient-to-b from-black via-neutral-900 to-black text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight relative inline-block group">
              Galerie de Tatouages
              <span className="block w-0 group-hover:w-16 transition-all duration-500 h-1 bg-yellow-500 mx-auto mt-2"></span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <GalleryGrid />
          </RevealOnScroll>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Gallery;
