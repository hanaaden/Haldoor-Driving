import { useState } from "react";
import { Cloud, Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800 overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Haldoor Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
            <h1 className="text-lg sm:text-xl font-bold text-primary">Haldoor Driving School</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-slate-600 hover:text-primary transition">Casharada</a>
            <a href="#schedule" className="text-slate-600 hover:text-primary transition">Wakhtiyada</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary transition">Qiimaha</a>
            <a href="#register" className="bg-primary text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-green-600 hover:scale-105 transition shadow-md">
              Is Diiwaangeli
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4 sm:px-6 transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-slate-600 hover:text-primary transition">Casharada</a>
              <a href="#schedule" className="text-slate-600 hover:text-primary transition">Wakhtiyada</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary transition">Qiimaha</a>
              <a href="#register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-center">
                Is Diiwaangeli
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20" />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-primary to-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-36 grid md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row">
          {/* Text */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Ku Baro Wadista Baabuurta <br />
              <span className="text-purple-200">Si Xirfad Leh</span>
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-full sm:max-w-xl">
              Haldoor Driving School waxay bixisaa tababar dhameystiran oo ku saabsan wadista baabuurta, shuruucda liisanka, iyo aqoon farsamo oo muhiim ah.
            </p>
            <a href="#register" className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:scale-105 transition shadow-xl group">
              Is Diiwaangeli Hadda
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Logo Card */}
          <div className="flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition" />
              <div className="relative bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-3xl shadow-xl hover:scale-105 transition border border-white/20">
                <img src={logo} alt="Haldoor" className="w-full max-w-xs sm:max-w-sm h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES / COURSES ================= */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-primary mb-12 sm:mb-16">Casharada Aan Bixino</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            "Barashada wadista baabuurta",
            "Barashada shuruucda liisanka",
            "Barashada mechanic-ga fudud",
            "Barashada mishiinka baabuurka",
            "Barashada saliida baabuurta",
            "Aqoon guud oo ku saabsan baabuurta",
          ].map((item, index) => (
            <div key={index} className="group relative border rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition bg-white">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg sm:text-xl group-hover:scale-110 transition">
                {index + 1}
              </div>
              <p className="font-semibold text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section id="schedule" className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-primary mb-10 sm:mb-14">Wakhtiyada Aan Shaqayno</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
          {[
            "Sabti – Wado",
            "Axad – Wado",
            "Isniin – Parking",
            "Salaasa – Parking",
            "Arbaca – Shuruucda & Calaamadaha Wadooyinka",
            "Mechanic-ga Fudud",
          ].map((day, i) => (
            <div key={i} className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm hover:shadow-md transition flex justify-between">
              <span>{day}</span>
              <span className="text-primary font-semibold">30 min</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-primary mb-12 sm:mb-16">Qiimaha</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {[
            { title: "Bishii", price: "$80" },
            { title: "15 Cisho", price: "$40" },
          ].map((plan, i) => (
            <div key={i} className="border rounded-3xl p-6 sm:p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{plan.title}</h4>
              <p className="text-4xl sm:text-5xl font-extrabold text-primary">{plan.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REGISTER ================= */}
      <section id="register" className="relative bg-gradient-to-br from-primary to-purple-900 text-white py-16 sm:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="max-w-xl mx-auto relative">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">Is Diiwaangeli Online</h3>
          <form className="bg-white/10 backdrop-blur-lg text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 space-y-4 sm:space-y-5">
            <input type="text" placeholder="Magacaaga" className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-primary backdrop-blur-sm" />
            <input type="tel" placeholder="Telefoonka" className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-primary backdrop-blur-sm" />
            <select className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg text-white">
              <option>Dooro Casharka</option>
              <option>Wadista Baabuurta</option>
              <option>Shuruucda Liisanka</option>
              <option>Mechanic-ga Fudud</option>
            </select>
            <button className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg hover:bg-green-600 hover:scale-105 transition shadow-xl flex items-center justify-center gap-2">
              Diiwaangeli
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm sm:text-base">
          © {new Date().getFullYear()} Haldoor Driving School — Xuquuqda Way Xafidan Tahay
        </div>
      </footer>
    </div>
  );
}
