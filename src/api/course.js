import request from '@/utils/request'
export default {
  // 1 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: '/edu/course/addCourse',
      method: 'post',
      data: courseInfo
    })
  },
  // 根据课程id查询课程基本信息
  getCourseInfoId(id) {
    return request({
      url: '/edu/course/getCourseInfo/' + id,
      method: 'get'
    })
  },
  // 修改课程信息
  updateCourseInfo(courseId, courseInfo) {
    return request({
      url: '/eduservice/course/updateCourseInfo/' + courseId,
      method: 'put',
      data: courseInfo
    })
  },
  // 课程确认信息显示
  getPublihCourseInfo(id) {
    return request({
      url: '/eduservice/course/getPublishCourseInfo/' + id,
      method: 'get'
    })
  },
  // 课程最终发布
  publihCourse(id) {
    return request({
      url: '/eduservice/course/publishCourse/' + id,
      method: 'post'
    })
  },
  // TODO 课程列表
  // 课程最终发布
  getListCourse() {
    return request({
      url: '/eduservice/course',
      method: 'get'
    })
  },
  removeCourse(id) {
    return request({
      url: `edu/course/deleteById/${id}`,
      method: 'delete'
    })
  },
  getCourseListPage(courseQuery) {
    return request({
      url: '/edu/course/getCourseListPage',
      method: 'post',
      // courseQuery条件对象，后端用requestbody获取数据
      // data表示把对象转换成json数据传递到接口里面

      data: courseQuery
    })
  }

}
