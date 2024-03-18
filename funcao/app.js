const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/*Mensagem*/

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora < 12)
    {
        //Bom dia
        img.src = 'img/01 - manha.png'
        msg.innerHTML = `Bom dia prezado(a)`
        //document.body.style.background = '#ffffff'
    }
    else if(hora >= 12 && hora <= 18)
    {
        //Boa tarde
        img.src = 'img/02 - tarde.png'
        msg.innerHTML = `Boa tarde prezado(a)`
    }
    else
    {
        //noite
        img.src = 'img/03 - noite.png'
        msg.innerHTML = `Boa noite prezado(a)`
    }
}


function aviso(){
    alert("Pagina em construção!")
}

function enfermagem(){
    location = 'popenfermagem.html'
}
