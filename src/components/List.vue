<!-- list-component 시작 -->
<template>
  <ul id="todolist">
    <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" v-on:click="doneToggle(a.id)">
      <span>{{ a.todo }}</span>
      <span v-if="a.done"> (완료)</span>
      <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span>
    </li>
  </ul>
</template>
<script>
import Constant from '../Constant'

export default {
    name: 'List',
    computed : {
      todolist() {
        return this.$store.state.todolist;
      }
    },
    methods : {
      checked : function(done) {
        if(done) return {checked:true}
        else return {checked:false}
      },
      doneToggle : function(id) {
        this.$store.commit(Constant.DONE_TOGGLE, {id:id})
      },
      deleteTodo : function(id){
        this.$store.commit(Constant.DELETE_TODO, {id:id})
      }
    }
  }
</script>
<!-- 
List.vue 컴포넌트에서는 로컬 데이터가 없다. 
이미 저장소(store)객체가 Vue 인스턴스에 주입되었기 때문. this.$store.state와 같이 저장소의 상태(state)에 접근
이것을 속성처럼 이용할 수 있도록 하기 위해 계산형 속성을 사용.
계산형 속성에 기입한 내용을 보면 상태를 직접 변경하지 않고 읽기 전용으로 사용하겠다는 의미이다.
화면에서 일어나는 이벤트를 받아 처리하는 메서드에서 변이를 일으키기 위해 this.$store.commit()메서드를 호출. 
첫번째 인자는 변이의 이름. 변이에 전달할 인자는 payload 인자를 이요하면 된다. 

 -->
