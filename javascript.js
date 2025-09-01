let isFacingLeft = false
let index = 0

let isBorder = true

setInterval(function() {
    if (isFacingLeft === false && index != 5) {
        document.getElementById('destroymanIII').style.transform = 'rotateY(0deg)';
        isFacingLeft = true;
    } else if (index != 5) {
        document.getElementById('destroymanIII').style.transform = 'rotateY(180deg)';
        isFacingLeft = false;
    }
    if (index === 5) {
        document.getElementById('destroymanIII').style.transform = 'rotateZ(360deg)'
        index = 0
    }
    index++
}, 500);

setInterval(function() {
    if (isBorder === true) {
        document.getElementById('typingTextSpan').style.borderRight = 'none'
        isBorder = false
    }
    else {
        document.getElementById('typingTextSpan').style.borderRight = '3px solid #26362a'
        isBorder = true
    }
}, 650)