const { readFile, writeFileSync } = require('fs');
const { promisify } = require('util');

/*
 * A sample method
*/
function sampleMethod(param1, param2, param3) {
    console.log("Set all params equal to each other");
    param1 = param2;
    param2 = param3;

    console.log("All params are now equal to each other");
}