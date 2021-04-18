import React from "react";

const GrantRecommend = () => {
  return (
    <div className="grant__recommend">
      <div style={{ fontSize: 20, marginRight: 200 }}>Grant Recommendation</div>
      <div style={{ marginLeft: 200 }} className="grant__button">
        {/* <div> */}
        <button>
          <img src="/image/filter.png" alt="" />
          Filter by category
        </button>
        {/* </div>
        <div> */}
        <button>
          <img src="/image/search.png" alt="" />
          Find a charity
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default GrantRecommend;
