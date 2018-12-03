import React, {Component} from 'react'
import { mapAccountIdsToType, accountTableData, formatNumber } from '../utilityFunctions';


class AccountRow extends Component {
  constructor(props){
    super(props)
    const {total, accountsData} = props
    const accountTypesObj = mapAccountIdsToType(accountsData)
    const data = accountTableData(accountTypesObj)
    this.state = {
      data,
      total,
      type: true
    }
  }

  render(){
  const {data, total} = this.state
  console.log('state',this.state)
  return (
    <table>
      <tbody>
        <tr className='accountsRow'>
          <th onClick={()=>{
            if(this.state.type){
              this.setState({
                type: false})
              }
              else this.setState({type:true})
            this.setState({ data: data.sort((row1,row2) => {
              let coerce = {
                true: 1,
                false: -1
              }
              if(this.state.type){
                return (coerce[row2.type[0] < row1.type[0]])
              }
              else{
                return -1
              }

            })
          })}}>Type</th>
          <th onClick={()=>{
            this.setState({
              data: data.sort((row1,row2) => {
              return row2.sum - row1.sum})})
          }}>Sum</th>
          <th onClick={ ()=>{
            this.setState({
              data:data.sort((row1,row2) => {
                return row2.sum - row1.sum})
            })
          }
          }>Percent of Total</th>
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
}

export default AccountRow
