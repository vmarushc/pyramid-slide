printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
   	for (let i = 1, spaces = '&nbsp;', bricks = '#'; i <= height; i++) {

   		var p = document.createElement('p');
   		p.innerHTML = `${spaces.repeat(height - i)}${bricks.repeat(i + 1)}`;
   		document.getElementById('pyramid').appendChild(p);
   	}
}