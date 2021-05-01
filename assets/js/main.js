
filterSelection("only4");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      filterRemove(x[i], "show");
      if (x[i].className.indexOf(c) > -1) filteAdd(x[i], "show");
    }
  }
function filteAdd(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
function filterRemove(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
//   active class
  var button_active = document.getElementsByClassName("product-menu")[0];
  button_active.addEventListener("click", myFunction);
  function myFunction(e) {
          var active_buttons = document.querySelector(".active");
      if(active_buttons !=null) {
        active_buttons.classList.remove("active");
      }
      e.target.className = "active";
      }