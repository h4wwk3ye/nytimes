import React, { useState, useEffect, useRef } from "react";

import '../../app.css'
import styles from "../../styles/style.module.css";
import LeftPanel from '../common/LeftPanel'
import SearchButton from '../common/SearchButton'
import TopHeader from '../common/TopHeader'
import News from '../news/News'
import axios from 'axios'

// import { XAxis, YAxis, LineChart, Tooltip, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import ReactPaginate from 'react-paginate';
import { Line } from 'react-chartjs-2'

const Dashboard = (props) => {

  const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`
  const [news, setNews] = useState({})

  const [completed, setCompleted] = useState(false)

  const arr = useRef([])

  // Now for chart

  function date(d) {
    d = new Date(Date.parse(d))
    return d
  }

  function getMapValue(map, key) {
    return map.get(key) || 0
  }

  const store = new Map()
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Years',
        // fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        // borderCapStyle: 'butt',
        borderDash: [],
        // borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 10,
        pointHitRadius: 10,
        data: []
      }
    ]
  })

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
      // console.log(arr, news.docs, "inside")
      setCompleted(true)

      arr.current.forEach(element => {
        // console.log(element, "foreach")
        let year = date(element.pub_date).getFullYear()
        let val = getMapValue(store, year)
        store.set(year, val + 1)
      });

      let temp = { ...data };
      temp.labels = []  /// resetting previous render values
      temp.datasets[0].data = []
      console.log(store)
      for (const [key, value] of store.entries()) {
        console.log(key, value)
        setData()
        temp.labels.push(key)
        temp.datasets[0].data.push(value)
      }
      setData(temp)
      console.log(data)

    } else {
      setCompleted(false)

    }

  }, [news, props.pageCount])

  useEffect(() => {
    setCompleted(false)

  }, [])


  useEffect(() => {
    setCompleted(false)
    console.log(props.pageCount, props.val)
    // if (!val.length) return props.setFlag(true) // display zero state again
    axios
      .get(`${baseUrl}q=${props.query}&api-key=${process.env.REACT_APP_API_KEY}&page=${props.pageCount}`)
      .then(res => setNews(res.data.response))
  }, [props.pageCount, baseUrl, props.query])

  function handlePageClick(data) {
    const selected = data.selected
    // setNews({}) // emptying current news
    props.setpageCount(selected)
  }



  return (
    <div className={styles.dashboardZeroState}>
      <TopHeader val={props.val} handleChange={props.handleChange} handleClick={props.handleClick} />

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
        // className={styles.pagination}
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
        forcePage={props.pageCount}
      />
      {/* 
      {!data.length ? null :

        <div className='chart'>
          <ResponsiveContainer width="50%" height="30%" >
            <LineChart
              data={data}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      } */}


      <div className='chart'>
        <Line data={data} redraw />
      </div>


    </div>

  );
}


export default Dashboard;
