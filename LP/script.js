document.addEventListener('DOMContentLoaded', (event) => {
    const modals = [
        {btnId: "openModalBtn1", modalId: "myModal1", listId: "arrayList1", array: ["Problema: Interfaces lentas e suporte ineficaz.", "Consequência: Perda de confiança e insatisfação.",]},
        {btnId: "openModalBtn2", modalId: "myModal2", listId: "arrayList2", array: ["Problema: Falta de dados detalhados.", "Consequência: Apostas baseadas em informações insuficientes resultam em perdas financeiras.",]},
        {btnId: "openModalBtn3", modalId: "myModal3", listId: "arrayList3", array: ["Problema: Processos de retirada lentos.", "Consequência: Experiência de apostas menos prazerosa e mais estressante.",]},
        {btnId: "openModalBtn4", modalId: "myModal4", listId: "arrayList4", array: ["Solução: Interface rápida e intuitiva.", "Benefício: Apostas agradáveis e sem frustrações.",]},
        {btnId: "openModalBtn5", modalId: "myModal5", listId: "arrayList5", array: ["Solução: Acesso a dados detalhados e análises.", "Benefício: Aumenta suas chances de ganho.",]},
        {btnId: "openModalBtn6", modalId: "myModal6", listId: "arrayList6", array: ["Solução: Processamento rápido de retiradas.", "Benefício: Economia de tempo e experiência financeira fluida.",]}
    ];

    modals.forEach(modalInfo => {
        const openModalBtn = document.getElementById(modalInfo.btnId);
        const modal = document.getElementById(modalInfo.modalId);
        const closeBtn = modal.getElementsByClassName("closeBtn")[0];
        const arrayList = document.getElementById(modalInfo.listId);

        openModalBtn.onclick = function() {
            modal.style.display = "block";
            populateModal(modalInfo.array, arrayList);
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    function populateModal(array, arrayList) {
        arrayList.innerHTML = '';
        array.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            arrayList.appendChild(li);
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');
  
    let currentSlide = 0;
  
    
    function hideSlider() {
        sliders.forEach(slide => slide.style.opacity = '0');
    }
  
    
    function showSlider() {
        sliders[currentSlide].style.opacity = '1';
    }
  
   
    showSlider();
  
    function nextSlider() {
        hideSlider();
        if (currentSlide === sliders.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlider();
    }
  
    function prevSlider() {
        hideSlider();
        if (currentSlide === 0) {
            currentSlide = sliders.length - 1;
        } else {
            currentSlide--;
        }
        showSlider();
    }
  
    if (btnNext && btnPrev) {
        btnNext.addEventListener('click', nextSlider);
        btnPrev.addEventListener('click', prevSlider);
    }
});

const raioPista = 120;
const larguraCarrinho = 13;
const velocidadeInicial = 4;

let posicaoCarrinho1 = 0;
let posicaoCarrinho2 = Math.PI;
let posicaoCarrinho3 = Math.PI / 2;
let posicaoCarrinho4 = 3 * Math.PI / 2;

let voltasCarrinho1 = 0;
let voltasCarrinho2 = 0;
let voltasCarrinho3 = 0;
let voltasCarrinho4 = 0;

function atualizarPosicaoCarrinhos() {
    posicaoCarrinho1 += velocidadeInicial / raioPista;
    posicaoCarrinho2 += velocidadeInicial / raioPista;
    posicaoCarrinho3 += velocidadeInicial / raioPista;
    posicaoCarrinho4 += velocidadeInicial / raioPista;

    
    if (posicaoCarrinho1 >= 2 * Math.PI) {
        voltasCarrinho1++;
        posicaoCarrinho1 = 0;
    }
    if (posicaoCarrinho2 >= 2 * Math.PI) {
        voltasCarrinho2++;
        posicaoCarrinho2 = 0;
    }
    if (posicaoCarrinho3 >= 2 * Math.PI) {
        voltasCarrinho3++;
        posicaoCarrinho3 = 0;
    }
    if (posicaoCarrinho4 >= 2 * Math.PI) {
        voltasCarrinho4++;
        posicaoCarrinho4 = 0;
    }
    
    document.getElementById('voltasCarrinho1').innerText = voltasCarrinho1;
    document.getElementById('voltasCarrinho2').innerText = voltasCarrinho2;
    document.getElementById('voltasCarrinho3').innerText = voltasCarrinho3;
    document.getElementById('voltasCarrinho4').innerText = voltasCarrinho4;
}

function desenharCarrinhos() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, raioPista, 0, 2 * Math.PI);
    ctx.stroke();

    const linhaChegadaLargura = 40;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - linhaChegadaLargura / 2, canvas.height / 2 - raioPista);
    ctx.lineTo(canvas.width / 2 + linhaChegadaLargura / 2, canvas.height / 2 - raioPista);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 35;
    ctx.stroke();

    // Carrinho 1 (azul)
    const x1 = canvas.width / 2 + raioPista * Math.cos(posicaoCarrinho1);
    const y1 = canvas.height / 2 + raioPista * Math.sin(posicaoCarrinho1);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x1 - larguraCarrinho / 2, y1 - larguraCarrinho / 2, larguraCarrinho, larguraCarrinho);

    // Carrinho 2 (vermelho)
    const x2 = canvas.width / 2 + raioPista * Math.cos(posicaoCarrinho2);
    const y2 = canvas.height / 2 + raioPista * Math.sin(posicaoCarrinho2);
    ctx.fillStyle = 'red';
    ctx.fillRect(x2 - larguraCarrinho / 2, y2 - larguraCarrinho / 2, larguraCarrinho, larguraCarrinho);

    // Carrinho 3 (verde)
    const x3 = canvas.width / 2 + raioPista * Math.cos(posicaoCarrinho3);
    const y3 = canvas.height / 2 + raioPista * Math.sin(posicaoCarrinho3);
    ctx.fillStyle = 'pink';
    ctx.fillRect(x3 - larguraCarrinho / 2, y3 - larguraCarrinho / 2, larguraCarrinho, larguraCarrinho);

    // Carrinho 4 (amarelo)
    const x4 = canvas.width / 2 + raioPista * Math.cos(posicaoCarrinho4);
    const y4 = canvas.height / 2 + raioPista * Math.sin(posicaoCarrinho4);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x4 - larguraCarrinho / 2, y4 - larguraCarrinho / 2, larguraCarrinho, larguraCarrinho);
}

function animar() {
    atualizarPosicaoCarrinhos();
    desenharCarrinhos();
    requestAnimationFrame(animar);
}

const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;
animar();

// Botão de Login e suas funções

document.getElementById('BtnUser').addEventListener('click', function(){
    document.getElementById('LoginContainer').style.display = 'block';
});
  
  document.getElementById('Btncancelar').addEventListener('click', function(){
    document.getElementById('LoginContainer').style.display = 'none';
});
  
  document.getElementById('FormLogin').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado!');
    document.getElementById('LoginContainer').style.display = 'none';
});

// Botão de saiba mais
document.getElementById('btnSM').addEventListener('click', function(event) {
    window.location.href = 'https://www.fiaformulae.com/pt-br/standings?season=84467676-4d5d-4c97-ae07-0b7520bb95ea&tab=drivers&period=isFullSeason'
});
