document.addEventListener("DOMContentLoaded",function(event){

    //* Exercici 1 Amagar icones de les cartes JQ
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

//*********************************************************************************************************************
    //* Exercici 2 Cubell d'escombreries



    var cartes_ma = document.getElementById('cartes-ma');
    var cartes = cartes_ma.querySelectorAll('div.carta');
    for(let i=0;i<cartes.length;i++){

        let carta = getCartaJS(cartes,i);
        let cubellButton = getButtonJS(carta,'fa-trash-alt');
        cubellButton.addEventListener('click',function(){carta.parentNode.removeChild(carta);})

    }

//*********************************************************************************************************************
    //* Exercici 3 Moure cartes


    for (let i=0; i<$cartes.length; i++){

        let $carta = getCartaJQ($cartes,i);

        let $botoEsquerra = getButtonJQ($carta,'.fa-arrow-left');
        let $botoDret = getButtonJQ($carta,'.fa-arrow-right');

        $botoEsquerra.on('click',moureEsquerraJQ);
        $botoDret.on('click',moureDretaJQ);

    }

});



function getCartaJS(cartes,pos){return cartes[pos];}

function getButtonJS(carta,classname){
    let collectionHTML = carta.getElementsByClassName(classname);
    return collectionHTML.item(0);
}

function getCartaJQ(cartes,pos){ return  $(cartes).eq(pos);}

function getButtonJQ(carta,classname){return $(carta).find(classname);}

function moureEsquerraJQ(){

    // desencadenant
    let boto = event.target;
    let carta = boto.closest('.carta');
    let cartes = carta.closest('#cartes-ma');
    let posicio = $(carta).index();

    if (posicio > 0){$(cartes).children('.carta').get(posicio-1).before(carta); }

}

function moureDretaJQ(){

    // desencadenant
    let boto = event.target;
    let carta = boto.closest('.carta');
    let cartes = carta.closest('#cartes-ma');
    let posicio = $(carta).index();
    let numCartes = $(cartes).children('.carta').length;

    if (posicio < numCartes-1 ){$(cartes).children('.carta').get(posicio+1).after(carta); }

}









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
