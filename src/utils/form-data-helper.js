/**
 *
 * @param structuredData
 * [
 *  {
 *   index": "id",
 *   "value": "1",
 *   "type": "number",
 *   "options": null,
 *   "option_url": null,c
 *   "require": null,
 *   "editable": null
 *  },
 * ]
 */
function resolveStructuredData(structuredData) {
  const ret = {}
  for (let i = 0; i < structuredData.length; i++) {
    ret[structuredData[i].index] = structuredData[i].value
  }
  return ret
}

function hideId(columns) {
  const ret = []
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].index !== 'id') {
      ret.push(columns[i])
    }
  }
  return ret
}

function underlineToSentenceFormat(str) {
  return str.replace(/_./g, ch => ch.toUpperCase()).replace(/^./, ch => ch.toUpperCase()).replace(/_/g, ' ')
}

export {
  resolveStructuredData,
  hideId,
  underlineToSentenceFormat
}
