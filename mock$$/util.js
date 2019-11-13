export function toObjectList(source) {
  const result = []
  for (const item of source) {
    for (const key in item) {
      result.push({
        name: key,
        value: item[key],
        type: 'string',
        index: key,
        editable: true,
        require: false
      })
      if (key === 'photo') {
        result[result.length - 1].type = 'photo'
      }
    }
  }
  return result
}
