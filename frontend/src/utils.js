import { omit, reduce, pickBy, isArray } from 'lodash'

export function convertSearchValueToURLParam (obj) {
  const flattenObject = normalizeNestingObj(obj.ifFieldValue)
  const normalizedIfField = pickBy(flattenObject, isArray)
  return new URLSearchParams({ ...normalizedIfField, ...omit(obj, ['ifFieldValue']) }).toString()
}

/**
 * @param {Array} obj 
 */
function normalizeNestingObj(obj) {
  const o = { 
    Method: [],
    Methodlogy: [],
    Benefit: [],
    Participants: [],
  }
  try {
    obj.forEach(({ fieldPicked, valuePicked}) => {
      o[fieldPicked] = [ ...o[fieldPicked], valuePicked]
    })
  } catch (e) {
    return {}
  }

  const result = reduce(o, (acc, _, key) => {
    return { 
      ...acc,
      [key.toLowerCase()]: (o[key].length > 0 ? o[key] : null),
    }
  }, {})
  return result
}
