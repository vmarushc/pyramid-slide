const button = document.getElementById("mySelect");

 button.addEventListener("change", function(event) {
 	var bricks = document.getElementById("mySelect").value;
 	printPyramid(5, bricks);
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