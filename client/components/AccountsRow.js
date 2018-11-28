import React from 'react'
import { mapAccountIdsToType, sumByAccountType, formatPrice } from '../utilityFunctions';

export default (props) => {
  const {total, accountsData} = props
  const accountTypesObj = mapAccountIdsToType(accountsData)
  const accountTypes = Object.keys(accountTypesObj)
  console.log('acctoun',accountTypes)
  return (
    <table>
      <tbody>
        <tr className='accountsRow'>
          <th>Type</th>
          <th>Sum</th>
          <th>Percent of Total</th>
        </tr>
        { accountTypes.map(type => {
          return(
          <tr key={type}>
          <td>{type}</td>
          <td>
          {formatPrice(sumByAccountType(accountTypesObj[type]))}</td>
          <td>{formatPrice(sumByAccountType(accountTypesObj[type])/total*100)+'%'}</td>
          </tr>
          )
        })

        }
      </tbody>
    </table>

  )
}
