//tests to make sure the files linked properly
console.log('fired!');

$("#camera_3").hover(function(){
$(this).animate({
opacity: 0.25
});
},function()
{
$(this).animate({
opacity: 1
});
});



//CONSOLE LOG PRINTING

	// this selects the button under the first SVG
    let iconButton = document.querySelector("button");

    // this selects the inline SVG - I added an ID to it (see above)
    let cheese = document.querySelector('#cheese');

    // this selects the inline SVG - I added an ID to it (see above)
    let meat = document.querySelector('#meat_6');

    // this function runs when you click on the button
    function logIcon() {
      console.log("log Icon function fired");
    }

    // this function runs when you click on the inline SVG #1
    function logCheese() {
      console.log("log Cheese function fired");
    }

    // this function runs when you click on the inline SVG #2
    function logMeat() {
      console.log("log Meat function fired");
    }

    // event handling for the button
    iconButton.addEventListener("click", logIcon);

    // event handling for the inline SVG
    cheese.addEventListener("click", logCheese)


    meat.addEventListener("click", logMeat)








