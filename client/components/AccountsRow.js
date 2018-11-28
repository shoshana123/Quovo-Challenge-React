import React from 'react'

export default (props) => {
  const {holdingsData, accountsData} = props
  console.log('check',holdingsData, accountsData )
  return (
    <table>
      <tbody>
        <tr className='accountsRow'>
          <th>Type</th>
          <th>Sum</th>
          <th>Percent of Total</th>
        </tr>
      </tbody>
    </table>

  )
}
