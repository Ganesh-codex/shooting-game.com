d=document.querySelector('.plane');
console.dir(d);
s=document.querySelector('.shooter')
d2=document.querySelector('#splane');
d3=document.querySelector('#tplane');
t=document.querySelector('.car');
audio = new Audio('m.mp3');
audiogo = new Audio('f.mp3');
audiog = new Audio('g.mp3');
v=document.getElementById('video');
score=0;
gameOver=document.querySelector('.gameOver');
setTimeout(() => {
    audio.play()
}, 100);
count=0;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode ==32){
    
        count=count+1;
        console.log(count);
        ox = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'));
        // const el = document.getElementById("plane");
        d.style.left=ox + "px";

        if (count%2==0) {
            re= document.querySelector('.sidebar_menu');
             re.classList.remove('sidebar');
            d.classList.add('planeAni');
          

            //   d2.classList.add('planeAni');
            //   d3.classList.add('planeAni');
            //   t.classList.add('planeAni');
             if(score>=15){
                d2.classList.add('planeAni');
               
              }
              if(score>=30){
                 console.log('plane 3')
               
              }
              if(score>=5){
                t.classList.add('planeAni');
               }
            
           audio.play();
        console.log(" game play");
        }
        else{
            re= document.querySelector('.sidebar_menu');
            re.classList.add('sidebar');
            d.classList.remove('planeAni');
            d2.classList.remove('planeAni');
            d3.classList.remove('planeAni');
            t.classList.remove('planeAni');
            audio.pause();
        }
        
    }
}
function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
d.addEventListener("click" , () => {
     d.classList.add('click');
     audiogo.play();
     score=score+1;
     updateScore(score);
     setTimeout(() => {
        d.classList.remove('click');
    }, 100);
    v.play();
    
    
})
t.addEventListener("click" , () => {
     t.classList.add('click');
     audiogo.play();
     score=score+1;
     updateScore(score);
     setTimeout(() => {
        t.classList.remove('click');
    }, 100);
    v.play();
    // audiogo.pause();
    
})
d2.addEventListener("click",()=>{
    d2.classList.add('click');
    audiogo.play();
    score=score+1;
    updateScore(score);
    setTimeout(() => {
       d2.classList.remove('click');
   }, 100);
   v.play();
})
d3.addEventListener("click",()=>{
    d3.classList.add('click');
    audiogo.play();
    score=score+1;
    updateScore(score);
    setTimeout(() => {
       d3.classList.remove('click');
   }, 100);
   v.play();
})



setInterval( ()=>{
    dx = parseInt(window.getComputedStyle(s, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(s, null).getPropertyValue('top'));
     ox = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(d, null).getPropertyValue('top'));
    oz= parseInt(window.getComputedStyle(d2, null).getPropertyValue('left'));
    x= parseInt(window.getComputedStyle(t, null).getPropertyValue('left'));
    window.getComputedStyle(d);

//    console.log(oy);
     if (ox<16||oz<16||x<16){
         gameOver.innerHTML = "Game Over - Reload to Play Again";
         d.classList.remove('planeAni');
         d2.classList.remove('planeAni');
         d3.classList.remove('planeAni');
         t.classList.remove('planeAni');
         //  d.classList.remove('planeAni');
        //    audiogo.play();
           audiog.play()
           setTimeout(() => {
               audiogo.pause();
               audio.pause();
           }, );
        //    const el = document.getElementById("plane");
           d.style.left=1250+ "px";
        //    this function to control the pause button
           document.onkeydown = function (e) {
            console.log("Key code is: ", e.keyCode);
            if(e.keyCode ==32){}
           }
           
        };
      if(score==15){
        d2.classList.add('planeAni');
        console.log("plane 2");
      }
      if(score==3){
        console.log('plane 3')
        d3.classList.add('planeAni');
      }
      if(score==5){
        t.classList.add('planeAni');
      }


},10);
// position of plane adujust when press space button





