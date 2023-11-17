import React from "react";
import "./style/App.css";
import Search from "./components/Search";
import { Link } from "react-router-dom"; // Importera Link från react-router-dom

function App() {
  return (
    <div className="app">
      {/* Navigationsfält */}
      <nav className="navigation">
        <div className="logo">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0bf0ad171269853.646c45ee511bc.jpg"
            alt="AutoMobile logotyp"
          />
        </div>
        <div className="header-container">
          <h1 className="header">AutoMobile</h1>
        </div>
        <div className="nav-items">
          <Link to="/">Hem</Link>
          <Link to="/buy">Köpa bil</Link>
          <Link to="/sell">Sälja bil</Link>
          <Link to="/stores">Våra butiker</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/services">Service tjänster</Link>
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
        </div>
      </section>

      {/* Aktuella erbjudanden */}

      {/* Footer */}
      <footer className="footer">
        <span>Ring oss vi svarar mellan 07-24</span>
      </footer>
    </div>
  );
}

export default App;
