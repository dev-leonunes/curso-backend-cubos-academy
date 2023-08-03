const comentario = "Essa Pandemia é muito perigoso!";

let coment = comentario.toLowerCase()

if (coment.includes("covid") || coment.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
}