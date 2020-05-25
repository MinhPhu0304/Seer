import { constructSearchQuery } from './helper'

test('constructed request query from form state', () => {
  const formState = {
    ifFieldValue: [
      {
        fieldPicked: 'Method',
        operatorPicked: 'contains',
        valuePicked: 'TDD',
      }
    ]
  }
  const result = constructSearchQuery(formState)
  const expectedQueryConstructed = 'method=%24all%3ATDD'
  expect(result).toBe(expectedQueryConstructed)
});
