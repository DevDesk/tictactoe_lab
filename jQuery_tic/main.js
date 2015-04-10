$(function(){
	var counter = 0;
// var squareArray = $(this).find(#"s")
var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

$('.grid-element').on('click',function()
{
	if(!$(this).find('img').hasClass("clicked"))
		{ if (counter%2===0)
			{
				$(this).find('img').attr("src","img/taco5.jpg").addClass("clicked").addClass("x");
			} else
			{
				$(this).find('img').attr("src","img/tick5.jpg").addClass("clicked").addClass("o");
			}
			counter++;
		}
	



	}				)
// if( $('img')[0].hasClass("x")){console.log("true")}

//$(item).data('index')
// var i = $('img')
// var white = $('.grid-element').find('img').attr("src","img/white.jpg")
// if( $('img')[0].src === $('img')[1].src && $('img')[0].src === $('img')[2].src )

$("#reset").on('click',function()
{
	$('.grid-element').find('img').attr("src","img/white.jpg").removeClass("clicked").removeClass("x").removeClass("o");
}
)
});



// // var userChoice = prompt "Tick or Taco?"
// document.addEventListener("DOMContentLoaded",function(){
// var newsrc1 = "img/taco5.jpg";
// var counter = 0;
// var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// 	var square = document.getElementsByClassName("grid-element")
// 	for(var i = 0; i < square.length; i++){
// 		square[i].addEventListener("click",function(){
		
// 		var ticImg = this.querySelector('img');
// 		// ticImg.setAttribute('src','img/taco5.jpg');


// 		if(this.innerText===""){
// 			if(counter%2===0){
// 				// this.innerText = "x";
// 				ticImg.setAttribute('src','img/taco5.jpg');
// 			} else {
// 				// this.innerText = "o";
// 				ticImg.setAttribute('src','img/tick5.jpg');
// 			}
// 			counter++;
// 		}
// 	});
// 	}
// 	var resetGame=document.getElementById("reset");	
// 	resetGame.addEventListener("click",function(){
// 		for (var i=0; i<square.length; i++) {
// 			// window.location.reload();	
// 		// square[i].innerText=""

// 		var ticImg = square[i].querySelector('img');
// 		ticImg.setAttribute('src','img/white.jpg')
// 		}
		
// 	})

// });




// // var edit_save = document.getElementById("square5");

// //     edit_save.src = "img/taco5.jpg";

// // var computerChoice = Math.random()
// // console.log(computerChoice)

// // alert ("clicked");
// // square[i].setAttribute('src', "/img/taco5.jpg");
// // document.images.src="/img/taco5.jpg";

// // square.addEventListener("click",function(){
// // 		alert("clicked!!!!");
// // 	});
// // });
// // // console.log(square)