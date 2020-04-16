import React, { useState, useEffect, useRef } from "react";

import '../../app.css'
import styles from "../../styles/style.module.css";
import LeftPanel from '../common/LeftPanel'
import SearchButton from '../common/SearchButton'
import TopHeader from '../common/TopHeader'
import News from '../news/News'
import axios from 'axios'

import ReactPaginate from 'react-paginate';

const Dashboard = (props) => {
  const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`
  const [news, setNews] = useState({})
  const [pageCount, setpageCount] = useState(0)
  const [completed, setCompleted] = useState(false)
  const arr = useRef([])


  function cmp(a, b) {
    a = new Date(Date.parse(a.pub_date)).getTime()
    b = new Date(Date.parse(b.pub_date)).getTime()
    console.log(a, b)
    if (a > b) return -1;
    return 1;
  }

  function filt(a) {
    a = new Date(Date.parse(a.pub_date)).getTime()
    let b = new Date()
    b.setFullYear(b.getFullYear() - 10) // 10 years ago time stamp
    b = b.getTime()
    return a >= b
  }

  useEffect(() => {
    if (Object.keys(news).length) {
      arr.current = [...news.docs]
      // console.log(arr.current.length)
      arr.current = arr.current.filter(filt)
      // console.log(arr.current.length)
      arr.current.sort(cmp) // sorting by date
      console.log(arr, news.docs)
      setCompleted(true)
    } else {
      setCompleted(false)
    }

  }, [news])

  useEffect(() => {
    setCompleted(false)
  }, [])


  useEffect(() => {
    console.log(pageCount, props.val)
    // if (!val.length) return props.setFlag(true) // display zero state again
    axios
      .get(`${baseUrl}q=${props.val}&api-key=${process.env.REACT_APP_API_KEY}&page=${pageCount}`)
      .then(res => setNews(res.data.response))
  }, [pageCount, props.val, baseUrl])

  function handlePageClick(data) {
    const selected = data.selected
    setNews({}) // emptying current news
    setpageCount(selected)
  }

  return (
    <div className={styles.dashboardZeroState}>
      <TopHeader val={props.val} handleChange={props.handleChange} />

      <LeftPanel />

      <SearchButton handleClick={props.handleClick} />

      {!completed ?
        <div className={styles.newText}>Loading...</div>
        :
        <div>
          <p className={styles.newText}>{`Here are your search results for "${props.query}"`}</p>
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
            {arr.current.map((e, i) => <News news={e} idx={i + 1} key={i} />)}

          </div>
        </div>
      }
      <ReactPaginate
        className={styles.pagination}
        nextLabel={'>>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={10}
        // marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        disableInitialCallback={false}
      />

    </div>

  );
}


export default Dashboard;
