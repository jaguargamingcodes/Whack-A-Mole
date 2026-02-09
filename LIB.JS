valTime = 700;

function Easy() {
    valTime = 1000;
}

function Med() {
    valTime = 700;
}

function Hard() {
    valTime = 500;
}
if(localStorage.getItem('Highscore') == null) {
    localStorage.setItem('Highscore', 0)
}
const Home = document.getElementById('homeContent')
points = 0;
function start() {
    console.log(valTime)
    document.body.style = "background-color: #252105"
    Home.style.display = 'none'
    document.getElementById('playContent').style.display = "block"
    document.getElementById('a1').style = 'background-image: none;'
    document.getElementById('a2').style = 'background-image: none;'
    document.getElementById('a3').style = 'background-image: none;'
    document.getElementById('a4').style = 'background-image: none;'
    document.getElementById('a5').style = 'background-image: none;'
    document.getElementById('a6').style = 'background-image: none;'
    document.getElementById('a7').style = 'background-image: none;'
    document.getElementById('a8').style = 'background-image: none;'
    document.getElementById('a9').style = 'background-image: none;'
    function lose() {
       alert(`Time's Up, You got ${points} Points And Your Highscore is: ${localStorage.getItem('Highscore')}`)        
       points = points - points;
       start();
       document.getElementById('playContent').style.display = 'none';
       document.getElementById('homeContent').style.display = 'block';
       document.body.style.backgroundColor = 'black';
       location.reload()
    }
    function play() {
        selector = Math.floor(Math.random() * 9);
        if (selector == 0) {
            document.getElementById('a1').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s); ';
        }
        else if (selector == 1) {
            document.getElementById('a2').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 2) {
            document.getElementById('a3').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 3) {
            document.getElementById('a4').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 4) {
            document.getElementById('a5').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 5) {
            document.getElementById('a6').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 6) {
            document.getElementById('a7').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 7) {
            document.getElementById('a8').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }
        else if (selector == 8) {
            document.getElementById('a9').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);'
        }

        if(Number(localStorage.getItem('Highscore')) === 0 || Number(localStorage.getItem('Highscore')) < points) {
            localStorage.setItem("Highscore",points + 0);
            console.log('here');
}

        console.log(selector)
    }

    setInterval(play, valTime)
    setTimeout(lose, 10000)
}

function change() {
    points++;
    console.log()
}

function check_1() {
    if (document.getElementById('a1').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a1').style = 'background-color: rgb(0,0,0);'
    }
}

function check_2() {
    if (document.getElementById('a2').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a2').style = 'background-color: rgb(0,0,0);'
    }
}

function check_3() {
    if (document.getElementById('a3').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a3').style = 'background-color: rgb(0,0,0);'
    }
}

function check_4() {
    if (document.getElementById('a4').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a4').style = 'background-color: rgb(0,0,0);'
    }
}

function check_5() {
    if (document.getElementById('a5').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a5').style = 'background-color: rgb(0,0,0);'
    }
}

function check_6() {
    if (document.getElementById('a6').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a6').style = 'background-color: rgb(0,0,0);'
    }
}

function check_7() {
    if (document.getElementById('a7').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a7').style = 'background-color: rgb(0,0,0);'
    }
}

function check_8() {
    if (document.getElementById('a8').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a8').style = 'background-color: rgb(0,0,0);'
    }
}

function check_9() {
    if (document.getElementById('a9').style = 'background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlS6Se_4FxoU6QdhMMW-SaUFSTEUt_YD2hAOihHkNSw&s);') {
        change();
        document.getElementById('a9').style = 'background-color: rgb(0,0,0);'
    }
}

document.getElementById('pointTeller').innerHTML = `High-Score: ${localStorage.getItem('Highscore')}!`

console.log(valTime)