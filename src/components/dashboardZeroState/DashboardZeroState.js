import React from "react";

import styles from "../../styles/style.module.css";
import LeftPanel from '../common/LeftPanel'
import TopHeader from '../common/TopHeader'
import SearchButton from "../common/SearchButton";

const DashboardZeroState = (props) => {
  return (
    <div className={styles.dashboardZeroState}>

      <TopHeader val={props.val} handleChange={props.handleChange} handleClick={props.handleClick} />

      <LeftPanel />

      <SearchButton handleClick={props.handleClick} />

      <div className={styles.treasure}></div>

      <p className={styles.blankText}>
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
