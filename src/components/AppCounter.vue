<template>
    <div>
        <h1>Counter</h1>
        <p>Original count {{ count }}</p>
        <p>Count multiplied by 2: {{ doubleCount }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>
<script setup>
import { ref,computed} from 'vue'
const count=ref(0);
const doubleCount=computed(()=> count.value*2);
const increment=()=>{
  count.value++;
}
const decrement=()=>{
  count.value--;
}
</script>
<style></style>