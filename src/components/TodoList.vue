<style>
div {margin:30px}
* {box-sizing: border-box;list-style: none;}
.header {border:1px solid #ddd;padding:30px;color:darkslateblue;text-align:center}
.header:after {content:"";display:table;clear:both}
</style>
<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </div>
    <list></list>
  </div>
</template>
<script>
import InputTodo from './InputTodo.vue';
import List from './List.vue';

export default {
  name : 'todo-list',
  components : {
    InputTodo, List
  }
}
</script>