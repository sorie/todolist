<!-- list-component 시작 -->
<template>
  <ul id="todolist">
    <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle({ id: a.id })">
      <span>{{ a.todo }}</span>
      <span v-if="a.done"> (완료)</span>
      <span class="close" @click.stop="deleteTodo({ id: a.id })">&#x00D7;</span>
    </li>
  </ul>
</template>
<script>
import Constant from '../Constant'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'List',
    computed : mapState(['todolist']),
    methods : {
      checked : function(done) {
        if(done) return {checked:true}
        else return {checked:false}
      },
      ...mapActions([
        Constant.DELETE_TODO,
        Constant.DONE_TOGGLE
      ])
    }
  }
</script>
<!-- 
vuex의 mapState, mapMutations 헬퍼 메서드 참조.
mapstate : todolist 상태 데이터를 list.vue컴포넌트의 계산형 속성에 자동으로 바인딩되어 
일부러 계산형 속성을 작성하지 않아도 된다. 
mapMutations
 -->
