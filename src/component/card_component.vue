<script setup>
import {ref} from 'vue'
defineEmits(['show'])
defineProps({
  deck:{
    type: Array,
    require: true
  },
  typeofcard:{
    type: String,
    require: true
  }
})
const selected_card = ref([]);

const randNum = (deck) =>{
  return Math.floor(Math.random()*deck.length)
}

const select = (deck) =>{
  while(true){
    if(selected_card.value.length <= 2){
    let num = randNum(deck)
    if(!selected_card.value.includes(num)){
      selected_card.value.push(num)
      break;
      }
    }else {break;}
  }
}

const showcardSelected = () => {
  alert(selected_card.value);
}

</script>
 
<template>
    <table>
      <tr v-for="col in 4">
        <th v-for="row in 6">
          <img v-show="selected_card.length <= 2" :src="`src/assets/back_${typeofcard}.png`" :alt="typeofcard" height="250" @click="select(deck)">
        </th>
      </tr>
    </table>
    <!-- <button @click="showcardSelected()">Show</button> -->
      <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header"><h3>HOROSCOPE</h3></div>
        <div class="modal-body"> you're already picked 3 cards </div>
        <div class="modal-button">
          <button class="button">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style>
.modal-mask {
  position: fixed;
  /* z-index: 9998; */
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 50%;
  background-color: #323233;
  display: table;
  /* transition: opacity 0.3s ease; */
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: max-content;
  margin: 10px auto;
  padding: 20px 200px;
  background-color: #FFF5D1;
  font-family: 'Cinzel Decorative', cursive;
  border-radius: 20px;
  box-shadow: 0 2px 8px white
}
.modal-header h3 {
  margin-top: 1em;
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  margin-left: 1em;
  position: fixed;
}
.modal-body {
 font-family: 'Cinzel Decorative', cursive;
 margin-left: -2em;
 text-align: center;
 padding-left: 10px;
}
.modal-button {
  display: flex;
  justify-content: end;
}
.button
{
  border-radius: 12px; 
  margin: 4px 2px;
  cursor: pointer;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-right: 6.5em;
  background-color: #323233;
  color: #e1c68e;
}
</style>