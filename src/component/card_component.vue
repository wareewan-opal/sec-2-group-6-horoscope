<script setup>
import { ref } from 'vue'
defineProps({
  deck: {
    type: Array,
    require: true
  },
  typeofcard: {
    type: String,
    require: true
  }
})
const selected_card = ref([]);
const result = ref([]);
const status = ref('none')

const select = (deck) => {
  while (true) {
    if (selected_card.value.length <= 2) {
      let num = Math.floor(Math.random() * deck.length)
      if (!selected_card.value.includes(num)) {
        selected_card.value.push(num)
        status.value = 'popup';
        break;
      }
    } else {
      break; 
    }
  }
}
const getResult = (deck , type) =>{
  status.value = 'result'
  for(let i = 0; i < selected_card.value.length; i++){
    result.value.push({
      name: deck[selected_card.value[i]].name,
      mean: eval(`deck[selected_card.value[i]].${type}`)
    })
  }
}

</script>
 
<template>
  <table class="cardselect">
    <tr v-for="col in 4" class="colselect">
      <th v-for="row in 6">
        <img v-show="selected_card.length <= 2" :src="`src/assets/back_${typeofcard}.png`" :alt="typeofcard"
          height="250" @click="select(deck , typeofcard)">
      </th>
    </tr>
  </table>
  <div v-show="status == 'popup'">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>HOROSCOPE</h3>
          </div>
          <div class="modal-body"> you're already picked 3 cards </div>
          <div class="modal-button">
            <button class="button" @click="getResult(deck , typeofcard)">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="status == 'result'">
  <div class="sun">
    <img src="../assets/sun2.png" height="150">
  </div>
  <div>
    <h1>Result Card</h1>
  </div>
  <router-link :to="{name: 'Home' }"><button class="button">BACK TO HOROSCOPE HOME</button></router-link>
  <div v-for="(i , index) in selected_card.length">
  <div class="cardresult">
    <img src="../assets/love.png" alt="book" height="300">
    <div class="model-mask">
      <div class="model-wrapper">
        <div class="model-container">
          <div class="model-body"> Card Name : {{ result[index].name }} </div>
          <div class="model-body"> Result card : {{ result[index].mean }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
 
<style>
.cardselect {
  position: relative;
}

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

/* .button {
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
} */

.sun {
  position: relative;
  margin-top: 0.5em;
  margin-left: 42em;
}

h1 {
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
  margin-left: 1em;
}

.right {
  margin-top: -76em
}

.left {
  margin-top: -76em
}

.cardresult {
  margin-top: 5em;
  margin-left: 24.25em;
}
.model-mask {
  position: relative;
  padding-left: 20em;
  margin-top: -15em;
}

.model-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.model-container {
  max-width: max-content;
  margin: 10px auto;
  padding: 50px 250px;
  background-color: #FFF5D1;
  font-family: 'Cinzel Decorative', cursive;
  border-radius: 20px;
  box-shadow: 0 2px 8px #e1c68e
}

.model-body {
  font-family: 'Cinzel Decorative', cursive;
  margin-left: -1em;
  text-align: center;
  padding-left: 10px;
}

.button {
  border-radius: 12px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 38em;
  margin-top: 1em;
  background-color: #e1c68e;
  color: 00000;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
}

.button:hover {
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}
</style>