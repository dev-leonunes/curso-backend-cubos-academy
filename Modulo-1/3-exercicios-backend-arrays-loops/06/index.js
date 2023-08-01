const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let par = 0

for (let i of numeros) {
    if (i % 2 === 0) {
        par += i
    }
}

console.log(par)