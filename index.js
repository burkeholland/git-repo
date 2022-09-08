const { readFileSync, writeFileSync } = require('fs');

const paths = process.argv.slice(2);
main(paths);

function main(paths) {
    // print the welcome message
    printWelcome();

    // Compute the number of lines in each file
    const data = getLineCountInfo(paths);
    console.log("Total Line Count: " + data.totalLineCount);
    writeFileSync('output.json', JSON.stringify(data, null, 2));
}

/**
 * Prints the welcome message
*/
function printWelcome() {
    console.log("Welcome To Line Counter");
}

/**
 * @param {string[]} paths
*/
function getLineCountInfo(paths) {
    const lineCounts = paths.map(path => ({ path, count: getLineCount(readFileSync(path, 'utf8')) }));
    return {
        totalLineCount: lineCounts.reduce((acc, { count }) => acc + count, 0),
        lineCounts,
    };
}

/**
 * @param {string} str 
 */
function getLineCount(str) {
    return str.split('\n').length;
}