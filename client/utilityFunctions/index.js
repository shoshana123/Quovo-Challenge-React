import holdingsData from '../../data/holdings'

export const formatNumber = (num) => {
  num = num.toFixed(2)
  let sliceIdx = num.indexOf('.')

  // check if need to add either 1 or 2 zeros the right of the decimal
  if(num.indexOf('.')>-1){
    if(num.slice(sliceIdx+1).length<2) num += '0'
  }
  else num += '.00'

  // check if need to add comma for > 3 digits to left of the decimal
  if(num.slice(0,sliceIdx).length>3 && num.slice(-2)!=='00'){
    let commaIdx = num.length - 6
    num = `${num.slice(0,commaIdx)},${num.slice(commaIdx)}`
  }
  return num
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

export const accountTableData = (acctIdsObj) => {
  let acctDataArr = []
  for (let type in acctIdsObj){

    // check that you are operating on the correct key type and not accessing a prototype function
    if(acctIdsObj.hasOwnProperty(type)){
      let sumValue = 0

      // loop through each accountId, filter the holdings data array for the accountIds and add the value of each holding
      for(let i = 0; i < acctIdsObj[type].length; i++){
        sumValue += holdingsData.Positions.filter(elem=> elem.account_id === acctIdsObj[type][i]).reduce((accum,elem) => {
            let value = elem.price * elem.quantity
            return accum + value
          },0)
        }

      //create data object with account type and sum to push into acctData Array so that you can loop through array in React Component
        let dataObj = {
          type: type,
          sum: sumValue
        }
        acctDataArr.push(dataObj)
      }
    }
    return acctDataArr
  }
