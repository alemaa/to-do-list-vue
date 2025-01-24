<template>
    <br>
    <div>
        <input type="text" v-model="fName" placeholder="First name">
        <br>
        <input type="text" v-model="lName" placeholder="Last name">
        <p>{{ greeting }}</p>
    </div>
</template>
<script setup>
import {ref,  watch} from 'vue'

const fName=ref(['']);
const lName=ref(['']);
const greeting=ref('Hello');

watch ([fName,lName], ([newFirstName,newLastName])=>{
console.log(greeting.value=`Hello ${newFirstName} ${newLastName}`);
});
</script>
<style>
</style>