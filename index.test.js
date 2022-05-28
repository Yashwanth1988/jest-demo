

import * as mul from './mul';
import { add } from './add'
import { calculate } from './index'

/* const multiple = jest.spyOn(mul, 'multiple')
multiple.mockReturnValue(20); */

mul.multiple = jest.fn(() => 2)

describe('test add function', () => {
    test('test add 2, 3 return 5', () => {
        expect(add(2, 3)).toBe(7)
    })

    test('calc', () => {
        expect(JSON.stringify(calculate(2,3))).toBe(JSON.stringify({
            addValue: 7,
            mulValue: 2
        }))
    })
})