import React, { useState, useEffect } from 'react';
import DashboardZeroState from './components/dashboardZeroState/DashboardZeroState'
import Dashboard from './components/dashboard/Dashboard'

function App() {

  const [flag, setFlag] = useState(true)

  const [val, setval] = useState('')
  const [query, setQuery] = useState('')

  function handleChange(event) {
    setval(event.target.value)
  }

  const handleClick = (event) => {
    // event.preventDefault()
    if (!val.length) return setFlag(true) // display zero state again
    setFlag(false)
    setQuery(val)
    console.log(val, query, "here", flag)
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
        flag={flag}
        setFlag={setFlag}
        handleClick={handleClick}
        handleChange={handleChange}
        val={val}
        setval={setval}
        setQuery={setQuery}
        query={query}
      />
  );
}

export default App;
