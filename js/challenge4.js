// ch4form.onsubmit = function() {
//   var validInput = true;
//   var name = document.querySelector("#fullname");
//   var address = document.querySelector("#streetaddress");
//   console.log(name);
//   console.log(address);
//
//   if (name.value.length == 0){
//     document.querySelector("#nameerrormsg").style.display = "block";
//     validInput = false;
//   }
//   else{
//     document.querySelector("#nameerrormsg").style.display = "none";
//   }
//
//   return false;
//
// }


$("#ch4form").submit(function(event){

  var validInput = true;
  var name = $("#fullname");
  var address = $("#streetaddr");

  console.log(name);
  console.log(address);


  if (name.val().length == 0){
    $("#nameerrormsg").css("display", "block");
    validInput = false;
    event.preventDefault();
  }
  else{
    $("#nameerrormsg").css("display", "none");
  }

  if(address.val().length == 0){
    $("#addrerrormsg").css("display", "block");
    validInput = false;
    event.preventDefault();
  }
  else{
    $("#addrerrormsg").css("display", "none");

  }

  return validInput;

})
