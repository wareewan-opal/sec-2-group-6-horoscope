<script setup>
import { ref , onBeforeMount} from 'vue';
import request_componentVue from '../component/request_component.vue';

let wish = ref([])

const getWish = async () => {
  const res = await fetch ('http://localhost:5002/requesttosun')
  if(res.status === 200){
    wish.value = await res.json()
  }
}

const deleteWish = async (wishID) => {
  let ans = confirm(`Do you want to delete?`)
  if(ans){
  const res = await fetch (`http://localhost:5002/requesttosun/${wishID}` , {method: 'delete'})
  if(res.status === 200){
    (wish.value = wish.value.filter((wish) => wish.id !== wishID))
    console.log(res);
  }
  }
}

const createNewWish = async (newWish) => {
  console.log(newWish)
  const res = await fetch('http://localhost:5002/requesttosun', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ id: newWish.id, name: newWish.name, noteDetail: newWish.noteDetail })
  })
  if (res.status === 201) {
    const addWish = await res.json()
    wish.value.push(addWish)
  }
}

onBeforeMount(async () =>{
  await getWish()
})


</script>
 
<template>
  <h1>Your request to the sun.</h1>
  <h6>May everyone's wishes come true and fulfilled.</h6>
  <request_componentVue :arrayofwish="wish" @delete="deleteWish" @create="createNewWish"></request_componentVue>
  <router-link :to="{ name: 'Home' }"><button class="button2">BACK TO HOROSCOPE</button></router-link>
</template>
 
<style>
.text{
    position: fixed;
    padding-left: 27.5em;
    padding-top: 2em;
}
h6{
  color: #e1c68e;
  font-size: 1em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
  margin-left: 1em;
}
.button2 {
  border-radius: 12px;
  margin: 4px 2px ;
  cursor: pointer; 
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  margin-left: 42.5em;
  margin-top: 20em;
  background-color: #e1c68e;
  color: 00000;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
}
.button2:hover{
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}
</style>