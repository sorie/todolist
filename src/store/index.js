import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todolist : [
      { todo : "영화보기", done:true },
      { todo : "주말 산책", done:false },
      { todo : "ES6 학습", done:false },
      { todo : "잠실야구장", done:true }
    ]
  },
  // 상태를 변경할 때 필요한 정보(payload)
  mutations: {
    [Constant.ADD_TODO] : (state, payload) => {
      if (payload.todo !== "") {
        state.todolist.push({ todo : payload.todo, done:false });
      }
    },
    [Constant.DONE_TOGGLE] : (state, payload) => {
      state.todolist[payload.index].done = !state.todolist[payload.index].done;
    },
    [Constant.DELETE_TODO] : (state, payload) => {
      state.todolist.splice(payload.index,1);
    }
  }
})

export default store;
