import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function LandingPage() {
  const [menuFuran, setMenuFuran] = useState(false);

  return (
    <div className="font-sans text-slate-800 overflow-x-hidden bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img src={logo} alt="Haldoor Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-lg sm:text-xl font-bold text-pink-600">
              Haldoor Driving School
            </h1>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-pink-400">Ku Saabsan</a>
            <a href="#why" className="hover:text-pink-600">Maxaa Naga Duwan</a>
            <a href="#courses" className="hover:text-pink-600">Casharro</a>
            <a href="#schedule" className="hover:text-pink-600">Wakhtiyo</a>
            <a href="#register" className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
              Is Diiwaangeli
            </a>
          </div>

          {/* Mobile */}
          <button className="md:hidden" onClick={() => setMenuFuran(!menuFuran)}>
            {menuFuran ? <X /> : <Menu />}
          </button>
        </div>

        {menuFuran && (
          <div className="md:hidden bg-white px-6 py-4 space-y-3 border-t">
            <a href="#about" className="block">Ku Saabsan</a>
            <a href="#why" className="block">Maxaa Naga Duway</a>
            <a href="#courses" className="block">Casharro</a>
            <a href="#schedule" className="block">Wakhtiga</a>
            <a href="#register" className="block bg-pink-600 text-white text-center py-2 rounded-lg">
              Is Diiwaangeli
            </a>
          </div>
        )}
      </nav>

      <div className="h-20" />

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-900 text-white">
        <div className="max-w-8xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold mb-6">
              Noqo Darawal Badbaado Leh <br />
              <span className="text-pink-200">ku baro Kalsooni & Xirfad </span>
            </h2>

            <p className="text-lg max-w-xl mb-8">
              Haldoor Driving School waa xarun tababar darawalnimo oo ku taalla
              Hargeysa, Somaliland, kuna takhasustay badbaado & xirfad.
            </p>

     <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  <a
    href="#register"
    className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-xl hover:scale-105 transition"
  >
    Is Diiwaangeli Hadda
    <ArrowRight className="w-5 h-5" />
  </a>

  <a
    href="https://wa.link/6l01tn"
    className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-xl hover:scale-105 transition"
  >
    WhatsApp
    <ArrowRight className="w-5 h-5" />
  </a>
</div>

          
          </div>

          <div className="flex justify-center">
            <img src={logo} alt="Haldoor" className="max-w-sm w-full" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl text-center text-pink-600 mb-12">
          Ku Saabsan Haldoor Driving School
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 rounded-3xl shadow-lg">
          
            <p>
              Waxaan nahay xarun tababar darawalnimo oo ujeedadeedu tahay
              soo saarista darawallo xirfad sare leh.
            </p>
          </div>

          <div className="bg-white border p-8 rounded-3xl shadow-md">
            <h4 className="text-xl font-bold mb-4 text-pink-600">Hadafkeenna</h4>
            <p>
              In la yareeyo shilalka waddooyinka lana abuuro darawallo badbaado leh.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="why" className="bg-slate-50 py-20 px-6">
        <h3 className="text-3xl text-center text-pink-600 mb-14">
          Maxaan uga duwanahay Schoolada Kale?
        </h3>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Macalimiin Khibrad Leh",
            "Qiimo Macquul ah",
            "Nidaam Baris Casri ah",
            "Tababar Gacanta ah",
            "Badbaado & Xeerar",
            "Kalsooni & Xirfad",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-2xl text-center shadow-md hover:scale-105 transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section id="courses" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl text-center text-pink-600 mb-14">
          Casharada Aan Bixino
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Wadista Baabuurta",
            "Shuruucda Liisanka",
            "Mechanic-ga Fudud",
            "Mishiinka Baabuurka",
            "Saliida Baabuurta",
            "Aqoon Guud oo Baabuurta",
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded-2xl shadow-sm bg-white">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section id="schedule" className="bg-slate-50 py-20 px-6">
        <h3 className="text-3xl text-center text-pink-600 mb-14">
          Wakhtiyada Aan Shaqayno
        </h3>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "Sabti – Wadista Baabuurta",
            "Axad – Wadista Baabuurta",
            "Isniin – Reverse",
            "Salaasa – Parking",
            "Arbaca – Shuruucda Wadooyinka",
            "Khamiista – Mechanic-ga Fudud",
          ].map((day, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-xl"
            >
              {day}
            </div>
          ))}
        </div>
      </section>

      {/* ================= REGISTER ================= */}
<section
  id="register"
  className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-primary to-purple-900"
>
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center font-extrabold mb-8">
      Is Diiwaangeli Online
    </h3>

    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20">
      {/* Background blur card */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none rounded-3xl" />

      {/* Iframe wrapper with max-height and scroll */}
      <div className="relative w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfsWfUizzzPp83_72bL5XKqs45bfoaFJZBQTJvNU60x10erYA/viewform?embedded=true"
          className="w-full h-[1200px] sm:h-[1200px] md:h-[1200px] lg:h-[1200px] rounded-3xl shadow-xl border border-white/20"
          frameBorder="0"

          title="Haldoor Registration Form"
        ></iframe>
      </div>
    </div>
  </div>
</section>



      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-10 text-center">
        © {new Date().getFullYear()} Haldoor Driving School — Xuquuqda Way Xafidan Tahay
      </footer>
    </div>
  );
}
