document.addEventListener("DOMContentLoaded",function(event){

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

//****************************** Exercici 1 Amagar icones de les cartes **********************************************

// buscar els elements a partir d'un element amb ID al dom -> id="cartes-ma"


var $cartesma = $('#cartes-ma');
var $cartes = $cartesma.children('.carta');
var $options = $cartes.find('.opcions');
var $icones = $options.children('span');

$icones.hide();

// quan passem el ratolí a sobre una carta es mostraran

for (let i=0; i<$cartes.length;i++){
    let $carta = $cartes.eq(i);

    // la superficie de la carta la formen tots els elements que hi trobem dins.
    $carta = $carta.children('*');
    $carta.on('mouseover',function(){$carta.find('span').show();})
    $carta.on('mouseout',function(){$carta.find('span').hide();})

}

//****************************** Exercici 2 Eliminar icona cubell d'escombreries ************************************

//// buscar els elements a partir d'un element amb ID al dom -> id="cartes-ma">"

    var cartes_ma = document.getElementById('cartes-ma');


    // elements presents a cartes_ma

    var elements = cartes_ma.childNodes;


});
