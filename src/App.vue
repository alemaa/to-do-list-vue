<template>
<div id="app">
<ToDoList title="To do list"
:todos="todos"
@remove-todos="removeTodos"
@add-item="addItem"
/>
<AppCounter
@increment="increment"
@decrement="decrement">
</AppCounter>
<WatcherTask></WatcherTask>
</div>
</template>

<script setup>

import AppCounter from './components/AppCounter.vue';
import ToDoList from './components/toDoList.vue';
import { onMounted } from 'vue';
import WatcherTask from './components/watcherTask.vue';
import { useStore } from 'vuex'

const store = useStore();
/*export default {
  name:"App",
  components: {
    ToDoList
  }
};*/

onMounted(()=>{
  store.dispatch('loadTodos');
});

const removeTodos=(index)=>{
  console.log('radi')
  store.dispatch('removeTodos',index)
}
</script>

<style>

</style>
