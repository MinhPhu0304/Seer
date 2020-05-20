export function convertSearchValueToURLParam (obj) {
  const normalizedIfField = normalizeNestingObj(obj.ifFieldValue)
  return new URLSearchParams({ ...normalizedIfField, description: obj.description, startDate: obj.startDate, endDate: obj.endDate }).toString()
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

  obj.forEach(({ fieldPicked, valuePicked}) => {
    o[fieldPicked] = [ ...o[fieldPicked], valuePicked]
  })

  return o
}
