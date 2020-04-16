import React from "react";

import styles from "../../styles/style.module.css";
import LeftPanel from '../common/LeftPanel'
import SearchButton from '../common/SearchButton'
import TopHeader from '../common/TopHeader'
import News from '../news/News'

const Dashboard = (props) => {
  return (
    <div className={styles.dashboardZeroState}>
      <TopHeader val={props.val} handleChange={props.handleChange} />

      <LeftPanel />

      <SearchButton handleClick={props.handleClick} />

      <p className={styles.newText}>{`Here are your search results for "${props.query}"`}</p>

      {!Object.keys(props.news).length ?
        null
        :
        <div className={styles.table}>
          <div className={styles.rectangle3}></div>  {/* white rectangle */}

          <div className={styles.articles}>ARTICLES</div>

          {/* Titles */}
          <div className={styles.publishedDate}>Published Date</div>
          <div className={styles.headline}>Headline</div>
          <div className={styles.summary}>Summary</div>
          <div className={styles.url}>URL</div>
          <div className={styles.source}>Source</div>

          {/* Table rows */}
          <div className={styles.complete}>
            <div className={styles.row}>
              {props.news.docs.map(
                (element, index) => <News element={element} key={element._id} cnt={index + 1} />)}
              <br />
            </div>
          </div>
        </div>
      }

    </div>
  );
}


export default Dashboard;
