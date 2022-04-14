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
    <table style="width:80%">
      <tr>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>

      </tr>
      <tr>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
      </tr>
      <tr>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
      </tr>
      <tr>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
        <th><img src="../assets/back_study.png" alt="study" height="250"></th>
      </tr>
    </table>
</template>
 
<style>

table, th, td {
  position: relative;
  padding-right: -10em;
  margin-left: 10em;
  }
</style>