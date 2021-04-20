import React from "react";

const CardB2 = () => {
  return (
    <div className="cards card2">
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/card-44.png")`,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <div
          style={{
            marginTop: 15,
            display: "flex",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ display: "flex", marginRight: 100 }}>
            <img
              style={{ height: 20 }}
              src="/image/highlight-education.png"
              alt=""
            />
            <div style={{ color: "#fed893" }} className="card__info--title">
              Education
            </div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <img style={{ height: 8 }} src="/image/three-icons.png" alt="" />
          </div>
        </div>
        <div className="card__info--heading">
          <div className="gold">Gold</div>
          <div style={{ fontSize: 15, color: "#ffffff", marginBottom: 5 }}>
            Uma Education ,Inc.
          </div>
          <div
            style={{
              fontSize: 8,
              color: "#4e4e4e",
              marginBottom: 5,
              fontWeight: 600,
            }}
          >
            Rulling Year:{" "}
            <span style={{ color: "#ffffff", marginRight: 30 }}>1994</span>
            Place: <span style={{ color: "#ffffff" }}>US</span>{" "}
          </div>
          <div></div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="so" style={{ backgroundColor: "#f3f3f3" }}>
          <button
            onClick={(e) => {
              if (e.target.style.backgroundColor === "white") {
                e.target.style.backgroundColor = "#f3f3f3";
              } else {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            Summary
          </button>
        </div>
        <div className="so">
          <button
            onClick={(e) => {
              if (e.target.style.backgroundColor === "white") {
                e.target.style.backgroundColor = "#f3f3f3";
              } else {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            Operations
          </button>
        </div>
      </div>
      <div className="card__information" style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <strong>Mission </strong>
          <p>
            Ultimate Medical Academy is a dynamic educational institution
            committed to equipping and empowering students to excel in
            healthcare careers. We strive to provide a learning experience that
            maximizes value for our students in a professional, supportive and
            ethical environment.
          </p>
        </div>
        <div>
          <p className="more">
            <a style={{ color: "#6ec9d9" }} href="#top">
              More +
            </a>
          </p>
        </div>
      </div>
      <div
        style={{
          alignContent: "flex-end",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="lb" style={{ marginTop: 73 }}>
          <button
            style={{
              color: "white",
              backgroundColor: "rgb(100, 188, 218)",
              borderBottomLeftRadius: 10,
            }}
          >
            Recommend Grant
          </button>
          <button style={{ borderBottomRightRadius: 10 }}>Visit Website</button>
        </div>
      </div>
    </div>
  );
};

export default CardB2;
