import { isBalanced } from '@/balanced-brackets/balanced-brackets'

describe('Determine if string has balanced brackets', () => {
  test('Input: "}][}}(}][))]", Expected Output: false', () => {
    const input = '}][}}(}][))]'

    expect(isBalanced(input)).toBeFalsy()
  })

  test('Input: "({}([][]))[]()", Expected Output: true', () => {
    const input = '({}([][]))[]()'

    expect(isBalanced(input)).toBeTruthy()
  })
})
