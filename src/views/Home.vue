<script setup>

</script>
 
<template>
<div class="sun">
  <img src="../assets/sun2.png" height="150">
</div>
<div class="titlename">
  <p>HOROSCOPE</p>
  </div>
<<<<<<< HEAD
  <table style="width:80%">
=======
  <table style="width:100%">
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
  <tr class="category">
    <th><img src="../assets/love.png" alt="love" height="390">
    <router-link :to="{name: 'Love' }"><h5>LOVE HOROSCOPE</h5></router-link></th>
    
    <th><img src="../assets/study.png" alt="book" height="390">
    <router-link :to="{name: 'Study' }"><h5>STUDY HOROSCOPE</h5></router-link></th>
    <th><img src="../assets/Health.png" alt="book" height="390">
    <router-link :to="{name: 'Health' }"><h5>HEALTH HOROSCOPE</h5></router-link></th>
    <th> <img src="../assets/finance.png" alt="book" height="390">
    <router-link :to="{name: 'Finance' }"><h5>FINANCE HOROSCOPE</h5></router-link></th>
  </tr>
  </table>
  <div class="left">
  <img src="../assets/left.png" height="550">
</div>
<div class="right">
  <img src="../assets/right.png" height="550">
</div>
<div class="last">
    <img src="../assets/Last.png"  height="90">
</div>
<<<<<<< HEAD
<div class="titlename2">
  <h9> &copy; INT203 Client-Side Web Programming || project round 2 : name HOROSCOPE by sec2 group 6</h9>
  </div>
=======

>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
html , body {
 background-color:#323233;
<<<<<<< HEAD
 max-width:100%;
 max-height: 0em
}
table {
    padding-right: 10em;
    margin-right: -10em;
=======
 /* max-width:0.0020em */
 /* max-height: max-content */
}
table {
    width: 100%;
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
}
table, th, td {
  position: relative;
  padding-left: 2.5em;
<<<<<<< HEAD
  margin-left: 9em;
=======
  margin-left: 12em;
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
}
.category{
   position: relative;
   margin-left: -10em;
}
.sun{
  position: relative;
  margin-top: 0.5em;
  margin-left: 42em;
}
.titlename{
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  letter-spacing: 1cm;
  margin-left: 13.25em;
<<<<<<< HEAD
=======
  /* position: relative; */
  /* float:none */
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
}
.right{
  position:absolute;
  margin-left: 160ex;
  margin-top: -40em;
}
.left{
  position:absolute;
  margin-top: -40em;
}

.last {
 margin-left: 20em;
}
h5{
  text-align: center;
  color: #C6C2C1 ;
}
h5:hover{
  color: #e1c68e;
}
<<<<<<< HEAD
.copyright{
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  font-size: x-small;
  margin-left: 47em;
}
.titlename2{
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  margin-left: 19em;
}
=======
>>>>>>> d255a0d1bdec59635f29f79d95619c854b3aaefe
</style>