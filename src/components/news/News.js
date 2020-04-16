import React from 'react'
import styles from '../../styles/style.module.css'


export default function News(props) {

  function date(d) {
    d = new Date(Date.parse(d))
    let dt = d.getDate()
    let m = d.getMonth()
    let y = d.getFullYear()
    const date = `${dt}-${m}-${y}`
    return date
  }
  if (props.idx === 1) {
    return (
      <div >
        <div className={styles.row1}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 2) {
    return (
      <div >
        <div className={styles.row2}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 3) {
    return (
      <div >
        <div className={styles.row3}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 4) {
    return (
      <div >
        <div className={styles.row4}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 5) {
    return (
      <div >
        <div className={styles.row5}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 6) {
    return (
      <div >
        <div className={styles.row6}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 7) {
    return (
      <div >
        <div className={styles.row7}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 8) {
    return (
      <div >
        <div className={styles.row8}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 9) {
    return (
      <div >
        <div className={styles.row9}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else if (props.idx === 10) {
    return (
      <div >
        <div className={styles.row10}>
          <div className={styles.cellDate}>{date(props.news.pub_date)}</div>
          <div className={styles.cellHeadline}>{props.news.headline.main}</div>
          <div className={styles.cellSummary}>{props.news.abstract}</div>
          <a href={props.news.web_url} className={styles.cellUrl}>{props.news.web_url}</a>
          <div className={styles.cellSource}>{props.news.source}</div>
        </div>
      </div>
    )
  } else {
    return null
  }


}

