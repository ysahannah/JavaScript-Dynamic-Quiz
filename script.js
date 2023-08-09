//timer
var timer;
var ele = document.getElementById('timer');

//start button
const startButton = document.getElementById('start_btn');

startButton.addEventListener('click', () => {
    startButton.style.visibility = 'hidden';

})

//toggle dark/light mode
function darkLightMode() {
    var element = document.body;

    element.classList.toggle("dark-mode");
}

(function () {
    var sec = 0;
    timer = setInterval(() => {
        ele.innerHTML = '00:' + sec;
        sec ++;
    }, 1000) // each 1 second
})()
