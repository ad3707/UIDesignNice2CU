function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Function to toggle the bar
function togglefunction() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// Function to toggle the plus menu into minus
function myFunction(x) {
    x.classList.toggle("fa fa-bars");
}

