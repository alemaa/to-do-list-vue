import {createStore} from 'vuex'

const store=createStore({
    state:{
        todos:[]
    },
    mutations:{
        setTodos(state,todos){
            state.todos=todos
        },
        addItem(state,todo){
            state.todos.push(todo)
        },
        removeTodos(state,index){

            state.todos=state.todos.filter(todo=>todo.id!==index)
        }
    },
    actions:{
        loadTodos({commit}){
            const todosData=localStorage.getItem('todos');
            if(todosData){
                commit('setTodos',JSON.parse(todosData));
            }
        },
        addItem({ commit, state}, todoText) {
            const newTodo = {
              id: Date.now(),
              text: todoText,
              completed: false
            };
            commit('addItem', newTodo);
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        removeTodos({commit,state}, index){
            commit('removeTodos',index);
            localStorage.setItem('todos',JSON.stringify(state.todos))
        }
    },
    getters:{
        todos:state=>state.todos
    }
})
export default store;