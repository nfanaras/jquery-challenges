// ch3form.onsubmit = function(){
//   var fruit =
//   document.querySelectorAll('input[name="fruit"]');
//
//   for (let i = 0; i < fruit.length; i++){
//     if (fruit[i].checked){
//       return true;
//     }
//   }
//
//   alert("You must pick a fruit!");
//   return false; //wont submit
// }

$("#ch3form").submit(function(event){

  var fruit = $('input[name=fruit]:checked');
  var con = false;
  var standing = $('input[name=standing]:checked');
  console.log("IN");

  if ((fruit.val()!=undefined) && (standing.val() != undefined)){
    console.log("checked");
  }
  else{
    event.preventDefault();
    alert("You must pick a fruit and standing!");
  }

  // for (var i = 0; i < fruit.length; i++){
  //   if(fruit[i].prop('checked')){
  //     return true;
  //   }
  //
  // fruit.each(function(){
  //
  //   if (fruit.prop.('checked')){
  //     console.log("checked");
  //     con = true;
  //   }
  // })
  //
  // standing.each(function(){
  //   if(this.checked){
  //     console.log("checked");
  //     con = true;
  //   }
  // }
  //
  // if (con == false){
  //
  //
  //
  // }

})
