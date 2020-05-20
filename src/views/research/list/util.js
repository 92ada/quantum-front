function renderJson(jsonArray) {
  try {
    return jsonArray.join(', ')
  } catch (e) {
    return ''
  }
}

export { renderJson }
