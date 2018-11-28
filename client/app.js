import React from 'react'
import HoldingsTable from './components/HoldingsTable'
import AccountsTable from './components/AccountsTable'

const App = () => {
  return (
    <div id='container'>
      <HoldingsTable />
      <AccountsTable />
    </div>
  )
}

export default App
