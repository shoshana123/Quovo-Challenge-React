import React, {Component} from 'react';
import holdingsData from '../../data/holdings'
import HoldingsRow from './HoldingsRow'

export default () => {
  console.log('Holdings',holdingsData)
    return (
      <div className='table'>
        <h2>Holdings Table</h2>
            <HoldingsRow data={holdingsData.Positions} />
      </div>
    )
}
