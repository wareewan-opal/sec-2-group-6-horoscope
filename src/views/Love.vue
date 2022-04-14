<script setup>
import {ref , onBeforeMount} from 'vue'
<<<<<<< HEAD
import Love_component from '../component/backlove_component.vue';
const deck = ref([])
const type = ref('love');
=======
import Love_component from '../component/card_component.vue';

const deck = ref([])
const type = ref('love');

>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
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
<<<<<<< HEAD
</script>
 
<template>
    <h1>LOVE HOROSCOPE</h1>
=======

</script>
 
<template>
    <h1>This's Love</h1>
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
    <Love_component :deck="deck" :typeofcard="type"></Love_component>
</template>
 
<style>
<<<<<<< HEAD
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
h1{
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
}
=======

>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
</style>