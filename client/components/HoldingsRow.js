import React from 'react'
import {formatNumber, sortTable} from '../utilityFunctions'

export default (props) => {
  let {data} = props
  data = sortTable(data)
  return (
    <div>
      <table>
        <tbody>
              <tr className='holdingsRow'>
                <th>Account ID</th>
                <th>Ticker Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
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
