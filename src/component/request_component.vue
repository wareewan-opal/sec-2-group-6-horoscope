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
   </div> 
    <button class="create" @click="$emit('create' , newWish(arrayofwish))">Create</button>
    <router-link :to="{name: 'Home' }"><button class="button2">BACK TO HOROSCOPE HOME</button></router-link>
<div class="text">
     <div class="show">
        <ul v-for="(wish) in arrayofwish">
                <li>
                  <b>Wish from </b>{{wish.name}}
                    <p><b>Detail :</b> {{wish.noteDetail}}</p>
                </li>&nbsp;&nbsp;
          <button class="delete" @click="$emit('delete',wish.id)">Delete Wish from :{{ wish.name}}</button>&nbsp;
          <button class="edit" @click="$emit('delete',wish.id)">Edit Wish from :{{ wish.name}}</button>
        </ul>
        </div>
  </div>

</template>
 
<style>
.text{
    position: absolute;
    margin-top: 1.25em;
    padding-left: 32.5em;
    margin-left: -13em;
}
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
  border-radius: 12px;
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
  font-size: smaller;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Inconsolata', monospace;
    font-family: 'Cinzel Decorative', cursive;
  color: black;
}
.create{
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  display: inline-block;
  margin-inline-start: 44em;
  padding: 10px 30px;
  margin-top: 1em;
}
.edit{
  font-size: smaller;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
}
.button2 {
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  display: inline-block;
  margin-inline-start: 38em;
  padding: 10px 30px;
  margin-top: 1em;
}
.button2:hover{
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}

</style>