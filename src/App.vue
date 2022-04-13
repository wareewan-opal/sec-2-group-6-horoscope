<script setup>

</script>
 
<template>
<div class="sun">
  <img src="./assets/sun2.png" height="150">
</div>
  <div class="titlename">
    <p>HOROSCOPE</p>
  </div>
  <div class="card-group">
  <div class="card1">
    <div class="card-body">
      <h5 class="card-title">Love Horoscope</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card2">
    <div class="card-body">
      <h5 class="card-title">Study Horoscope</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card3">
    <div class="card-body">
      <h5 class="card-title">Health Horoscope</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    <div class="card4">
    <div class="card-body">
      <h5 class="card-title">All</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="left">
  <img src="./assets/left.png" height="550">
</div>
<div class="right">
  <img src="./assets/right.png" height="550">
</div>
<div class="last">
    <img src="./assets/Last.png"  height="110">
</div>
<div class="copyright">
<p> &copy; INT 203 Client-Side Web Programming || ^^ </p>
project round 2 : name HOROSCOPE by sec2 group 6 
</div>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
html , body{
  padding-top: 100em;
  background-color: #323233;
  width: 2000;
  height: 1080;
  position: fixed;
}
.sun{
  position: relative;
  text-align: center;
  margin-top: -200em;
  padding-top: -50em;
  margin-left: 0.5em;
}
.last{
  text-align: center;
  margin-left: -1ex;
  padding-top: 33em;
  margin-top: -70ex;
  position: sticky;
}

.titlename{
  text-align: center;
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  letter-spacing: 1cm;
  margin-left: 1.5em;
}
.right{
  position: relative;
  margin-top: -36%;
  /* margin-bottom: -46%; */
  text-align: right;
}
.left{
  position: relative;
  margin-top: -30%;
  text-align: left;
}
.copyright{
  text-align: center;
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  font-size: medium;
}
.card-group{
  display: block;
  /* padding-right: 0.3em; */
  padding-left: 15em;
  /* background-color: #e1c68e; */
}

</style>