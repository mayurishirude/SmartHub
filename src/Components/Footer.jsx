import React from "react";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  <h3>
                    S.M.A.R.T. Hub<span>.</span>
                  </h3>
                  <p>
                    S.M.A.R.T. Hub is a fastest growing organization in creative
                    industries. We are holding market of engineering software
                    coaching basis organization and also provide internships in
                    construction infrastructure & Information Technology fields.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" className="remove-un">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">IT Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Civil Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Gallery</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-address">
                <h4>Address</h4>
                <p>
                  <i className="bx bx-location-plus"></i>
                  Head Office: Suit No. 5, 2nd Floor, Jagdish Sankul, Thatte
                  Nagar, KBT Circle, Gangapur Road, Nashik - 422 005. MH, IN.
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/smart.hub.9279"
                    className="facebook"
                    target="_blanc"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/your_smart_hub/"
                    className="instagram"
                    target="_blanc"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/smart-hub"
                    className="linkedin"
                    target="_blanc"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="mailto:yoursmarthub@gmail.com"
                    target="_blanc"
                    className="google-plus"
                  >
                    <i className="bx bx-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>SMART Hub 2023.</span>
            </strong>
            All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
