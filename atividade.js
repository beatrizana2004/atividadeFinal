const body = document.querySelector('body');
body.style.height = '100vh';
body.style.overflow = `hidden`
body.style.backgroundColor = 'violet';
body.style.display = 'flex';
body.style.flexDirection= 'column'
body.style.justifyContent = 'space-between';
body.style.alignItems = 'center'

const header = document.createElement('header')
header.style.width = '150%'
header.style.height = '8%'
header.style.display ='flex'
header.style.backgroundColor= 'blue'
body.appendChild(header)


const div2 = document.createElement('div2')
div2.style.width = `1000px`;
div2.style.height = `500px`;
div2.style.display = `flex`;
div2.style.justifyContent = `space-evenly`;
div2.style.flexDirection = 'column'
div2.style.alignItems = `center`;
div2.style.backgroundColor = `blue`;
div2.style.borderRadius = '50px'
body.appendChild(div2);

const textoDiv = document.createElement(`h1`);
textoDiv.textContent = `Atividade Programação Web`;
div2.appendChild(textoDiv);

const nome = document.createElement('input')
nome.style.width = '500px'
nome.style.height = '30px'
nome.placeholder = 'Digite seu nome'
nome.style.display = 'flex'
nome.style.justifycontent = 'center'
nome.style.backgroundcolor = 'white'
nome.style.borderRadius = '50px'
div2.appendChild(nome)

const nota1 = document.createElement('input')
nota1.style.width = '500px'
nota1.style.height = '30px'
nota1.placeholder = 'Digite a primeira nota'
nota1.style.display = 'flex'
nota1.style.justifycontent = 'center'
nota1.style.backgroundcolor = 'white'
nota1.style.borderRadius = '50px'
div2.appendChild(nota1)

const nota2 = document.createElement('input')
nota2.style.width = '500px'
nota2.style.height = '30px'
nota2.placeholder = 'Digite a segunda nota'
nota2.style.display = 'flex'
nota2.style.justifycontent = 'center'
nota2.style.backgroundcolor = 'white'
nota2.style.borderRadius = '50px'
div2.appendChild(nota2)

const nota3 = document.createElement('input')
nota3.style.width = '500px'
nota3.style.height = '30px'
nota3.placeholder = 'Digite a terceira nota'
nota3.style.display = 'flex'
nota3.style.justifycontent = 'center'
nota3.style.backgroundcolor = 'white'
nota3.style.borderRadius = '50px'
div2.appendChild(nota3)

const bt = document.createElement(`button`);
bt.textContent = `Calcular Média`;
bt.style.width = '200px'
bt.style.height  = '30px'
bt.style.backgroundColor = 'aquamarine'
bt.style.textAlign = 'center'
bt.style.borderRadius = '50px'
div2.appendChild(bt);
bt.addEventListener(`click`, function (){

let med = (nota1 + nota2 + nota3)/3
console.log(`Olá, ${nome}, sua média é: ${med} .`)

})

const footer = document.createElement('footer')
footer.style.width = '150%'
footer.style.height = '8%'
footer.style.display ='flex'
footer.style.backgroundColor= 'blue'
body.appendChild(footer)
 
