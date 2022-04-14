<script setup>
import {ref , onBeforeMount} from 'vue'
import Love_component from '../component/card_component.vue';

const deck = ref([])
const type = ref('love');

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
    <h1>This's Love</h1>
    <Love_component :deck="deck" :typeofcard="type"></Love_component>
</template>
 
<style>

</style>