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
setTimeout(() => {
    audio.play()
}, 100);
gameOver=document.querySelector('.gameOver');
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    count=0;
if (e.keyCode ==32) {
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

// position of plane adujust when press space button
//system biology geeks for geeks cvbghtg
