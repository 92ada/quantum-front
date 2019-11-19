import { closeView } from './tag-view'

export function deleteRequest(context, request) {
  const _this = context
  _this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(
    request
  ).then(res => {
    _this.$message({
      type: 'success',
      message: '删除成功!'
    })
    closeView(_this.$route.path)
    closeView(_this.$route.path.replace('/edit', ''))
  }).catch(error => {
    _this.$message({
      type: 'info',
      message: '已取消删除'
    })
  })
}
