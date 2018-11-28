import React from 'react';
import holdingsData from '../../data/holdings'
import HoldingsRow from './HoldingsRow'

const HoldingsTable = () => {
    return (
      <div>
        <h2>Holdings Table</h2>
            <HoldingsRow data={holdingsData.Positions} />
      </div>
    )
}

export default HoldingsTable
