import React from "react";
import Aboutimg from "../assets/images/about.jpg";
import visionimg from "../assets/images/portfolio-7.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>About</h2>
              <p>About Us</p>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <img src={Aboutimg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <p className="text-justify">
                S.M.A.R.T. Hub is a fastest growing organization in creative
                industries. We are holding market of digital coaching basis
                organization but we also provide internship in Interior &
                Programming fields. We all know that teacher/instructor/tutor
                are the future designer of student. Also we know that there are
                so many people have talent but still resting in house.
                S.M.A.R.T. Hub is a platform for those who have talent to teach
                but don't have enough fund or support to start. S.M.A.R.T. Hub
                provide it to give best education by unique techniques and make
                our country proud. We are have excellent and experienced
                instructors to teach how to create good ideas for every new
                client. We teach for students great future in affordable fees.
                We as like student never get stuck in any related work. We are
                having masters in market for CAD (Mechanical, Electrical, Civil,
                Interior and Architecture), Sketchup, 3Ds Max, V-Ray, Revit,
                Catia, Pro-E, E-Tabs, Analysis. In the Programming field we have
                best in industries instructor with C, C++, Java, .Net, Python,
                Networking and all programming courses. We are in your service,
                just ask your question and we'll be right near you. We are nine
                steps towards you; you just need to take a single and right step
                to join us. Then, what are you waiting for! Make Your Own
                S.M.A.R.T. Move.
              </p>
            </div>
          </div>
          <div id="vision" className="vision">
            <div className="row">
              <div className="section-title">
                <h2>Vision & Mission</h2>
                <p>Why Choose Us</p>
              </div>

              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="icon-box mt-5 mt-lg-0">
                  <i class="bx bx-show"></i>
                  <h4>Vision</h4>
                  <p>
                    S.M.A.R.T. Hub's vision is to be the premier company of
                    academic excellence in the country, in the field of Art,
                    Design and visualization.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" id="mission">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="icon-box mt-5">
                  <i className="bx bx-bulb"></i>
                  <h4>Mission</h4>
                  <p className="text-justify">
                    S.M.A.R.T. hub's mision is to creatively impact ecosystems
                    and build new ecosystems that produce creative competencies
                    ahead of the curve. Towards this mission, the institution
                    entrusts itself with the role of producing capabilities
                    through its professional, vocational and research programs.
                    This mission entails a deep understanding of the complex
                    nature of the connected worlds that we inhabit and includes:
                  </p>
                  <ul className="icon-box1">
                    <li>
                      <p>
                        <i className="bx bx-chevron-right"></i>Creating better
                        futures for all
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bx bx-chevron-right"></i> Enabling
                        pervasive creative competence with the confidence to
                        tackle serious and meaningful challenges.
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <i className="bx bx-chevron-right"></i> Empowering
                        people to drive transformational outcomes
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bx bx-chevron-right"></i> Opening new
                        vistas – sensing, solving and shaping transformational
                        opportunities
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bx bx-chevron-right"></i>Focusing on
                        outcomes rooted in India/emerging worlds.
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="bx bx-chevron-right"></i> Fostering and
                        nurturing vibrant autonomous ecosystems through open
                        co-creating platforms.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
