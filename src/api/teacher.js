import request from '@/utils/request'
export default {

  getListAll(params) {
    return request({
      url: 'edu/teacher/getAll',
      method: 'get',
      params
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
  }

}
