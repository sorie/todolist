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
import eventBus from '../EventBus'

export default {
    created: function() {
      eventBus.$on('add-todo',this.addTodo)
    },
    data: function(){
      return {
        todolist : [
          {id:1,todo:"영화보기",done:false},
          {id:2,todo:"주말 산책",done:true},
          {id:3,todo:"esg study",done:false},
          {id:4,todo:"jamsil baseball",done:false},
        ]
      }
    },
    methods : {
      checked : function(done) {
        if(done) return {checked:true}
        else return {checked:false}
      },
      addTodo : function(todo) {
        if(todo !== "") {
          if(todo !== "") {
            this.todolist.push({id:new Date().getTime(), todo : todo, done:false})
          }
        }
      },
      deleteTodo : function(id){
        var index = this.todolist.findIndex(function(item){
          return item.id === id
        })
        this.todolist.splice(index, 1)
      },
      doneToggle : function(id) {
        var index = this.todolist.findIndex(function(item){
          return item.id === id
        })
        this.todolist[index].done = !this.todolist[index].done
      }

      
    }
  
  }
</script>
<!-- list-component에서 관리할 할 일 목록을 데이터 옵션으로 관리. todolist 데이터 옵션을 변경하는 기능을 담당할 수 있는 
addTdo, doneToggle, deleteTodo메서드 함께 작성.  -->
