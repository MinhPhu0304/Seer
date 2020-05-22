import { omit, isEmpty, omitBy } from 'lodash'

export function convertSearchValueToURLParam(obj) {
  const flattenObject = flattenIfFieldValue(obj.ifFieldValue)
  return new URLSearchParams({ ...flattenObject, ...omit(obj, ['ifFieldValue']) }).toString()
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
  return Object.keys(nonEmptyField).reduce((acc, value) => ({
    ...acc,
    [value.toLowerCase()]: nonEmptyField[value],
  }), {})
}
