
    
function startquiz() {
    showques1();
    hideins();
    showsubmit();
}

function showques1() {
    document.getElementById("q1").style.display= "block"
}

function hideins() {
    document.getElementById("ins").style.display= "none"
}

function showsubmit() {
    document.getElementById("sub").style.display= "block"
}

function showTimer() {
    document.getElementById("time").style.display= "block"
}

    var c = 0;
    var t;
    var timer_is_on = 0;

function timedCount() {
    document.getElementById("txt").value = c;
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function startcount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
}
}
