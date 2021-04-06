document.addEventListener("DOMContentLoaded",function(event){






    //* Exercici 1 Amagar icones de les cartes JQ

/**
    let $cartesma = $('#cartes-ma');
    let $cartes = $cartesma.children('.carta');
    let $options = $cartes.find('.opcions');
    let $icones = $options.children('span');

    $icones.hide();

    // quan passem el ratolí a sobre una carta es mostraran

    for (let i=0; i<$cartes.length; i++){
         let $carta = $cartes.eq(i);

        // la superficie de la carta la formen tots els elements que hi trobem dins.
        $carta = $carta.children('*');
        $carta.on('mouseover',function(){$carta.find('span').show();})
        $carta.on('mouseout',function(){$carta.find('span').hide();})

    }
*/
    amagarIconesJQ();
//*********************************************************************************************************************
    //* Exercici 2 Cubell d'escombreries

/**
    var cartes_ma = document.getElementById('cartes-ma');
    var cartes = cartes_ma.querySelectorAll('div.carta');
    for(let i=0;i<cartes.length;i++){

        let carta = getCartaJS(cartes,i);
        let cubellButton = getButtonJS(carta,'fa-trash-alt');
        cubellButton.addEventListener('click',function(){carta.parentNode.removeChild(carta);})

    }
    */
    cubellEscombreriesJS();
//*********************************************************************************************************************
    //* Exercici 3 Moure cartes

/**
    for (let i=0; i<$cartes.length; i++){

        let $carta = getCartaJQ($cartes,i);

        let $botoEsquerra = getButtonJQ($carta,'.fa-arrow-left');
        let $botoDret = getButtonJQ($carta,'.fa-arrow-right');

        $botoEsquerra.on('click',moureEsquerraJQ);
        $botoDret.on('click',moureDretaJQ);

    }
    */

    moureCartesJQ();
//*********************************************************************************************************************
    //* Exercici 4 Crear carta al tereny de joc JS
/**

    for(let i=0;i<cartes.length;i++){

        let carta = getCartaJS(cartes,i);
        let dausButton = getButtonJS(carta,'fa-dice');
        dausButton.addEventListener('click',jugarCartaJS)

    }
*/
    cartaJocJS();
//*********************************************************************************************************************
    //* Exercici 5 - Mostrar formulari JQ

    let $formulari = $('#formulari');
    $formulari.siblings('.boto-carta').on('click',function(){$formulari.show()})


//*********************************************************************************************************************
    //* Exercici 6 Crear una nova carta fent servir el Formulari JQ

    $formulari.find('button[type=submit]').on('click',crearNovaCartaJQ)
    $formulari.find('button[type=button]').on('click',function(){$formulari.hide()})


});

/**
*
* Funcio que retorna una carta usant Java Script
* param: col·lecció de cartes
* param: posició de la carta a retornar
*
*/
function getCartaJS(cartes,pos){return cartes[pos];}
/**
*
*Funcio que retorna un element de la carta que actua com a botó usant Java Script
*param: carta
*param: class de l'element a retornar
*
*/
function getButtonJS(carta,classname){
    let collectionHTML = carta.getElementsByClassName(classname);
    return collectionHTML.item(0);
}
/**
*
* Funcio que retorna una carta usant JQuery
* param: col·lecció de cartes
* param: posició de la carta a retornar
*
*/
function getCartaJQ(cartes,pos){ return  $(cartes).eq(pos);}
/**
*
*Funcio que retorna un element de la carta que actua com a botó usant JQuery
*param: carta
*param: class de l'element a retornar
*
*/
function getButtonJQ(carta,classname){return $(carta).find(classname);}
/**
*
* Funcio per moure les cartes cap a l'esquerra al clickar sobre la fletxa esquerra.
*
*/
function moureEsquerraJQ(){

    // desencadenant
    let boto = event.target;
    let carta = boto.closest('.carta');
    let cartes = carta.closest('#cartes-ma');
    let posicio = $(carta).index();

    if (posicio > 0){$(cartes).children('.carta').get(posicio-1).before(carta); }

}
/**
*
* Funcio per moure les cartes cap a la dreta al clickar sobre la fletxa dreta.
*
*/
function moureDretaJQ(){

    // desencadenant
    let boto = event.target;
    let carta = boto.closest('.carta');
    let cartes = carta.closest('#cartes-ma');
    let posicio = $(carta).index();
    let numCartes = $(cartes).children('.carta').length;

    if (posicio < numCartes-1 ){$(cartes).children('.carta').get(posicio+1).after(carta); }

}
/**
*
* Funcio per juagar la carta al clickar sobre els daus.
*
*/
function jugarCartaJS(event){

    // recollir dades

    let botoDaus = event.target;
    let carta = botoDaus.closest('.carta');
    let colorCarta = carta.getAttribute('color');
    let nomCarta = carta.getElementsByClassName('nom')[0].innerHTML;
    let imgCarta = carta.getElementsByClassName('imatge-carta')[0].getAttribute('src');

    let forca;
    let resistencia;

    if (carta.getElementsByClassName('batalla')[0] != undefined){

        forca = carta.getElementsByClassName('power')[0].innerHTML;
        resistencia = carta.getElementsByClassName('toughness')[0].innerHTML;
    }

    //crear carta

    let cartaJugada = document.createElement('div');
    cartaJugada.classList.add('carta-jugada');
    cartaJugada.setAttribute('style','background-color:'+colorCarta);

    let spanNom = document.createElement('span');
    spanNom.innerHTML=nomCarta;
    cartaJugada.appendChild(spanNom);

    let imgCartaJugada = document.createElement('img');
    imgCartaJugada.setAttribute('src',imgCarta);
    cartaJugada.appendChild(imgCartaJugada);

    if(forca != undefined){

        let paragraf = document.createElement('p');
        let spanForca = document.createElement('span');
        spanForca.innerHTML= forca;
        paragraf.appendChild(spanForca);
        paragraf.innerHTML = paragraf.innerHTML + '/';
        let spanResistencia = document.createElement('span');
        spanResistencia.innerHTML= resistencia;
        paragraf.appendChild(spanResistencia);

         cartaJugada.appendChild(paragraf);

    }

    //insertar carta

    let terrenyJoc = document.getElementById('terreny-joc');
    terrenyJoc.appendChild(cartaJugada);

}
function crearNovaCartaJQ(){

    event.preventDefault();
    $('#formulari').hide();

    // Recollir dades del fotmulari

    let nom = $('#nom').val();
    let mana = $('#mana').val();
    let color = $('#color').val();
    let imat = $('#imat').val();
    let tipus = $('#tipus').val();
    let descripcio = $('#desc').val();
    let atac = $('#atac').val();
    let defensa = $('#defensa').val();

    let imgMana = transformar_text(mana);

console.log(atac);
    // Crear carta

    let $cartaNova = $('<div></div>').addClass('carta').attr('color',color);


    let $fonsCarta = $('<div></div>').addClass('fons-carta');
    let $cardFrame = $('<div></div>').addClass('card-frame');

    let $opcionsCarta = $('<div></div>').addClass('opcions');
    $opcionsCarta.append($('<span></span>').addClass('fas fa-dice'));
    $opcionsCarta.append($('<span></span>').addClass('fas fa-arrow-right'));
    $opcionsCarta.append($('<span></span>').addClass('fas fa-arrow-left'));
    $opcionsCarta.append($('<span></span>').addClass('fas fa-trash-alt'));



    let $contingut = $('<div></div>').addClass('contingut-carta');
    $contingut.append($('<h1></h1>').addClass('nom').text(nom + ''));

    let $mana = $('<div></div>').addClass('mana');
    $mana.append(imgMana);
    $contingut.append($mana);

    let $imgCarta = $('<img>');
    $imgCarta.addClass('imatge-carta');
    $imgCarta.attr('src',imat);
    $imgCarta.attr('alt','nissa art');


    let $tipusCarta = $('<div></div>').addClass('tipus-carta');
    $tipusCarta.append($('<h1></h1>').addClass('type').text(tipus));



    let $textCarta = $('<div></div>').addClass('text-carta');
    $textCarta.append($('<p></p>').addClass('descripcio marge-intern').text(descripcio));
    $textCarta.append($('<p></p>').addClass('text-farciment').text('farciment'));


    // Atac i defensa

    let $dadesCombat = $('<div></div>').addClass('informacio-inferior marge-dintre');
    let $batalla = $('<div></div>').addClass('batalla');
    $batalla.append($('<span></span>').addClass('power').text(atac));
    $batalla.append('/');
    $batalla.append($('<span></span>').addClass('toughness').text(defensa));

    $dadesCombat.append($batalla)

    // Afegim els diferents elements a la carta

    $fonsCarta.append($cardFrame);
    $cardFrame.append($opcionsCarta);
    $cardFrame.append($contingut);
    $cardFrame.append($imgCarta);
    $cardFrame.append($tipusCarta);
    $cardFrame.append($textCarta);
    if (atac != ''){$cardFrame.append($dadesCombat)}
    $cartaNova.append($fonsCarta);



    $('#cartes-ma').append($cartaNova);

    amagarIconesJQ();
    cubellEscombreriesJS();
    moureCartesJQ();
    cartaJocJS();


}
/**
*
*Funcio donada al enunciat
*
*/
function transformar_text(text_simbols){
	//Convertim els salts de línia a format HTML
	text_transformat = text_simbols.replace(/\r?\n/g, "<br />");
	//Cerquem el text a transformar
	var trobar = /\{[A-Z0-9/]*\}/g;
	//Canviem el text per les imatges corresponents
	var text_transformat = text_transformat.replace(trobar, function(x){
		//Afagem el text de dintre de les {} treient les / interiors (si hi ha alguna)
		var lletres = x.substring(1,x.length-1).replace('/','');
		return "<img src='https://c2.scryfall.com/file/scryfall-symbols/card-symbols/"+lletres+".svg' class='mana-icon'>"
	});
	return text_transformat;
}

/**
*
* Exercici 1 Amagar icones de les cartes JQ
*
*/
function amagarIconesJQ(){

    let $cartesma = $('#cartes-ma');
    let $cartes = $cartesma.children('.carta');
    let $options = $cartes.find('.opcions');
    let $icones = $options.children('span');

    $icones.hide();

    // quan passem el ratolí a sobre una carta es mostraran

    for (let i=0; i<$cartes.length; i++){
         let $carta = $cartes.eq(i);

        // la superficie de la carta la formen tots els elements que hi trobem dins.
        $carta = $carta.children('*');
        $carta.on('mouseover',function(){$carta.find('span').show();})
        $carta.on('mouseout',function(){$carta.find('span').hide();})

    }
}
/**
*
* Exercici 2 Cubell d'escombreries
*
*/
function cubellEscombreriesJS(){

     var cartes_ma = document.getElementById('cartes-ma');
     var cartes = cartes_ma.querySelectorAll('div.carta');
     for(let i=0;i<cartes.length;i++){

        let carta = getCartaJS(cartes,i);
        let cubellButton = getButtonJS(carta,'fa-trash-alt');
        cubellButton.addEventListener('click',function(){carta.parentNode.removeChild(carta);})

    }

}
/**
*
* Exercici 3 Moure cartes
*
*/
function moureCartesJQ(){

        let $cartesma = $('#cartes-ma');
        let $cartes = $cartesma.children('.carta');

        for (let i=0; i<$cartes.length; i++){

        let $carta = getCartaJQ($cartes,i);

        let $botoEsquerra = getButtonJQ($carta,'.fa-arrow-left');
        let $botoDret = getButtonJQ($carta,'.fa-arrow-right');

        $botoEsquerra.on('click',moureEsquerraJQ);
        $botoDret.on('click',moureDretaJQ);

    }

}
/**
*
* Exercici 4 Crear carta al tereny de joc JS
*
*/
function cartaJocJS(){
    var cartes_ma = document.getElementById('cartes-ma');
    var cartes = cartes_ma.querySelectorAll('div.carta');
    for(let i=0;i<cartes.length;i++){

        let carta = getCartaJS(cartes,i);
        let dausButton = getButtonJS(carta,'fa-dice');
        dausButton.addEventListener('click',jugarCartaJS)

    }
}





