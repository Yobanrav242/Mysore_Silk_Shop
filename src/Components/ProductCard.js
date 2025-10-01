import React, { useState } from "react";
import pro1 from "../assets/product-1.jpg";
import pro2 from "../assets/product-2.jpg";
import pro3 from "../assets/product-3.jpg";
import pro4 from "../assets/product-4.jpg";

const ProductCard = () => {
  const products = [
    { image: pro1, title: "Festive Saree", price: "₹2999", description: "Elegant silk saree for festive occasions" },
    { image: pro2, title: "Bridal Collection", price: "₹4999", description: "Premium bridal saree for weddings" },
    { image: pro3, title: "New Arrival", price: "₹2599", description: "Trendy designer saree" },
    { image: pro4, title: "Party Wear Saree", price: "₹3499", description: "Stylish party wear saree for special occasions" },
  ];

  const handleBuyNow = (title, price, description) => {
    const message = `Hi! I'm interested in ${title}. Price: ${price}. ${description}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-4 bg-light">
      <div className="container">
        <div className="row g-3">
          {products.map((product, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
              <SingleCard {...product} onBuyNow={handleBuyNow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleCard = ({ image, title, price, description, onBuyNow }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
     id="collections"
      className="card shadow-sm rounded overflow-hidden position-relative w-100 d-flex flex-column"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "transform 0.3s, box-shadow 0.3s", transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}
    >
      {/* Image */}
      <div
        className="position-relative overflow-hidden"
        style={{
          aspectRatio: "3/4",
          maxHeight: "200px", // mobile-friendly height
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {isHovered && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "linear-gradient(135deg, hsl(355 65% 35% / 0.8), hsl(280 60% 50% / 0.8))" }}
          >
            <button
              className="btn btn-warning btn-sm d-flex align-items-center"
              onClick={() => onBuyNow(title, price, description)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v1H3.5A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h9A1.5 1.5 0 0 0 14 14.5v-9A1.5 1.5 0 0 0 12.5 4H10V3a2 2 0 0 0-2-2zM5 3a3 3 0 0 1 6 0v1H5V3z"/>
              </svg>
              Buy
            </button>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1, padding: "0.5rem" }}>
        <div>
          <h6 className="card-title mb-1">{title}</h6>
          <p className="card-text text-muted mb-1" style={{ fontSize: "0.8rem" }}>{description}</p>
        </div>
        <p className="h6 fw-bold mt-1 mb-0" style={{color:"hsl(280 60% 50%)"}}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
