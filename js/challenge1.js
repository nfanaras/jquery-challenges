
//USE console.log !!!!!!!!

$("#subscribe").click(function(){
  var x = $("#emailField");
  if(this.checked){ //this is talking about subscribe
    console.log("Selected");
    x.css("display", "block");

  }
  else{
    console.log("Not selected");
    x.css("display", "none");
  }
})



// subscribe.onchange = function() {
//
//   var field = document.querySelector('#emailField');
//
//   if (this.checked){
//     console.log("Selected");
//     field.style.display = "block";
//
//   }
//   else{
//     console.log("Not selected");
//     field.style.display = "none";
//   }
//
//   console.log("Click");
//
// }
