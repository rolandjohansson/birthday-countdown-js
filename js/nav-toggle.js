//Run navToggle on click on a menu-item
$("a.menu-item").click(function(){
  navToggle();
});

function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "") {
    x.className = "dropped";
  } else {
    x.className = "";
  }
}