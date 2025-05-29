import GalleryGrid from "../components/GalleryGrid";
import PageWrapper from "../components/PageWrapper";
import RevealOnScroll from "../components/RevealOnScroll";

function Gallery() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-4 py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <RevealOnScroll>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Galerie de Tatouages
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <GalleryGrid mode="gallery" />
          </RevealOnScroll>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Gallery;
