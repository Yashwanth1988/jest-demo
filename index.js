import { add } from './add'
import { multiple } from './mul'


const calculate = (a, b) => {
  console.log('Hello calculate')
  return {
      addValue : add(a, b),
      mulValue : multiple(a, b)
  }
}

module.exports = {
    calculate
}