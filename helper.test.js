import * as funcBModule from './funcB';
import { funcA } from './helper';

describe('helper', () => {

  test('test funcB', () => {
    expect(funcBModule.funcB()).toBe('original');  // Success!
  });

  test('test funcA', () => {
    const spy = jest.spyOn(funcBModule, 'funcB');
    spy.mockReturnValue('mocked');

    expect(funcA()).toBe('mocked');  // Success!

    spy.mockRestore();
  });
});