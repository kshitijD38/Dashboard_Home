import "./App.css";
import CardA3 from "./components/CardA3";
import CardA1 from "./components/CardA1";
import CardA2 from "./components/CardA2";
import CardB1 from "./components/CardB1";
import CardB2 from "./components/CardB2";
import CardB3 from "./components/CardB3";
import GrantRecommend from "./components/GrantRecommend";
import HomeHeader from "./components/HomeHeader";
import HomeRest from "./components/HomeRest";
import InvestmentOptions from "./components/InvestmentOptions";
import Rectanle from "./components/Rectanle";

function App() {
  return (
    <div className="App">
      <div className="Dashboard__Home">
        <div
          style={{
            backgroundImage: `url("/image/malaysia-floods-l.jpg")`,
          }}
          className="Mask-Copy"
        >
          <HomeHeader />
          <Rectanle />
          <HomeRest />
          <InvestmentOptions />
          <GrantRecommend />
          <div className="card__container">
            <div className="card__container__1">
              <CardA1 />
              <CardA2 />
              <CardA3 />
            </div>
            <div style={{ marginTop: 50 }} className="card__container__2">
              <CardB1 />
              <CardB2 />
              <CardB3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
