<script setup>
import { ref } from 'vue';
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
    <div class="name">
    <textarea cols="70" rows="1" placeholder="   input your names..." v-model="name"></textarea>
  </div>
  <div class="wish">
    <textarea cols="70" rows="10" placeholder="   input your wish..." v-model="detailWish"></textarea>
    <div class="create">
      <button @click="$emit('create' , newWish(arrayofwish))"> Create </button> &nbsp;
      <router-link :to="{name: 'Home' }"><button>BACK TO HOROSCOPE HOME</button></router-link>
    </div>
<div class="text">
     <div class="show">
        <ul v-for="(wish) in arrayofwish">
                <li>
                  <b>Wish from </b>{{wish.name}}
                    <p><b>Detail :</b> {{wish.noteDetail}} <div class="delete"><button @click="$emit('delete',wish.id)">Delete Wish from :{{ wish.name}}</button></div> </p>
                </li>
        </ul>
        </div>
  </div>
      
</div>

</template>
 
<style>

.name{
  margin-left: 30em;
  font-family: 'Inconsolata', monospace;
}
.wish{
  margin-left: 30em;
  font-family: 'Inconsolata', monospace;
}
.show{
  display: grid;
  margin-left: 10em;
  margin-top: 1em;
  background-color: antiquewhite;
  border-radius: 10px;
  font-family: 'Inconsolata', monospace;
  margin-right: 40em;
  box-shadow: 0 2px 8px white;
  position: relative;
  padding-left: 1em;
  width: 50%;
  clear: both;
  padding-top: 1em;
}
.delete{
  border-radius: 12px;
  /* margin: 4px 2px ; */
  cursor: pointer; 
  /* padding: 10px 30px; */
  text-align: center;
  margin-left: 18em;
  color: black;
  font-family: 'Inconsolata', monospace;
}
.create{
  margin-left: 10em;
  margin-top: 1em;
  border-radius: 12px;
}

</style>