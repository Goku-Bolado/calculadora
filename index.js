const prompt = require('prompt-sync')()
const PI = Math.PI

const raio = parseFloat(prompt("Digite o raio da circunferência: "))
const area = PI * Math.pow(raio, 2)
console.log("Área da circunferência:", area.toFixed(2))

const volume = (4 / 3) * PI * Math.pow(raio, 3)
console.log("Volume da esfera:", volume.toFixed(2))

let a = 3, b = 7, c = 12

console.log("\nAntes da troca:");
console.log("a =", a, "b =", b, "c =", c)

let temp = a
a = b
b = c
c = temp

console.log("Depois da troca:")
console.log("a =", a, "b =", b, "c =", c)
