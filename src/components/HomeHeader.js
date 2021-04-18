import React from "react";

const HomeHeader = () => {
  return (
    <div className="home__header">
      <img
        src="/image/vanguard-logo-white_2.png"
        alt=""
        className="vangaurd__logo"
      />
      <div className="bar">
        <div className="bar__first">
          <div className="bar__first--select">Account</div>
          <div className="bar__first--select">Grant</div>
          <div className="bar__first--select">Contribution</div>
          <div className="bar__first--select">Reports</div>
          <div className="bar__second">Log out</div>
        </div>
        <div className="welcome">
          Welcome
          <span style={{ marginLeft: 5, color: "white", fontSize: 15 }}>
            Elizabeth Stanton
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
