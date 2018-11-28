import React from 'react'
import { mapAccountIdsToType, accountTableData, formatNumber } from '../utilityFunctions';

const AccountRow = (props) => {
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

        {/* map over the data array generated from the utility function accountTableData */}
        { data.map(typeObj => {
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

export default AccountRow
