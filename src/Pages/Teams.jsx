import React from "react";
import Team1 from "../assets/images/Devendra_Tiwari.jpg";
import Team2 from "../assets/images/Abhijeet_Yenkar.jpg";
import Team3 from "../assets/images/leena_mam.png";
import Team4 from "../assets/images/Shivaji_Dongre.jpg";

function Teams() {
  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={Team1} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Mr. Devendra Tiwari </h4>
                  <span>Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={Team2} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Mr. Abhijeet S. Yenkar</h4>
                  <span>Co-Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={Team3} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Mrs. Leena More- Deshmukh</h4>
                  <span> CO-Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={Team4} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Mr. Shivaji Dongre</h4>
                  <span> Director(Forma Design Studio)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
