var bricks = "#";
var height = 8;
printPyramid(height, bricks);

const select = document.getElementById("mySelect");
select.addEventListener("change", function(event) {
	bricks = document.getElementById("mySelect").value;
	printPyramid(height, bricks);
});

const element_height = document.getElementById("height"); 
element_height.addEventListener("change", function(event) {
	height = document.getElementById("height").value;
	printPyramid(height, bricks);
});

function printPyramid(height, bricks) {

	document.getElementById('construction').remove();
	document.getElementById('pyramid').innerHTML = '<div id="construction"></div>';
	var container = document.getElementById('construction');



   	for (let i = 1, spaces = '&nbsp;'; i <= height; i++) {

   		var p = document.createElement('p');
   		p.innerHTML = `${spaces.repeat(height - i)}${bricks.repeat(i + 1)}`;
   		container.appendChild(p);
   	}
}
