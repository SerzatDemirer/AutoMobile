import React from "react";
import "./App.css"; // Se till att dina stilar är korrekt importerade.
import carlogo from "./CarLogo.png";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      {/* Navigationsfält */}
      <nav className="navigation">
        <div className="logo">
          <img src={carlogo} alt="AutoMobile logotyp" />
        </div>
        <div className="nav-items">
          <a href="/buy">Köpa bil</a>
          <a href="/sell">Sälja bil</a>
          <a href="/stores">Våra butiker</a>
          <a href="/contact">Kontakt</a>
          <a href="/services">Lediga tjänster</a>
        </div>
      </nav>

      {/* Huvudbanner */}
      <header className="hero-banner">
        <h1>Störst i Sverige på begagnade bilar!</h1>
        <div className="search">
          <Search />
        </div>
        <div className="hero-buttons">
          <button className="btn sell-car">Värdera/Sälja bil</button>
          <button className="btn buy-car">Köpa bil</button>
        </div>
      </header>

      {/* Funktioner */}
      <section className="features">
        <div className="feature">
          <span>Över 5000 begagnade bilar i lager</span>
        </div>
        <div className="feature">
          <span>Hemleverans inom 24h</span>
        </div>
        <div className="feature">
          <span>Personbil</span>
          <span>Transportbil</span>
        </div>
      </section>

      {/* Aktuella erbjudanden */}
      <section className="current-offers">
        <h2>Just nu på Riddermark bil</h2>
        {/* Komponenter för erbjudanden skulle gå här */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>Ring oss vi svarar mellan 07-24</span>
      </footer>
    </div>
  );
}

export default App;
