import React, { useState } from "react";
import Data from "../Data.json";
const Services = () => {
  const [activeTab, setActiveTab] = useState("Informationtechnology");

  const filteredData = Data.filter((item) => item.service_type === activeTab);

  return (
    <div className="container ">
      <div class="section-title">
        <h2>Services</h2>
        <p>Check our Services</p>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="nav nav-tabs" id="myTabs">
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "Informationtechnology" ? "active" : ""
              }`}
              style={{
                backgroundColor:
                  activeTab === "Informationtechnology" ? "#ffc451" : "",
              }}
              onClick={() => setActiveTab("Informationtechnology")}
            >
              Information Technology
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "civil" ? "active" : ""}`}
              style={{
                backgroundColor: activeTab === "civil" ? "#ffc451" : "",
              }}
              onClick={() => setActiveTab("civil")}
            >
              Civil Technology
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "Informationtechnology" ? "show active" : ""
          }`}
          id="it-tab"
        >
          <div className="row">
            {filteredData.map((service) => {
              return (
                <div className="col-md-4" key={service.id}>
                  <div
                    className="card"
                    style={{ margin: "10px", backgroundColor: "lightgray" }}
                  >
                    <div className="card-body">{service.service_name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "civil" ? "show active" : ""
          }`}
          id="civil-tab"
        >
          <div className="row">
            {filteredData.map((service) => {
              return (
                <div className="col-md-4" key={service.id}>
                  <div
                    className="card"
                    style={{ margin: "10px", backgroundColor: "lightgray" }}
                  >
                    <div className="card-body">{service.service_name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
<div></div>;
