//loop through 8 times
for (var i = 9; i <= 17; i++) {
  document.getElementById("grid").innerHTML += TimeSlot(i);
}

//save button looks to textarea and saves time and text
$(document).on("click", ".saveBtn", function() {
  var text = $(this)
    .parent()
    .find("textarea")
    .val()
    .trim();
  var time = $(this)
    .parent()
    .find("textarea")
    .attr("data-time");
  console.log(time, text);

  localStorage.setItem(time, text);
});

//creating rows
function TimeSlot(hour) {
  var dispTime = moment(hour, "H").format("hA");
  var text = localStorage.getItem(dispTime);
  var pastPresent;
  var currentTime = moment().hour();

  if (hour < currentTime) {
    pastPresent = "past";
  } else if (hour === currentTime) {
    pastPresent = "present";
  } else {
    pastPresent = "future";
  }

  return `<div class="row time-block">
        <div class="col-12 col-md-2 hour">${dispTime}</div>
        <textarea class="col-10 col-md-9 decription ${pastPresent}" data-time="${dispTime}">
        ${text}
        </textarea>
        <div class="col-2 col-md-1 btn saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </div>`;
}

// if (dispTime === 9) {
//   textarea.attr("class", "col-md-9 decription present");
// }

//Get date to appear on rotating basis
var Date = moment().format("LL");
document.getElementById("currentDay").textContent = Date;

//TRIED AND FAILED

//loop to check the time and see what time it is, then color the spaces appropriately

// if (moment().hour() < 9) {
//   $textarea9.attr("class", "textarea col-md-9 future");
// } else if (moment().hour() > 9) {
//   $textarea9.attr("class", "textarea col-md-9 past");
// } else if (moment().hour() === 9) {
//   $textarea9.attr("class", "textarea col-md-9 present");
// }
// if (8 < 9) {
//   $dispTime.attr("class", "textarea col-md-9 present");
// }
// var test = moment(). format("hh");

// if {
//   moment().hour()<this_hr || if moment().hour()===this_hr || moment().hour()
// };

//if moment().hour() < this_hr then future, if === this_hr then present, if > this_hr then past

//  if ("data-time" == 10) {
//    console.log(true);
//  } else if ("data-time" == 9) {
//    console.log(false);
//  }
