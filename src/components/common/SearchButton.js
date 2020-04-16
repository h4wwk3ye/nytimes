import React from 'react'
import styles from "../../styles/style.module.css";

export default function SearchButton(props) {
  return (
    <button className={styles.searchButton} onClick={props.handleClick}>
      Search
    </button>
  )
}
