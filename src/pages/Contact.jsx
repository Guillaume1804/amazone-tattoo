import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import RevealOnScroll from "../components/RevealOnScroll";
import backgroundImage from "../assets/contact-bg.jpg";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé :", form);
  };

  return (
    <PageWrapper>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(24,24,27,0.9)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section className="relative z-10 w-full text-white flex items-center justify-center px-4 sm:px-6 min-h-[calc(100vh-120px)]">
        <div className="w-full max-w-6xl backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 mt-24 md:mt-12 lg:mt-16 mb-8">
          <div
            className="w-full bg-zinc-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 
            p-4 sm:p-5 md:p-6 
            md:overflow-hidden 
            md:max-h-[calc(100vh-64px-56px)]"
          >
            <RevealOnScroll>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10">
                Contact & Rdv
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* Bloc gauche */}
              <RevealOnScroll>
                <div className="space-y-5 text-sm sm:text-base">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-2">
                      ME CONTACTER
                    </h3>
                    <p className="font-bold">Prendre Rendez-vous</p>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      Envie d’un tatouage unique ? Contactez-moi pour en
                      discuter ou réservez votre rendez-vous dès maintenant !
                    </p>
                  </div>

                  <div className="space-y-4 mt-6">
                    <h4 className="text-sm sm:text-base font-semibold">
                      Contact information
                    </h4>
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg shadow-md">
                      <span className="text-base">@</span>
                      <span className="text-xs sm:text-sm">
                        <span className="text-zinc-400">Email : </span>
                        <strong>fermoger@gmail.com</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg shadow-md">
                      <span className="text-base">📞</span>
                      <span className="text-xs sm:text-sm">
                        <span className="text-zinc-400">Tél : </span>
                        <strong>+33 6 50 53 62 28</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Formulaire */}
              <RevealOnScroll>
                <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-1" htmlFor="name">
                      Noms
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition"
                      placeholder="Noms et Prénoms"
                    />
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="phone">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition"
                      placeholder="0601020304"
                    />
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="message">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="3"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
                      placeholder="Tapez votre message ici..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
                  >
                    Envoyer
                  </button>
                </form>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Contact;
