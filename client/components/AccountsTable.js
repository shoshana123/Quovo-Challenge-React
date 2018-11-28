import React from 'react'
import holdingsData from '../../data/holdings'
import accountsData from '../../data/accounts'
import AccountsRow from './AccountsRow'

const AccountsTable = () => {

  // Determine total value to use for Percent of Total
  const total = holdingsData.Positions.reduce((accum,position) => accum + position.quantity * position.price,0)

  return (
    <div>
        <h2>Accounts Table</h2>
            <AccountsRow
              total={total}
              accountsData = {accountsData.Accounts}
            />
      </div>
  )
}

export default AccountsTable
