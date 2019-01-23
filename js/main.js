//console.log("Java Script Linked Up");

/*
(() => {
	// this is a self invoking anonymous fuction
	console.log('fired!');

	// these are the elements that you want to refrence on the page (the icons in this case)

	var badge = document.querySelector("img");

	// slects all elements with that class
	var otherBadges = document.querySelectorAll('.jpgBadge')


	// functions are the same in JS as in Python: what do you want to have happen on a click?
	function logBadgeId()
		console.log(this.id);
		debugger;
	}


	// what events are we listening for? clicks? mouseover? and what should happen when we hear one
	badge.addEvenListener("click", logBadgeId);


	//debugger;

	otherBadges.forEach(thisbadge => thisbadge.addEvenListener("click", logBadgeId));

})();

console.log("adam");
var padam = (4)
var adam = (6)
console.log(padam + adam);
*/


TweenMax.to("#photo_4", 2, {left: 10});

