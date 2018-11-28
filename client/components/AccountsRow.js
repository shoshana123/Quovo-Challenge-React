import React from 'react'
import { mapAccountIdsToType, accountTableData, formatNumber } from '../utilityFunctions';

const accountRow = (props) => {
  const {total, accountsData} = props
  const accountTypesObj = mapAccountIdsToType(accountsData)
  const data = accountTableData(accountTypesObj)
  data.sort((row1,row2) => row2.sum - row1.sum)
  return (
    <table>
      <tbody>
        <tr className='accountsRow'>
          <th>Type</th>
          <th>Sum</th>
          <th>Percent of Total</th>
        </tr>
        { data.map(typeObj => {
          let typeSum = accountTableData(accountTypesObj[typeObj])
          return(
          <tr key={typeObj.type}>
          <td>{typeObj.type}</td>
          <td>
          {formatNumber(typeObj.sum)}</td>
          <td>{formatNumber(typeObj.sum /total*100)+'%'}</td>
          </tr>
          )
        })
        }
      </tbody>
    </table>

  )
}

export default accountRow
