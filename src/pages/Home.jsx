import { Link } from "react-router-dom";
import heroImage from "../assets/hero-img.png";
import tatoueurImage from "../assets/pexels-photo-14242278.jpeg";
import ScrollDownButton from "../components/ScrollDownButton";
import GalleryGrid from "../components/GalleryGrid";
import PageWrapper from "../components/PageWrapper";
import RevealOnScroll from "../components/RevealOnScroll";

function Home() {
  const scrollToAbout = () => {
    document.getElementById("a-propos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper>
      {/* SECTION HERO */}
      <section
        id="hero"
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 text-center px-4 sm:px-6">
          <RevealOnScroll>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
              Amazone Tattoo
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg mb-6 opacity-80">
              La Fare-les-Oliviers
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Link to="/contact">
              <button className="px-5 sm:px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                Prendre rendez-vous
              </button>
            </Link>
          </RevealOnScroll>
        </div>

        <ScrollDownButton onClick={scrollToAbout} />
      </section>

      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

      {/* SECTION À PROPOS */}
      <section
        id="a-propos"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-14 items-center">
          <div className="md:w-1/2 space-y-6">
            <RevealOnScroll>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                À Propos d’Amazone Tattoo
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg">
                Fort d’une{" "}
                <span className="font-semibold">
                  expérience solide dans l’art du tatouage
                </span>
                , notre artiste vous accompagne pour transformer vos idées en un
                dessin sur-mesure, qu’il s’agisse de motifs{" "}
                <span className="font-bold">finement détaillés</span>, de{" "}
                <span className="font-bold">
                  pièces tribales inspirées de la Guyane
                </span>
                , ou de créations{" "}
                <span className="font-bold">réalistes et expressives</span>.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg">
                Nous accordons une importance primordiale à{" "}
                <span className="font-semibold">l’hygiène et au bien-être</span>{" "}
                de nos clients, en utilisant du matériel stérile et des encres
                de haute qualité.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.6}>
              <p className="text-sm sm:text-base md:text-lg">
                Chez <span className="font-semibold">Amazone Tattoo</span>,
                chaque tatouage est une œuvre unique, pensée et réalisée avec
                passion. Situé à{" "}
                <span className="font-bold">La Fare-les-Oliviers</span>, notre
                salon vous accueille dans une ambiance chaleureuse et
                professionnelle.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.8}>
              <p className="font-bold text-sm sm:text-base md:text-lg">
                Un tatouage, c’est une histoire gravée sur la peau – écrivons-la
                ensemble.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.4}>
            <div className="md:w-1/2 relative">
              <div className="fade-mask overflow-hidden rounded-lg shadow-lg relative">
                <img
                  src={tatoueurImage}
                  alt="Tatoueur en action"
                  className="object-cover w-full h-auto max-h-[400px] sm:max-h-[500px]"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION GALERIE ACCUEIL */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Dernières réalisations
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <GalleryGrid limit={3} mode="home" />
          </RevealOnScroll>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Home;
