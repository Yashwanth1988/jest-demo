import { multiple } from './mul'

export const add = (a, b) => {
    const bigNum = multiple(a, b)
    return a + b + bigNum
}
