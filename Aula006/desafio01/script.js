window.document.write("<h2>Informações</h2>")

//Variáveis 
let lutador = "Fedor Vladimirovich Emelianenko"
let nacionalidade = "Russo"
let idade = 44
let peso = 106
let altura = 1.83

//Mostrar na tela as variáveis.
window.document.write("Lutador: " + lutador + "<br>")
window.document.write("Nacionalidade: " + nacionalidade + "<br>")
window.document.write("Idade: " + idade + " anos <br>")
window.document.write("peso: " + peso + " kg <br>")
window.document.write("Altura: " + altura + " m <br>")

window.document.write("<h2>Frase do dia</h2>")

//Constantes
const dia = 15
const mes = 07
const ano = 2024
const msg = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resumi curiosidade"
const autoria = "Aaron Swartz"

//Mostrar na tela as constantes.
window.document.write(`${dia}/${mes}/${ano} <br>`)
window.document.write(msg + "<br>")
window.document.write(autoria)

window.document.write("<h2>Array de meses do ano</h2>")

//Arrays
let mesesAno = ["Janeiro","Fevereiro","Março"]

window.document.write(`${mesesAno[0]}, ${mesesAno[1]}, ${mesesAno[2]}...`)

window.document.write("<h2>Objetos jogos</h2>")

//Objetos
let jogos = {
    jogo : "League Of Legends - LOL",
    desenv : "Riot Games",
    ano : 2009
}
window.document.write("Jogo: " + jogos.jogo + "<br>")
window.document.write("Desenvolvido por: " + jogos.desenv + "<br>")
window.document.write("Ano do lançamento: " + jogos.ano + "<br>")
