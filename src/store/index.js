import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import actions from './action'
import ajax from '../config/ajax'

Vue.use(Vuex)

const state = {
  level: '第一周', // 活动周数
  itemNum: 1,     // 第几题
  allTime: 0,     // 总共用时
  timer: '',      // 定时器
  answerid: [],   // 答案id
  itemDetail: [
    {
      'topic_id': 20,
      'active_topic_id': 4,
      'type': 'ONE',
      'topic_name': '题目一',
      'active_id': 1,
      'active_title': '欢乐星期五标题',
      'active_topic_phase': '第一周',
    }
  ]
}

export default new Vuex.Store({
  state,
  mutation,
  actions
})
