import React from "react";

const CardB3 = () => {
  return (
    <div className="cards card3">
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/card-5.png")`,
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
            National Humane Education Soc.
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
            <span style={{ color: "#ffffff", marginRight: 30 }}>1996</span>
            Place: <span style={{ color: "#ffffff" }}>US</span>{" "}
          </div>
          <div></div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="so" style={{ backgroundColor: "#f3f3f3" }}>
          Summary
        </div>
        <div className="so">Operations</div>
      </div>
      <div className="card__information" style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <strong>Mission </strong>
          <p>
            The mission of The National Humane Education Society is "to foster a
            sentiment of kindness to animals in children and adults ..."
          </p>
        </div>
        <div>
          <p className="more">More +</p>
        </div>
        <div
          style={{
            alignContent: "flex-end",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="lb"
            style={{
              color: "white",
              backgroundColor: "rgb(100, 188, 218)",
            }}
          >
            Recommend Grant
          </div>
          <div className="lb">Visit Website</div>
        </div>
      </div>
    </div>
  );
};

export default CardB3;
