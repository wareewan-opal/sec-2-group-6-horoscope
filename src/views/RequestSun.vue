<script setup>

</script>
 
<template>
<h1>Your request to the sun.</h1>
    
 <h6>May everyone's wishes come true and fulfilled.</h6>
      <div class="text">
          <textarea cols="90" rows="10" placeholder="You can write a request here."></textarea>
      </div>
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