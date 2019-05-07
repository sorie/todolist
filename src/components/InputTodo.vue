<style>
  ul {margin:0;padding:0}
  ul li {position:relative;padding:8px 8px 8px 40px;background:#eee;font-size:14px;transition:0.2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
  ul li:hover {cursor:pointer;background:#ddd}
  ul li.checked {background:#bbb;color:#fff;text-decoration:line-through}
  ul li.checke::before {content:'';position:absolute;border-color:#fff;border-style:solid;border-width:0px 1px 1px 0px;top:10px;left:16px;transform:rotate(45deg);height:8px;width:8px;}
  .close {box-sizing:border-box;position:absolute;right:0;top:0;padding:8px 16px;}
  .close:hover {background-color:#f44336;color:white}
  .input {width:75%;height:35px;padding:10px;float:left;font-size:16px;}
  .addbutton {padding:10px;width:25%;height:35px;background:#d9d9d9;color:#555;float:right;text-align:center;font-size:13px;cursor:pointer;transition:0.3s;}
  .addbutton:hover {background-color:#bbb}
  .completed {text-decoration:none}
</style>
<template>
  <div>
    <input type="text" id="task" class="input" placeholder="입력 후 엔터!" v-model.trim="todo" v-on:keyup.enter="addTodo">
    <span class="addbutton" @click="addTodo">추  가</span>
  </div>
</template>
<script>
import Constant from '../Constant'

export default {
  name : 'input-todo',
  data : function() {
    return { todo : "" }
  },
  methods : {
    addTodo : function() {
      this.$store.commit(Constant.ADD_TODO, { todo: this.todo })
      this.todo = ""
    }
  }
}
/*
InputTodo.vue 컴포넌트는 로컬 상태 데이터를 가지고 있다.
왜냐하면 이 상태 데이턴는 다른 컴포넌트에서는 이용되지 않으며 관리해야 할 만큼 중요한 데이터가 아니기 때문.
특정 컴포넌트에서만 필요로 하는 상태 데이터는 굳이 Vuex의 저장소를 이용할 필요가 없다. 
*/
</script>
