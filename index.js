//Accès au boutton par l'Id

var Qbutton = document.getElementById('btnQ');
var Sbutton = document.getElementById('btnS');
var Dbutton = document.getElementById('btnD');
var Fbutton = document.getElementById('btnF');
var Gbutton = document.getElementById('btnG');
var Hbutton = document.getElementById('btnH');
var Jbutton = document.getElementById('btnJ');
var Kbutton = document.getElementById('btnK');
var Lbutton = document.getElementById('btnL');

var allButtons = document.getElementsByClassName('keyBTN')[0];

var Qmusic = document.getElementById('Qkey');
var Smusic = document.getElementById('Skey');
var Dmusic = document.getElementById('Dkey');
var Fmusic = document.getElementById('Fkey');
var Gmusic = document.getElementById('Gkey');
var Hmusic = document.getElementById('Hkey');
var Jmusic = document.getElementById('Jkey');
var Kmusic = document.getElementById('Kkey');
var Lmusic = document.getElementById('Lkey');

document.body.addEventListener('keydown', function(e) {
    // var keyCharacter=event.key;//This gives sensitive case character
    var keyCharacter = String.fromCharCode(e.keyCode);
    // Qbutton.style.backgroundColor='Yellow';
    switch (keyCharacter) {
        case 'Q':
            Qmusic.play();
            Qbutton.style.backgroundColor = 'red';
            // Qmusic.autoplay='true';
            // Qmusic.autoplay;
            console.log(Qmusic);
            break;
        case 'S':
            Smusic.play();
            Sbutton.style.backgroundColor = 'Yellow';
            break;
        case 'D':
            Dmusic.play();
            Dbutton.style.backgroundColor = 'Yellow';
            break;
        case 'F':
            Fmusic.play();
            Fbutton.style.backgroundColor = 'Yellow';
            break;
        case 'G':
            Gmusic.play();
            Gbutton.style.backgroundColor = 'Yellow';
            break;
        case 'H':
            Hmusic.play();
            Hbutton.style.backgroundColor = 'Yellow';
            break;
        case 'J':
            Jmusic.play();
            Jbutton.style.backgroundColor = 'Yellow';
            break;
        case 'K':
            Kmusic.play();
            Kbutton.style.backgroundColor = 'Yellow';
            break;
        case 'L':
            Lmusic.play();
            Lbutton.style.backgroundColor = 'Yellow';
            break;
        default:
            alert('Kindly press amongst shown Keyboard buttons on screens.');
            console.log(event.key);
    }




})




document.body.addEventListener('keyup',
    function(e) {
        var keyCharacter = String.fromCharCode(e.keyCode);
        switch (keyCharacter) {
            case 'Q':
                Qbutton.style.backgroundColor = '';
                break;
            case 'S':
                Sbutton.style.backgroundColor = '';
                break;
            case 'D':
                Dbutton.style.backgroundColor = '';
                break;
            case 'F':
                Fbutton.style.backgroundColor = '';
                break;
            case 'G':
                Gbutton.style.backgroundColor = '';
                break;
            case 'H':
                Hbutton.style.backgroundColor = '';
                break;
            case 'J':
                Jbutton.style.backgroundColor = '';
                break;
            case 'K':
                Kbutton.style.backgroundColor = '';
                break;
            case 'L':
                Lbutton.style.backgroundColor = '';
                break;
            default:
        }
    })