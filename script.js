/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let currX = initialTx; // For storing Thor's current X position, starts with initial position.
let currY = initialTy; // For storing Thor's current Y position, starts with initial position.

let moveX = ""; // For storing the calculated move on the X axis.
let moveY = ""; // For storing the calculated move on the Y axis.
let move = ""; // For storing the full move, moveX and moveY concatenated. 

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if (currX < lightX && currX < 39) {
        moveX = "E";
        currX++;
    }
    else if (currX > lightX && currX > 0) {
        moveX = "W";
        currX--;
    }

    if (currY < lightY && currY < 17) {
        moveY = "S";
        currY++;
    }
    else if (currY > lightY && currY > 0) {
        moveY = "N";
        currY--;
    }

    move = moveY + moveX;

    // Reset variables.
    moveX = "";
    moveY = "";


    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(move);
}
