var start = document.getElementById('start');
var reset = document.getElementById('reset');

var d = document.getElementById('day');
var h = document.getElementById('hour');
var m = document.getElementById('min');
var s = document.getElementById('sec');

// store a reference to the variable

var starttimer = null;

function timer() {
    if (d.value == 0 && h.value == 0 && m.value == 0 && s.value == 0) {
        d.value == 0;
        h.value == 0;
        m.value == 0;
        s.value == 0;
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0 && s.value == 0) {
        m.value = 60;
        h.value--;
    } else if (d.value != 0 && h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 24;
        d.value--;
    }
    return;

}

function stoptimer() {
    clearInterval(starttimer);
}

start.addEventListener('click', function() {
    // initialize the variable starttimer
    function starttimer() {
        starttimer = setInterval(function() {
            timer();
        }, 1000);
    }
    starttimer();
})


reset.addEventListener('click', function() {
    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stoptimer();

})