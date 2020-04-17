import React from 'react'
import styles from "../../styles/style.module.css";

const TopHeader = (props) => {
  return (
    <div>
      <div className={styles.topHeader}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchBarInput}
            value={props.val}
            placeholder='     Search'
            onChange={props.handleChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                props.handleClick()
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader