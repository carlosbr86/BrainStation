//Write your jQuery code in this file

//1 Correcting the misspelling
$("#edit-header").html('The jQuery Challenge')
console.log("1 - Header correct!");

//2 Changing the background from red to green
$("#box1").css('background','green');
console.log("2 - Box Green!");

//3  Changing the font-size and font-weight in only one line!
$("#para1").css({'font-weight':' bold', 'font-size': '24px'});
console.log("3 - Font Big&Bold!");


//4 Adding the class SPIN
$(".box2").addClass("spin");

//5 Using Alert
$("#button1").click(my_click_function);
    function my_click_function() {
        alert("Clicked!");
        }

//6 Changing Effects when pass the mouse. I could use mouse over, shoul be simple.
// But these ideas wasnt mine 
$(document).ready(function() {
   $('#box3').mouseenter(function() {
      $("#box3").css('background','green');
   });
   $('#box3').mouseleave(function() {
       $("#box3").css('background','red');
   });
});

//7  Printing in the console the input
$("#input1").keypress(function(e){
    console.log(e.key);
});

// 8 Moving the box. I tried to make a cicle.
    $("#box4").css({"top":"auto",  "left":"auto"});    
    $("#box4").animate({
        "bottom":"0px",
        "right":"0px"
        }, 2000
    );

    $("#box4").css({"bottom":"auto",  "right":"auto"});    
    $("#box4").animate({
        "top":"0px",
        "left":"0px"
        }, 2000
    );

setInterval(function(){

    $("#box4").css({"top":"auto",  "left":"auto"});    
    $("#box4").animate({
        "bottom":"0px",
        "right":"0px"
        }, 2000
    );

    $("#box4").css({"bottom":"auto",  "right":"auto"});    
    $("#box4").animate({
        "top":"0px",
        "left":"0px"
        }, 2000
    );
}, 4001)
