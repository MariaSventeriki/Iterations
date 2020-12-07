/*console.log('Xmas tree');
let height = 5; // This is how many lines we want . Like how many times we will console log
let counter = 1; //How many times we will increase 
let output = '*';

while (counter <= height) {
    let spaces = '';
    let subCounter = height;

while (subCounter > counter) {
    spaces += ' ';
    subCounter -= 1;
}
    console.log(spaces + output);
    output += '**';
    counter += 1;
}*/

console.log('Diamond');
let height = 10; // This is how many lines we want . Like how many times we will console log
let counter = 1; //How many times we will increase 
let output = '*';
let starCounter = 7;

while (counter <= height) {
    spaces = '';
    subCounter = height / 2;

    if (counter <= 5) {
        while (subCounter > counter) {
            spaces += 'p';
            subCounter -= 1;

        }
        console.log(spaces + output);
        output += '**';
    } else {
        output = '';
        while (subCounter < counter) {
            spaces += 'o';
            subCounter += 1;
        }
        while (starCounter > subCounter) {
            starCounter -= 1;
            output += '*';


        }
        console.log(spaces + output);
    }

    counter += 1;
}

console.log('Iternal Diamond');
counter = 4;
spaces = '';

while (counter >= 1) {

    subCounter = 1;
    output = '*';


    while (subCounter <= counter) {
        subCounter += 1;
        output += '*';
    }

    console.log(output + spaces + output);
    spaces += '  ';
    counter -= 1;
}

counter = 4;
output = '*';

while (counter >= 0) {

    subCounter = 1;
    spaces = '';

    while (subCounter <= counter) {
        subCounter += 1;
        spaces += '  ';
    }

    console.log(output + spaces + output);
    spaces += '  ';
    output += '*';
    counter -= 1;
}
