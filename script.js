function closeOpener(){
    document.getElementById("opener").style.display = "none";

}

function myFunction() {
    document.getElementById("quizzes").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.quizzes')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function certificate(){
    const printBtn = document.getElementById("print");

    printBtn.addEventListener("click", function(){
      print();
    })
}