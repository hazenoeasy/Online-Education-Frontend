import request from '@/utils/request'
export default {

  getListAll() {
    return request({
      url: 'edu/teacher/getAll',
      method: 'get'
    })
  },
  getByPage(params) {
    return request({
      url: 'edu/teacher/getByPage',
      method: 'post',
      data: params
    })
  },
  removeTeacher(id) {
    return request({
      url: 'edu/teacher/delete/' + id,
      method: 'delete'
    })
  },
  getTeacherInfo(id) {
    return request({
      url: 'edu/teacher/get/' + id,
      method: 'get'
    })
  },
  updateTeacher(params) {
    return request({
      url: 'edu/teacher/update',
      method: 'put',
      data: params
    })
  },
  addTeacher(params) {
    return request({
      url: 'edu/teacher/addTeacher',
      method: 'post',
      data: params
    })
  }
  // upload = ""
}
