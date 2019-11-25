// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }


console.log("here")
var imgs = $("img");
var msg = "Hover over an image below.";

// imgs.each(function(){

	imgs.mouseover(function(){
		console.log("mouesover")
		$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')")
		$("#image").html($(this).attr("alt"));

	})

	imgs.focus(function(){
		console.log("focus")
		$("#image").css("backgroundImage", "url('"+imgs.attr("src")+"')")
		$("#image").html(imgs.attr("alt"));
	})

	imgs.mouseleave(function(){
		console.log("mouesleabe")
			$("#image").css("backgroundImage", "url('')");
			$("#image").html(msg);
		})

	imgs.blur(function(){
		console.log("blur")
			$("#image").css("backgroundImage", "url('')")
			$("#image").html(msg);

		})

// })
