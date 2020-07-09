function renderJson(jsonArray) {
  try {
    return jsonArray.join(', ')
  } catch (e) {
    try {
      if (jsonArray && jsonArray.name) {
        return jsonArray.name
      } else {
        return jsonArray
      }
    } catch (e) {
      return ''
    }
  }
}

export { renderJson }
