import { omit, isEmpty, omitBy } from 'lodash'

export function validIfField (ifFieldValue) {
  let valid = true
  ifFieldValue.forEach((ifField) => {
    if(ifField['fieldPicked'] != '' && (ifField['operatorPicked'] == '' || ifField['valuePicked'] == '')) valid = false
  })
  return valid
}

export function constructSearchQuery (formInput) {
  const flattenObject = flattenIfFieldValue(formInput.ifFieldValue)
  const transformedDateField = transformeDateField(formInput)
  return new URLSearchParams({ ...flattenObject, ...transformedDateField, ...omit(formInput, ['ifFieldValue', 'startDate', 'endDate']) }).toString()
}

/**
 * @param {Object[]} input 
 */
function flattenIfFieldValue (input) {
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

function transformeDateField({ startDate, endDate }) {
  if (startDate == null && endDate == null) return {}
  if (startDate != null && endDate == null) {
    const parsed = new Date(startDate)
    return {
      startYear: parsed.getFullYear()
    }
  } 
  if (startDate == null && endDate != null) {
    const parsed = new Date(endDate)
    return {
      endYear: parsed.getFullYear()
    }
  }
  const startYear = (new Date(startDate)).getFullYear()
  const endYear = (new Date(endDate)).getFullYear()
  return {
    startYear,
    endYear,
  }
}
