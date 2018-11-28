import React from 'react'
import holdingsData from '../../data/holdings'
import accountsData from '../../data/accounts'
import AccountsRow from './AccountsRow'

export default () => {
  return (
    <div className='table'>
        <h2>Accounts Table</h2>
            <AccountsRow
            holdingsData={holdingsData.Positions}
            accountsData = {accountsData.Accounts}
            />
      </div>
  )
}
