<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.completed" style="text-decoration: underline;">
          <span>
            {{ todo.text }}
          </span>
        </li>
        <li v-else-if="todo.completed">
          <span>
            {{ todo.text }}
          </span>
        </li>
      </template>
    </ul>
    <input class="inputClass"
           type="text"
            v-model="newTask"
            placeholder="add new task"/>
    <button @click="addTask">Add</button>
  </div>
</template>

<script setup>
import { ref,onMounted, defineProps } from 'vue'

defineProps({
  title: String,
})

const todos=ref([]);
  const newTask=ref('');

  const fetchTodos= ()=>{
    todos.value=[
        {id:1,text:"Buy groceries",completed:true},
        {id:2, text:"To go for a walk", completed:true},
        {id:3, text:"Read a book", completed:false}
    ]
  };
  onMounted(()=>{
    fetchTodos();
  });
  const addTask=()=>{
    todos.value.push ({
        id:todos.value.length + 1,
        text:newTask.value,
        completed:false
    });
    newTask.value="";
  };
  //const removeTask=(id)=>{
  //todos.value=todos.value.filter((todo=>todo.id!==id))
  //}

// export default {
//   name:"toDoList",
// setup(){
//   const todos=ref([]);
//   const newTask=ref('');
//   const fetchTodos= ()=>{
//     todos.value=[
//         {id:1,text:"Buy groceries",completed:true},
//         {id:2, text:"To go for a walk", completed:true},
//         {id:3, text:"Read a book", completed:false}
//     ]
//   };
//   onMounted(()=>{
//     fetchTodos();
//   });
//   const addTask=()=>{
//     todos.value.push ({
//         id:todos.value.length + 1,
//         text:newTask.value,
//         completed:false
//     });
//     newTask.value="";
//   };
//   return {
//       todos,
//       newTask,
//       addTask,
//     };
//   },
// };
</script>

<style>
ul li {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  width: 150px;
}
.inputClass {
  margin-left: 50px;
}
button {
  background-color: bisque;
  width: 80px;
  height: 40px;
  border: 1px solid black;
  margin-left: 10px;
}
</style>
