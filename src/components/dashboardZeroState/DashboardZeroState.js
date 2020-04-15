import React from "react";
import PropTypes from "prop-types";

import "./dashboardZeroState.css";

const DashboardZeroState = (props) => {

  return (
    <div className="dashboardZeroState">

      <div className="topHeader">
        <div className="searchBar">
          <input className="searchBarInput" placeholder='     Search' />
        </div>
      </div>

      <div className="leftMenu">
        <div className="rectangle1"></div>
        <div className="dashboard">Dashboard</div>
        <div className="menu">
          <div className="contents">
            <div className="rectangle2">
              <div className="dashboard">Dashboard</div>
            </div>
            <div className="articles">Articles</div>
            <div className="analytics">Analytics</div>
            <div className="messages">Messages<br /></div>
            <div className="calendar">Calendar<br /></div>
          </div>
        </div>
      </div>

      <div className="newYorkTimesLogo"></div>

      <button className="searchButton">
        Search
      </button>


      <div className="treasure"></div>

      <p className="blankText">
        Search for breaking news from across the world, across the times.
      </p>
    </div>
  );
}


DashboardZeroState.propTypes = {

}

DashboardZeroState.defaultProps = {

}


export default DashboardZeroState;
