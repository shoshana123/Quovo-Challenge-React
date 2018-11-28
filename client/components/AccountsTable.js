import React from 'react'
import holdingsData from '../../data/holdings'
import accountsData from '../../data/accounts'
import AccountsRow from './AccountsRow'

export default () => {
  const total = holdingsData.Positions.reduce((accum,position) => {
    return accum += position.quantity * position.price
  },0)

  return (
    <div className='table'>
        <h2>Accounts Table</h2>
            <AccountsRow
            total={total}
            accountsData = {accountsData.Accounts}
            />
      </div>
  )
}
