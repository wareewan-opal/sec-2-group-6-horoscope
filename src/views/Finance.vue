<script setup>
import {ref , onBeforeMount} from 'vue'
import card_component from '../component/card_component.vue';
<<<<<<< HEAD

=======
>>>>>>> 6034f4a7cd9e5774e9a42b22cb8c3ec67525e828
const deck = ref([])
const type = ref('finance');
//Get Card
const getCard = async () => {
  const res = await fetch ('http://localhost:5002/major-arcana')
  if(res.status === 200){
    deck.value = await res.json()
  }
}
onBeforeMount(async () =>{
  await getCard()
})
</script>
 
<template>
    <h1>FINANCE HOROSCOPE</h1>
    <card_component :deck="deck" :typeofcard="type"></card_component>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
h1{
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
}
</style>