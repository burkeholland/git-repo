const { readFile, writeFileSync } = require("fs");
const { promisify } = require('util');

const paths = process.argv.slice(2);
main(paths); // some comment

async function main(paths) {
    // print the welcome message
    printWelcome();

    // Compute the number of lines in each file
    const data = await getLineCountInfo(paths);
    console.log("Total Line Count: " + data.totalLineCount);
    writeFileSync('output.json', JSON.stringify(data, null, 2));
}

/**
 * Prints the welcome message
*/
function printWelcome() {
    console.log("Welcome To Line Counter");
}

/*
 * Gather results from all files
*/
function gatherResults(paths, lineCounts) {
    // Gather the results
}

/**
 * @param {string[]} paths
*/
async function getLineCountInfo(paths) {
    const lineCounts = await Promise.all(
        paths.map(async path => ({
            path,
            count: getLineCount(await promisify(readFile)(path, 'utf8')) }
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
function getLineCount(str) {
    return str.split('\n').length;
}