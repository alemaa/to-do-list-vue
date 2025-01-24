<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li :class="{ 'completed': todo.completed }">
          <span>
            {{ todo.text }}
          </span>
        </li>
        <button @click="$emit('deleteItem',todo.id)">Remove</button>
      </template>
    </ul>
    </div>
    <div>
    <input class="inputClass"
      type="text"
      v-model="newItem"
      placeholder="add new item"
    />
    <button @click="addItem">Add</button>
  </div>
</template>

<script setup>
import { ref, defineProps,defineEmits} from 'vue'

defineProps({
  title: String,
  todos: Array,
  count:Number
})
 const emit = defineEmits([
  'deleteItem',
  'addItem',
  'clickItem'
])



const newItem=ref('');

const addItem=()=>{
  if(newItem.value!=="") {
    emit('add-item',newItem.value);
  }

  newItem.value="";
};


 // onMounted(()=>{
    //fetchTodos();
  //});

 /* const addItem=()=>{
    todos.value.push ({
        id:todos.value.length + 1,
        text:newItem.value,
        completed:false
    });
    newItem.value="";
  };*/

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
.completed {
  text-decoration: underline;
}
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
  background-color: rgb(170, 164, 155);
  width: 80px;
  height: 30px;
  border: 1px solid rgb(51, 50, 50);
  margin-left: 10px;
}
</style>
