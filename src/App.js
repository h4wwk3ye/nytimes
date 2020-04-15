import React, { useState } from 'react';

import DashboardZeroState from './components/dashboardZeroState/DashboardZeroState'

function App() {
  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    if (!flag) setFlag(true)
  }

  return (
    <DashboardZeroState handleClick={handleClick} />
  );
}

export default App;
