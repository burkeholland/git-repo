const { readFile, writeFileSync } = require("fs");
const { promisify } = require("util");

/*
 * A sample method
*/
function sampleMethod(param1, param2, param3) {
    param1 = param3;
    param2 = param1;

    console.log("All params are now equal");
    console.log(`param1: ${param1}, param2: ${param2}, param3: ${param3}`);
}