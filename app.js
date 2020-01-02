for (var i = 9; i <= 17; i++) {
  document.getElementById("grid").innerHTML += TimeSlot(i);
}

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

function TimeSlot(hour) {
  var dispTime = moment(hour, "H").format("hA");
  var text = localStorage.getItem(dispTime);

  return `<div class="row time-block">
        <div class="col-sm-2 hour">${dispTime}</div>
        <textarea class="col-sm-8 decription" data-time="${dispTime}">
        ${text}
        </textarea>
        <div class="col-sm-2 btn saveBtn">
          <i class="fas fa-save"></i>
        </div>
      </div>`;
}

var Date = "December 17, 1990";



document.getElementById("currentDay").textContent = Date;
