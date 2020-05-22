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
    input.forEach(({ fieldPicked, valuePicked }) => {
      field[fieldPicked] = [...field[fieldPicked], valuePicked]
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
