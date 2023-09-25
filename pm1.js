d=document.querySelector('.plane');
console.dir(d);
s=document.querySelector('.shooter')
d2=document.querySelector('#splane');
audio = new Audio('m.mp3');
audiogo = new Audio('f.mp3');
score=0;
gameOver=document.querySelector('.gameOver');
setTimeout(() => {
    audio.play()
}, 100);
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
})


setInterval( ()=>{
    dx = parseInt(window.getComputedStyle(s, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(s, null).getPropertyValue('top'));
     ox = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(d, null).getPropertyValue('top'));
    oz= parseInt(window.getComputedStyle(d2, null).getPropertyValue('left'));

//    console.log(oy);
        
     if (ox<16||oz<16){
         gameOver.innerHTML = "Game Over - Reload to Play Again";
         d.classList.remove('planeAni');
         d2.classList.remove('planeAni');
         //  d.classList.remove('planeAni');
           audiogo.play();
           setTimeout(() => {
               audiogo.pause();
               audio.pause();
           }, );
 
      }
      if(score==10){
        d2.classList.add('planeAni');
      }

},10);


