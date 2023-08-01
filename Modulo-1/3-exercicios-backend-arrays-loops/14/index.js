const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrayC = []

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        arrayC.push(arrayA[i]);
    } else {
        arrayC.push(arrayB[i]);
    }
}

console.log(arrayC)