var cnt =0;
var counter = document.getElementById("counter");
var sentence = document.getElementById("sentence")
　　var enemy =false;
var countup = function(){
  if(enemy==false){
   cnt++;
   console.log(cnt);
   console.log(enemy+"敵");
   sentence.innerHTML = "進んだ";
   counter.innerHTML = cnt+"階";
   image.innerHTML ="<img src ='img/kaidan.jpg'>"
    if(Math.random()<0.2){
      enemy=true;
      sentence.innerHTML = "敵が現れた!";
      image.innerHTML ="<img src ='img/teki.jpg'>"
    }
   
  }else{
    console.log(enemy+"敵");
    sentence.innerHTML ="敵がいるので進めない！";
  }
}
var fight = function(){
 if(enemy==true){
   sentence.innerHTML ="敵を倒した！";
   enemy=false;
   image.innerHTML ="<img src ='img/kaidan.jpg'>"
 }
 else{
   sentence.innerHTML ="敵がいない"
   
 }
}