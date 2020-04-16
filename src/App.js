import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DashboardZeroState from './components/dashboardZeroState/DashboardZeroState'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const baseURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`
  const [flag, setFlag] = useState(true)
  const [news, setNews] = useState({})
  const [val, setval] = useState('')
  const [query, setQuery] = useState('')

  function handleChange(event) {
    setval(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (!val.length) return setFlag(true) // display zero state again
    setFlag(false)
    setQuery(val)
    axios
      .get(`${baseURL}q=${val}&api-key=${process.env.REACT_APP_API_KEY}&page=0`)
      .then(res => setNews(res.data.response))
  }

  useEffect(() => {
    setFlag(true)
  }, [])

  return (
    flag ?
      <DashboardZeroState
        handleClick={handleClick}
        handleChange={handleChange}
        val={val}
      />
      :
      <Dashboard
        handleClick={handleClick}
        handleChange={handleChange}
        val={val}
        news={news}
        query={query}
      />
  );
}

export default App;
