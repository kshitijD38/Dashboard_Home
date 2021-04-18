import React from "react";

const CardB1 = () => {
  return (
    <div className="cards card1">
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/carousel_11.jpg")`,
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
              src="/image/highlight-refugee.png"
              alt=""
            />
            <div className="card__info--title">Refugee</div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <img style={{ height: 8 }} src="/image/three-icons.png" alt="" />
          </div>
        </div>
        <div className="card__info--heading">
          <div className="gold">Gold</div>
          <div style={{ fontSize: 15, color: "#ffffff", marginBottom: 5 }}>
            Refugee center online
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
            <span style={{ color: "#ffffff", marginRight: 30 }}>2013</span>
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
            The Refugee Center Online (RCO) helps refugees and migrants build
            new lives using technology. RCO's interactive, multi-language
            website provides educational opportunities and general information
            about American society, and connects refugees with services,
            programs, and organizations in their new communities.
          </p>
        </div>
        <div style={{ fontSize: 10, marginLeft: 17, marginTop: 20 }}>
          <strong>Cause Area </strong>
          <p>
            Ethnic/Immigrant Services{" "}
            <span style={{ color: "rgb(100, 188, 218)" }}>P84</span> <br />
            Public, Society Benefit - Multipurpose and Other N.E.C.{" "}
            <span style={{ color: "rgb(100, 188, 218)" }}>W99</span>
          </p>
        </div>
        <div style={{ fontSize: 10, marginLeft: 17, marginTop: 20 }}>
          <strong>Main Address </strong>
          <p>1320 SE 122nd Ave Portland, OR 97233 USA</p>
        </div>
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
  );
};

export default CardB1;
