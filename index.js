const { readFile } = require('fs');
const { promisify } = require('util');

let paths = process.argv.slice(2);
main(paths);

async function main(paths) {
    // print the welcome message
    printMessage();

    // Compute the number of lines in each file
    let data = await getLineCountInfo(paths);
    console.log("Total Line Count: " + data.totalLineCount);
}

/**
 * Prints the welcome message
*/
function printMessage() {
    console.log("Welcome To Line Counter");
}

/**
 * @param {string[]} paths
*/
async function getLineCountInfo(paths) {
    let lineCounts = await Promise.all(
        paths.map(async path => ({
            path,
            count: getLinesLength(await promisify(readFile)(path, 'utf8')) }
        ))
    );
    return {
        totalLineCount: lineCounts.reduce((acc, { count }) => acc + count, 0),
        lineCounts,
    };
}

/**
 * @param {string} str 
 */
function getLinesLength(str) {
    return str.split('\n').length;
}