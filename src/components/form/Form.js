import React from "react";
import "./form.css";
import banner from "../../assets/banner.png";
const Form = () => {
  console.log(banner);
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container-col-1">
          <div className="main__container-col-1-education">
            <h1 className="education" style={{ margin: "20px 0px" }}>
              Education{" "}
              <span style={{ color: "red", fontSize: "50px" }}>*</span>
            </h1>
            <div className="utils">
              <p>
                Year of passing{" "}
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </p>
              <input type="text" className="input" placeholder="2024" />
              <span className="relative">0/100</span>
            </div>
            <div className="utils">
              <p>
                Region <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </p>
              <input type="text" className="input" placeholder="Jalandhar" />
              <span className="relative">0/100</span>
            </div>
            <div className="utils">
              <p>
                College Name{" "}
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </p>
              <input
                type="text"
                className="input"
                placeholder="NIT Jalandhar"
              />
              <span className="relative">0/100</span>
            </div>
            <div className="utils_last">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <p>
                  Describe College{" "}
                  <span style={{ color: "red", fontSize: "20px" }}>*</span>
                </p>
                <p style={{ color: "#0370DD" }}>Need help ?</p>
              </div>
              <textarea
                rows="5"
                type="text"
                className="textarea"
                placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...."
              />
              <span className="area_relative">0/200</span>
            </div>
            <button className="generate">Generate</button>
          </div>
        </div>
        <div className="border_vertical"></div>
        <div className="main__container-col-2">
          <div className="banner-container">
            <div className="image-container">
              <img
                style={{ width: "100%", height: "100%" }}
                src={banner}
                alt=""
              />
            </div>
            <p>
              Your are just a few inputs away from your
              <br />
              awsome SOP ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
