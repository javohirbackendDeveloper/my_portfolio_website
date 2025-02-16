import React from "react";
import { services } from "./dummyServices";
import { ChevronRight } from "lucide-react";
import "./Service.css";

function Service() {
  return (
    <div id="service" className="service">
      <div className="services_title">
        <h1>My Services</h1>
      </div>
      <div className="services_container">
        {services.map((service) => (
          <div key={service?.ser_no} className="services_format">
            <h3>{service?.ser_no}</h3>
            <h2>{service?.ser_name}</h2>
            <div className="service_read_more">
              <p>Read More</p>
              <ChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
