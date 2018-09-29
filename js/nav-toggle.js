function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "") {
    x.className = "dropped";
  } else {
    x.className = "";
  }
}