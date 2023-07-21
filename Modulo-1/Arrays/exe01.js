let n = [1, 30, 12, 3, 7]

for (let i = 0; i < n.length; i++) {
    console.log(n[i])
}

let i = 0

while (i < n.length) {
    console.log(n[i])
    i++
}

for (let num of n) {
    console.log(num)
}