const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i = 0; i < usuarios.length; i++) {
    let pets = usuarios[i].pets.length
    if (pets === 0) {
        console.log(`Sou ${usuarios[i].nome} e não tenho pets`)
    } else if (pets > 1) {
        console.log(`Sou ${usuarios[i].nome} e tenho ${pets} pets`)
    } else {
        console.log(`Sou ${usuarios[i].nome} e tenho 1 pet`)
    }
}
