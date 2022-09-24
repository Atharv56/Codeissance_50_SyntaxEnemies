function init() {
  if(localStorage.getItem("progress") == null) {
      localStorage.setItem("progress", 0);
      
  }
  console.log(localStorage.getItem("progress"));
}

function progress() {
  var progress = localStorage.getItem("progress");
  move(progress);
}

// document.getElementById("progCheck").addEventListener('change', checkBox(this))

function checkBox(cb) {
  if(cb.checked) {
      var pg = localStorage.getItem("progress");
      pg++;
      localStorage.setItem("progress", pg);
      progress();
  }
  else {
      var pg = localStorage.getItem("progress");
      pg--;
      localStorage.setItem("progress", pg);
      progress();
  }
}
// function test(cb) {
//     console.log("Clicked, new value = " + cb.checked);
//   }

document.addEventListener("DOMContentLoaded", function() {
  init();
  progress();
  
});

function move(val) {
  var i = 0;
  
if (i == 0) {
  i = 1;
  var elem = document.getElementById("bar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= val*100/6) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}
}