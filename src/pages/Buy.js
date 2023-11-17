import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import carsData from "../data.json";
import "../style/Buy.css";

function Buy() {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleSearch = (searchTerm) => {
    const filtered = carsData.filter(
      (car) =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
      // Kan läggas fler vilkor här för att söka i andra egenskaper...
    );
    setFilteredCars(filtered);
  };

  return (
    <>
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
            <h1 className="header">Köp Bilar</h1>
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

        <div className="search">
          <div className="search-submit">
            <Search onSearch={handleSearch} />
          </div>
        </div>
        {/* Showroom-sektion */}
        <section className="showroom">
          <h2 className="showroom-header">AutoMobile Showroom</h2>
          <p>{filteredCars.length} bilar hittades</p>{" "}
          {/* Visa antal hittade bilar */}
          <div className="car-list">
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => (
                <div key={index} className="car-card">
                  <img src={car.image} alt={car.model} className="car-image" />
                  <div className="car-details">
                    <h3>
                      {car.brand} - {car.model}
                    </h3>
                    <p>{car.year}</p>
                    <p>{car.mileage}</p>
                    <p>{car.color}</p>
                    <p>{car.engineSize}</p>
                    <p>{car.price}</p>
                    {/* Andra detaljer efter behov */}
                  </div>
                </div>
              ))
            ) : (
              <p>Inga bilar hittades med din sökterm.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
export default Buy;
