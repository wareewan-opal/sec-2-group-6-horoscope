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
      <img src="./assets/love.png" alt="love" height="390">
      <h5>LOVE HOROSCOPE</h5>
    </div>
  </div>
  <div class="card2">
    <div class="card-body">
      <img src="./assets/study.png" alt="book" height="390">
      <h5>STUDY HOROSCOPE</h5>
    </div>
  </div>
  <div class="card3">
    <div class="card-body">
      <img src="./assets/Health.png" alt="book" height="390">
      <h5>HEALTH HOROSCOPE</h5>
    </div>
  </div>
    <div class="card4">
    <div class="card-body">
      <img src="./assets/Health.png" alt="book" height="390">
      <h5>FINANCE HOROSCOPE</h5>
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
    <img src="./assets/Last.png"  height="90">
</div>
<div class="copyright">
<p> &copy; INT 203 Client-Side Web Programming || project round 2 : name HOROSCOPE by sec2 group 6 </p>
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
  margin-left: 11em;
}
.last{
  text-align: center;
  margin-left: -1ex;
  margin-right: -18em;
  padding-top: 40em;
  margin-top: -70ex;
  font-size: x-small;
  /* position: sticky; */
}
.titlename{
  text-align: center;
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  letter-spacing: 1cm;
  margin-left: 6.5em;
}
.right{
  position: relative;
  margin-top: -41.25%;
  text-align: right;
  margin-right: -13em;
}
.left{
  position: relative;
  margin-top: -47.5%;
  text-align: left;
}
.copyright{
  text-align: center;
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  font-size: x-small;
  margin-right: -17em;
}
.card-group{
  display: block;
  /* padding-right: 0.3em; */
  padding-left: 15em;
margin-top: -2em;
}
h5{
  text-align: center;
  color: #C6C2C1 ;
}
h5:hover{
  color: #e1c68e;
}
</style>