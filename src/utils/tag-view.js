export function refresh(context) {
  const _this = context
  const view = context.$route
  _this.$store.dispatch('tagsView/delCachedView', view).then(() => {
    const { fullPath } = view
    _this.$nextTick(() => {
      _this.$router.replace({
        path: '/redirect' + fullPath
      })
    })
  })
}

export function closeView(path) {
  const btn = document.getElementById('close-' + path)
  btn.click()
}
