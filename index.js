const { readFile, writeFileSync } = require(`fs`);
const { promisify } = require(`util`);

/*
 * A sample method
*/
function sampleMethod(param1, param2, param3) {
    param1 = param3;
    console.log('Setting params equal to each other');
    param2 = param1;

    console.log('param1: %s, param2: %s, param3: %s', param1, param2, param3);
}