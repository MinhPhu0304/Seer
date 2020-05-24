import { omit, isEmpty, omitBy } from 'lodash'

export function constructSearchQuery(formInput) {
  const flattenObject = flattenIfFieldValue(formInput.ifFieldValue)
  return new URLSearchParams({ ...flattenObject, ...omit(formInput, ['ifFieldValue']) }).toString()
}

/**
 * @param {Object[]} input 
 */
function flattenIfFieldValue(input) {
  const field = {
    Method: [],
    Methodlogy: [],
    Benefit: [],
    Participants: [],
  }
  try {
    input.forEach(({ fieldPicked, valuePicked, operatorPicked }) => {
      const operator = convertOperatorToQuery(operatorPicked)
      field[fieldPicked] = [...field[fieldPicked], `${operator}:${valuePicked}`]
    })
  } catch (e) {
    return {}
  }
  const nonEmptyField = omitBy(field, isEmpty)
  return Object.keys(nonEmptyField).reduce((accumulatedValue, value) => ({
    ...accumulatedValue,
    [value.toLowerCase()]: nonEmptyField[value],
  }), {})
}

function convertOperatorToQuery (operatorPicked) {
  const operator = {
    'contains': '$all',
    'does not contain': '$ne',
    'is equal to': '$eq', 
  }
  return operator[operatorPicked]
}
