
<template>
<div id="app">
<ToDoList title="To do list"
:todos="todos"
@delete-item="deleteItem"
@add-item="addItem"/>
</div>
</template>

<script setup>

import ToDoList from './components/toDoList.vue';
import { ref}from 'vue';

/*export default {
  name:"App",
  components: {
    ToDoList
  }
};*/
const newItem=ref('');

const todos=ref([
  {id:1,text:"Buy groceries",completed:true},
  {id:2, text:"To go for a walk", completed:true},
  {id:3, text:"Read a book", completed:false}
]);

const addItem=(itemText)=>{
  todos.value.push ({
      id:todos.value.length + 1,
      text:itemText,
      completed:false
  });
  newItem.value="";
}

const deleteItem=(itemId)=>{
  todos.value=todos.value.filter((todo)=>todo.id!==itemId)
}
</script>

<style>

</style>
