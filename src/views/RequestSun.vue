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
</template>
 
<style>
h6{
  color: #e1c68e;
  font-size: 1em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
  margin-left: 1em;
}
</style>