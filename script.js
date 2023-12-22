let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let sound = document.getElementById('audio');
btn.onclick = function(){
    body.classList.toggle('on');
    sound.play();
}
