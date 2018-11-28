import React from 'react'
import {formatNumber, sortTable} from '../utilityFunctions'

const HoldingsRow = (props) => {
  let {data} = props

  // sort data by quantity
  data.sort((row1,row2)=>row2.quantity-row1.quantity)

  return (
    <div>
      <table>
        <tbody>
          {/* create table headers */}
              <tr className='holdingsRow'>
                <th>Account ID</th>
                <th>Ticker Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>

              {/* map over data to create rows */}
              {data.map(row => {
                return (
                    <tr key={row.id}>
                    <td>{row.account_id}</td>
                    <td>{row.ticker_name}</td>
                    <td>{row.ticker}</td>
                    <td>{formatNumber(row.price)}</td>
                    <td>{row.quantity}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

export default HoldingsRow
