<script setup>import { ref } from 'vue';
defineEmits(['delete' , 'create'])
defineProps({
  arrayofwish:{
    type: Array,
    require: true
  }
})
let name = ref('')
let detailWish = ref('')
let newWish = (arrayofwish) =>{
    return {id: generateID(arrayofwish), name:name.value ,noteDetail:detailWish.value}
}
const generateID = (array)=>{
    if(array.length > 0){
        return array[array.length-1].id +1
    }
}

</script>

<template>
<div class="text">
        <textarea cols="70" rows="1" placeholder="input your names..." v-model="name"></textarea>
        <textarea cols="70" rows="10" placeholder="input your wish..." v-model="detailWish"></textarea>
        <button @click="$emit('create' , newWish(arrayofwish))"> Create </button>
        <ul v-for="(wish) in arrayofwish">
                <li>
                  <b>Wish from </b>{{wish.name}}
                  <p><b>Detail :</b> {{wish.noteDetail}}</p>
                  <button @click="$emit('delete',wish.id)"> Delete</button>
                </li>
        </ul>
</div>
</template>
 
<style>

</style>