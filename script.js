var currentDayEl=$('#currentDay');
var currentTImeEl=$('#currentTime');
var now = new Date().getHours();

currentDayEl = $("#currentDay").text(moment().format('MMMM DD, YYYY'));
// currentDayEl = $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function displayTime() {
//     var currentTimeEl = moment().format('MMM DD, YYYY');
//     // currentTimeEl.text(rightNow);
//   }



// var currentTime = $("#currentTime").text(moment().format('LTS'));

// var now = new Date().getHours();
// console.log  now 
// set color for time blocks - past, present, future

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// function saveText(){
//     $("saveBtn").on("click", function(){

//         var time = $(this).parent().attr("id");
//         var text = $(this).siblings(".text").value();

//         $("#9".text).val(localStorage);
//         getItem("#9");

//         // localStorage.setItem(time, text);
//         // localStorage.getItem(time, text);
//     })
// };

$("saveBtn").on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".text").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, text);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(time, text);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".text").val(currPlan);
        }
    })
    };

timeBlockColor();
usePlanner();