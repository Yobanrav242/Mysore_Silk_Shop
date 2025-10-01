import { Truck, Shield, Heart } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep across India",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "100% authentic Mysore silk with quality guarantee",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Dedicated support team for your complete satisfaction",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We are committed to providing the finest silk sarees with exceptional service
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="col-md-4">
                <div className="card h-100 text-center shadow-sm border-0 p-4">
                  <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f0e6f6, #d6c1f2)"
                  }}>
                    <Icon size={36} style={{color:"hsl(280 60% 50%)"}} />
                  </div>
                  <h5 className="card-title fw-bold mb-2">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
