<script setup>
import {ref , onBeforeMount} from 'vue'
import study_component from '../component/backstudy_component.vue';
const deck = ref([])
const type = ref('study');
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
<!-- <br> -->
    <h1>STUDY HOROSCOPE</h1>
    <study_component :deck="deck" :typeofcard="type"></study_component>
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
table {
    padding-right: 10em;
    margin-right: -10em;
}
table, th, td {
  position: relative;
  padding-left: 2.5em;
  margin-left: 9em;
}
</style>