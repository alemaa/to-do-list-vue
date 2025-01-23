
<template>
<div id="app">
<ToDoList title="To do list"/>
</div>
</template>

<script>

import ToDoList from './components/toDoList.vue';


export default {
  name:"App",
  components: {
    ToDoList
  }
};
</script>

<style>

</style>
