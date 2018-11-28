import React from 'react'
import { mapAccountIdsToType, sumByAccountType, formatNumber } from '../utilityFunctions';

export default (props) => {
  const {total, accountsData} = props
  const accountTypesObj = mapAccountIdsToType(accountsData)
  const accountTypes = Object.keys(accountTypesObj)
  return (
    <table>
      <tbody>
        <tr className='accountsRow'>
          <th>Type</th>
          <th>Sum</th>
          <th>Percent of Total</th>
        </tr>
        { accountTypes.map(type => {
          let typeSum = sumByAccountType(accountTypesObj[type])
          return(
          <tr key={type}>
          <td>{type}</td>
          <td>
          {formatNumber(typeSum)}</td>
          <td>{formatNumber(typeSum /total*100)+'%'}</td>
          </tr>
          )
        })

        }
      </tbody>
    </table>

  )
}
