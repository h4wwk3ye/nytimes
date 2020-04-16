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
        <div>
          <div className={styles.tbody}>
            <div>
              <div className={styles.articles}>Articles</div>
            </div>
            <div className={styles.row}>
              <span className={styles.cellDate}>Published Date</span>
              <span className={styles.cellHeadline}>Headline</span>
              <span className={styles.cellSummary}>Summary</span>
              <span className={styles.cellUrl}>Url</span>
              <span className={styles.cellSource}>Source</span>
            </div>


            {props.news.docs.map((e, i) => <News news={e} idx={i + 1} />)}

          </div>


        </div>
      }

    </div>

  );
}


export default Dashboard;
