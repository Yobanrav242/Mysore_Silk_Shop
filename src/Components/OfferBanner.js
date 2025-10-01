import React, { useEffect, useState } from "react";
import "../styles/OfferBanner.css"

const offers = [
  {
    title: "Festive Sale",
    description: "Get 30% off on all silk sarees",
    bgColor: "bg-primary text-white",
  },
  {
    title: "Wedding Collection",
    description: "Premium bridal sarees at special prices",
    bgColor: "bg-warning text-dark",
  },
  {
    title: "New Arrivals",
    description: "Exclusive designs now available",
    bgColor: "bg-success text-white",
  },
];

const OfferBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  return (
    <section id="offers" className="py-5 bg-light">
      <div className="container-fluid px-5">
        <div id="offerCarousel" className="carousel slide position-relative">
          {/* Slides */}
          <div className="carousel-inner rounded shadow ">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`carousel-item text-center py-5 ${offer.bgColor} ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ minHeight: "200px" }}
              >
                <h3 className="display-5 fw-bold mb-3">{offer.title}</h3>
                <p className="fs-5">{offer.description}</p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev d-none d-md-block"
            type="button"
            onClick={goToPrevious}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none d-md-block"
            type="button"
            onClick={goToNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Styled Indicators */}
          <div className="d-flex justify-content-center  gap-3 position">
            {offers.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? "25px" : "15px",
                  height: "10px",
                  borderRadius: "20%",
                  display: "inline-block",
                  cursor: "pointer",
                  backgroundColor: index === currentIndex ? "#000000" : "#dee2e6",
                  transition: "all 0.3s",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
