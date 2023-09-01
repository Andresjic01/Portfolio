function tarjetas(cardNumber) {
    const cards = document.querySelectorAll('.tarjeta');
    cards.forEach(tarjeta => {
        tarjeta.style.display = 'none';
        tarjeta.style.margin = 'auto ';
        
    });

    const cardContents = document.querySelectorAll('.tContenido');
    cardContents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedCard = document.querySelector(`.tarjeta:nth-child(${cardNumber})`);
    selectedCard.style.display = 'block';

    const selectedCardContent = document.getElementById(`tContenido-${cardNumber}`);
    selectedCardContent.style.display = 'block';
    
}

function Ptarjetas(){
    const cards = document.querySelectorAll('.tarjeta');
    cards.forEach(tarjeta => {
        tarjeta.style.display = 'block';
        tarjeta.style.margin = '0px 0px 25px 43px ';
    });
    const cardContents = document.querySelectorAll('.tContenido');
    cardContents.forEach(content => {
        content.style.display = 'none';
    });
    

    
}

function botones(){
    const btns = document.querySelector(".contcolores");
    const boton = document.querySelector(".open-panel");

        btns.classList.toggle('active');
        boton.classList.toggle('active');
        
}



var link = document.getElementById("filecss");

function primario(){
    link.href="css/style.css";
}

function segundario(){
    link.href="css/stylesegundario.css";
}

function terceario(){
    link.href="css/styleterciario.css";
}

function idiomas(){
    const btns = document.querySelector(".idiomas");
    const boton = document.querySelector(".aidiomas");

        btns.classList.toggle('active');
        boton.classList.toggle('active');
        
}

function español(){
    window.location.replace("index.html");
}
function ingles(){
    window.location.replace("indexg.html");
}



  