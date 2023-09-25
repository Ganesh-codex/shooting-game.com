document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode ==32){
         re= document.querySelector('.sidebar_menu');
        re.classList.add('sidebar');
    }
}