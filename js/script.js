
var datetime = new Date();
console.log(datetime);

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString('en-us', { weekday: "long", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });
  timeDisplay.textContent = dateString;
}
setInterval(refreshTime, 1000);




function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onscroll = function () { myFunction() };
var tab = document.getElementById("tab");
var sticky = tab.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    tab.classList.add("sticky")
  } else {
    tab.classList.remove("sticky");
  }
}
