import React from 'react'
import styles from '../../styles/style.module.css'

export default function News(props) {
  let d = new Date(Date.parse(props.element.pub_date))
  let dt = d.getDate()
  let m = d.getMonth()
  let y = d.getFullYear()
  const date = `${dt}-${m}-${y}`

  return (
    <div >
      <div className={styles.cell}>{date}</div>
      <div className={styles.cell}>{props.element.headline.main}</div>
    </div>
  )
}
