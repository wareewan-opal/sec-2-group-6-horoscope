<script setup>
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
const meaning = (card , type) => {
    const text = `${card.name}
    : ${eval(`card.${type}`)}`
    alert(text);
}
</script>
 
<template>
    <table>
      <tr>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>


      </tr>
      <tr>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
      </tr>
      <tr>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
      </tr>
      <tr>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        <th><img src="../assets/back_love.png" alt="love" height="250"></th>
        </tr>
    </table>
</template>
 
<style>
</style>