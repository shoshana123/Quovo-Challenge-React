import holdingsData from '../../data/holdings'

export const formatNumber = (price) => {
  price = price.toFixed(2)
  let sliceIdx = price.indexOf('.')

  // check if need to add either 1 or 2 zeros the right of the decimal
  if(price.indexOf('.')>-1){
    if(price.slice(sliceIdx+1).length<2) price = price += '0'
  }
  else price = price += '.00'

  // check if need to add comma for > 3 digits to left of the decimal
  if(price.slice(0,sliceIdx).length>3 && price.slice(-2)!=='00'){
    let commaIdx = price.length - 6
    price = `${price.slice(0,commaIdx)},${price.slice(commaIdx)}`
  }
  return price
}

export const mapAccountIdsToType = (arr) =>{
  let accountType = {}

  // create an object with the key account type and the value an array of all account IDs associated with the account type
  arr.forEach(account => {
    if(!accountType[account.type]) accountType[account.type] = [account.id]
    else accountType[account.type].push(account.id)
  })
  return accountType
}

export const sumByAccountType = (acctIdsArr) => {
  let sumValue = 0

  // loop through each accountId, filter the holdings data array for the accountIds and add the value of each holding
  for(let i = 0; i < acctIdsArr.length; i++){
    sumValue += holdingsData.Positions.filter(elem=> elem.account_id === acctIdsArr[i]).reduce((accum,elem) => {
        let value = elem.price * elem.quantity
        return accum + value
      },0)
    }
    return sumValue
}

export function sortTable(data) {
  return data.sort((row1,row2)=>{
    return row2.quantity-row1.quantity
  })
}
