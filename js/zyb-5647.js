// // const liElement = document.getElementsByTagName("li");

// // for (let index = 0; index < liElement.length ; index++) {
// //     console.log(liElement[index].textContent)
    
// // }
// // console.log(liElement.length);

// //Declaração de Arrays
// // let nr1 = [1,2,3,4,5];
// // let nr2 = [6,7,8,9,10];
// // let nr3 = [nr1,nr2]

// // console.log(`Array-1 ${nr1}`);
// // console.log(`Array-2 ${nr2}`);
// // console.log(`Array-3 ${nr3}`);

// //Listando um array! Técnica Especial!
// // nr3.forEach((ItemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${ItemDoArray}`);
// // })

// // Listando o Array com MAP
// // nr3.map((numero,key)=>{
// //     console.log(`${key+1} - Itens do array - ${numero}`);
// //     numero.forEach((digitos)=>{
// //         console.log(digitos)
// //     })
// // })

// //Declaração de Arrays para uso do SPREAD
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// // Espalhar o array com SPREAD [ ... ]
// let nr3 = [...nr1,...nr2]

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

// nr3.map((numero,key)=>{
//      console.log(`${key+1} - Itens do array - ${numero}`);
// })

// // Convertendo HTMLCollection em Array de forma indireta
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// // Mostrando todos os itens da lista como array
// // liElementArray.map((item,key)=>{
// //     console.log(`${key+1} - Itens do li - ${item.textContent}`);
// // })

// // Localizar item especifico
// liElementArray.map((item,key)=>{
//     if (item.textContent == "Item-39")
//         console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`);
// })

// function soma(parametro) {
//     nr1 = 10;
//     nr2 = 5;

//     return (parseInt(nr1) + parseInt(nr2) + parseInt(parametro))

//     console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
//     console.log(`Este é o parâmetro que foi passado para a função : ${parametro}`);
// }

// Arrow Function
// const mudaCor = ()=>{
    
//     // FUNÇÃO SET-TIME-OUT
//     setTimeout(soma(1,2,3),5000);
// }

// soma();

//FUNÇÃO MUDA COR

function mudaCor(){

    let r = ""
    let g = ""
    let b = ""

    //math - random= que gera números aleatórios entre 0 e 1 
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatóriamente  
    
    //determinando para a variavel R um valor entre 0 e 255
    r = Math.round(Math.random() * 255) 
    g = Math.round(Math.random() * 255) 
    b = Math.round(Math.random() * 255) 
    
    const cabecalho = document.querySelector(".cabecalho")
    cabecalho.setAttribute("style", `background-color:rgb( ${r}, ${g}, ${b})`)

    tmp = setTimeout(mudaCor,1000)
}

//FUNÇÃO ALTERA BANNER
function alteraBanner(){

    let nr = Math.ceil(Math.random() * 3);
    
    const img1 = document.querySelector(".l-e > img");
    const img2 = document.querySelector(".l-d > img");

    let caminho = `./img/banner-lateral-${nr}.png` 
    img1.src = caminho
    img2.src = caminho 
    
    setTimeout(mudaBanner,1000);
}

// alteraBanner();

const botao = document.querySelector(".central button");

botao.addEventListener("click", ()=>{
    const imgLampada = document.querySelector(".central img");

    if(this.textContent == "LIGAR") {
        imgLampada.src = "/img/pic_bulbon.gif"
        botao.textContent = "DESLIGAR";
    } else{
        imgLampada.src = "/img/pic_bulboff.gif"
        botao.textContent = "LIGAR";
    }
} );    

// function ligaDesliga() {

    // const imgLampada = document.querySelector(".central img");

    // if(botao.textContent == "LIGAR") {
    //     imgLampada.src = "/img/pic_bulbon.gif"
    //     botao.textContent = "DESLIGAR";
    // } else{
    //     imgLampada.src = "/img/pic_bulboff.gif"
    //     botao.textContent = "LIGAR";
    // }
// }