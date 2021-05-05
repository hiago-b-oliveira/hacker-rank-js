// https://www.hackerrank.com/challenges/3d-surface-area/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
    // Write your code here
    let surface = 0
    let lines = A.length
    let columns = A[0].length

    const getValue = (i, j) => (i < 0 || i >= lines || j < 0 || j >= columns) ? 0 : A[i][j]

    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j <= columns; j++) {
            let curr = getValue(i, j)
            let up = getValue(i - 1, j)
            let left = getValue(i, j - 1)

            if (curr > 0) surface += 2
            surface += Math.abs(curr - up)
            surface += Math.abs(curr - left)
        }
    }

    return surface
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const H = parseInt(firstMultipleInput[0], 10);

    const W = parseInt(firstMultipleInput[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    const result = surfaceArea(A);

    ws.write(result + '\n');

    ws.end();
}
