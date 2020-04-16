import React from "react";

import styles from "../../styles/style.module.css";

const LeftPanel = () => {
  return (
    <div>
      <div className={styles.leftMenu}>
        <div className={styles.rectangle1}></div>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.menu}>
          <div className={styles.contents}>
            <div className={styles.rectangle2}>
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.articles}>Articles</div>
            <div className={styles.analytics}>Analytics</div>
            <div className={styles.messages}>Messages<br /></div>
            <div className={styles.calendar}>Calendar<br /></div>
          </div>
        </div>
      </div>

      <div className={styles.newYorkTimesLogo}></div>
    </div>
  )
}

export default LeftPanel