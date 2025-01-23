import { createApp } from 'vue'
import App from './App.vue'
import ToDoList from './components/toDoList.vue';

createApp(App).mount('#app')
App.component("toDoList",ToDoList);
