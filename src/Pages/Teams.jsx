import React from "react";
import Team1 from "../assets/images/Devendra_Tiwari.jpg";
import Team2 from "../assets/images/Abhijeet_Yenkar.jpg";
import Team3 from "../assets/images/leena_mam.png";
import Team4 from "../assets/images/Shivaji_Dongre.jpg";

function Teams() {
  return (
    <>
      <section id="team" class="team">
        <div class="container">
          <div class="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img src={Team1} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Mr. Devendra Tiwari </h4>
                  <span>Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img src={Team2} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Mr. Abhijeet S. Yenkar</h4>
                  <span>Co-Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img src={Team3} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Mrs. Leena More- Deshmukh</h4>
                  <span> CO-Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img src={Team4} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
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
