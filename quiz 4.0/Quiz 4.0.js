
var c = 0;
var t;
var timer_is_on = 0;
var myvar1
var myvar2
var myvar3
var myvar4
var myvar5
var myvar6
var myvar7
var myvar8
var myvar9
var myvar10


      function Startquiz() {
        start1();
        start2();
        start3();
        start4();
        start5();
        start6();
        start7();
        timer1();
        showtimer();
        startCount1();
      } 
      
      function start1() {
        document.getElementById("Instructions1").style.display = "none";

}
function start2() {
        document.getElementById("Instructions2").style.display = "none";

}
function start3() {
        document.getElementById("Instructions3").style.display = "none";

}
function start4() {
        document.getElementById("Instructions4").style.display = "none";

}
function start5() {
        document.getElementById("Instructions5").style.display = "none";

}
function start6() {
        document.getElementById("Question1").style.display = "block";

}
function start7() {
        document.getElementById("options1").style.display = "block";

}
function timer1() {
myvar1 = setTimeout(Ques2, 10000)
}
function showtimer() {
document.getElementById("txt1").style.display = "block";
}


function timedCount() {
document.getElementById("txt1").value = c;
c = c + 1;
t = setTimeout(timedCount, 1000);
}

function startCount1() {
if (!timer_is_on) {
timer_is_on = 1;
timedCount();
}
}
function Ques2() {
hideques1();
hideoptions1();
showquestion2();
showoptions2();
timer2();
stoptimer1();
}
function hideques1() {
document.getElementById("Question1").style.display = "none";

}
function hideoptions1() {
document.getElementById("options1").style.display = "none";

}
function showquestion2() {
document.getElementById("Question2").style.display = "block";

}
function showoptions2() {
document.getElementById("options2").style.display = "block";

}
function timer2() {
myvar2 = setTimeout(Ques3, 10000)
}
function stoptimer1() {
clearTimeout(myVar1);
}

function Ques3() {
hideques2();
hideoptions2();
showquestion3();
showoptions3();
timer3();
stoptimer2();
}
function hideques2() {
document.getElementById("Question2").style.display = "none";

}
function hideoptions2() {
document.getElementById("options2").style.display = "none";

}
function showquestion3() {
document.getElementById("Question3").style.display = "block";

}
function showoptions3() {
document.getElementById("options3").style.display = "block";

}function timer3() {
myvar3 = setTimeout(Ques4, 10000)
}
function stoptimer2() {
clearTimeout(myVar2);
}


function Ques4() {
hideques3();
hideoptions3();
showquestion4();
showoptions4();
timer4();
stoptimer3();
}
function hideques3() {
document.getElementById("Question3").style.display = "none";

}
function hideoptions3() {
document.getElementById("options3").style.display = "none";

}
function showquestion4() {
document.getElementById("Question4").style.display = "block";

}
function showoptions4() {
document.getElementById("options4").style.display = "block";

}function timer4() {
myvar4 = setTimeout(Ques5, 10000)
}
function stoptimer3() {
clearTimeout(myVar3);
}

function Ques5() {
hideques4();
hideoptions4();
showquestion5();
showoptions5();
timer5();
stoptimer4();
}
function hideques4() {
document.getElementById("Question4").style.display = "none";

}
function hideoptions4() {
document.getElementById("options4").style.display = "none";

}
function showquestion5() {
document.getElementById("Question5").style.display = "block";

}
function showoptions5() {
document.getElementById("options5").style.display = "block";

}
function timer5() {
myvar5 = setTimeout(Ques6, 10000)
}
function stoptimer4() {
clearTimeout(myVar4);
}

function Ques6() {
hideques5();
hideoptions5();
showquestion6();
showoptions6();
timer6();
stoptimer5();
}
function hideques5() {
document.getElementById("Question5").style.display = "none";

}
function hideoptions5() {
document.getElementById("options5").style.display = "none";

}
function showquestion6() {
document.getElementById("Question6").style.display = "block";

}
function showoptions6() {
document.getElementById("options6").style.display = "block";

}
function timer6() {
myvar6 = setTimeout(Ques7, 10000)
}
function stoptimer5() {
clearTimeout(myVar5);
}

function Ques7() {
hideques6();
hideoptions6();
showquestion7();
showoptions7();
timer7();
stoptimer6();
}
function hideques6() {
document.getElementById("Question6").style.display = "none";

}
function hideoptions6() {
document.getElementById("options6").style.display = "none";

}
function showquestion7() {
document.getElementById("Question7").style.display = "block";

}
function showoptions7() {
document.getElementById("options7").style.display = "block";

}
function timer7() {
myvar7 = setTimeout(Ques8, 10000)
}
function stoptimer6() {
clearTimeout(myVar6);
}

function Ques8() {
hideques7();
hideoptions7();
showquestion8();
showoptions8();
timer8();
stoptimer7();
}
function hideques7() {
document.getElementById("Question7").style.display = "none";

}
function hideoptions7() {
document.getElementById("options7").style.display = "none";

}
function showquestion8() {
document.getElementById("Question8").style.display = "block";

}
function showoptions8() {
document.getElementById("options8").style.display = "block";

}
function timer8() {
myvar8 = setTimeout(Ques9, 10000)
}
function stoptimer7() {
clearTimeout(myVar7);
}

function Ques9() {
hideques8();
hideoptions8();
showquestion9();
showoptions9();
timer9();
stoptimer8();
}
function hideques8() {
document.getElementById("Question8").style.display = "none";

}
function hideoptions8() {
document.getElementById("options8").style.display = "none";

}
function showquestion9() {
document.getElementById("Question9").style.display = "block";

}
function showoptions9() {
document.getElementById("options9").style.display = "block";

}
function timer9() {
myvar9 = setTimeout(Ques10, 10000)
}
function stoptimer8() {
clearTimeout(myVar8);
}

function Ques10() {
hideques9();
hideoptions9();
showquestion10();
showoptions10();
timer10();
stoptimer9();
}
function hideques9() {
document.getElementById("Question9").style.display = "none";

}
function hideoptions9() {
document.getElementById("options9").style.display = "none";

}
function showquestion10() {
document.getElementById("Question10").style.display = "block";

}
function showoptions10() {
document.getElementById("options10").style.display = "block";

}
function timer10() {
myvar10 = setTimeout(result, 10000)
}
function stoptimer9() {
clearTimeout(myVar9);
}

function result() {
   // body...
   var score=0;
   if (document.getElementById('correct1').checked)
   {
     score++;
     }
    if (document.getElementById('correct2').checked)
   {
     score++;
     }
    if (document.getElementById('correct3').checked)
   {
     score++;
     }
    if (document.getElementById('correct4').checked)
   {
     score++;
     }
    if (document.getElementById('correct5').checked)
   {
     score++;
     }
    if (document.getElementById('correct6').checked)
   {
     score++;
     }
    if (document.getElementById('correct7').checked)
   {
     score++;
     }
    if (document.getElementById('correct8').checked)
   {
     score++;
     }
    if (document.getElementById('correct9').checked)
   {
     score++;
     }
    if (document.getElementById('correct10').checked)
   {
     score++;
     }
     alert("Time's Up!...Your Score is:"+score);
}