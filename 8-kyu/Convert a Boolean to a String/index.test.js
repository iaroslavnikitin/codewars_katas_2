const booleanToString = require('./index.js')

test('Test 1', () => {
  expect(booleanToString(true)).toBe('true')
})

test('Test 2', () => {
  expect(booleanToString(false)).toBe('false')
})
