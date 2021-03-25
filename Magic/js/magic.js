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

//****************************** Exercici 1 Amagar icones de les cartes JQ*********************************************

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

//****************************** Exercici 2 Eliminar carta JS *********************************************************

// buscar els elements a partir d'un element amb ID al dom -> id="cartes-ma">"

    var cartes_ma = document.getElementById('cartes-ma');

    // extraiem les cartes.
    var cartes = cartes_ma.querySelectorAll('div.carta');

    for(let i=0;i<cartes.length;i++){
      let carta = cartes[i];
      let botons = carta.getElementsByTagName('span');
      let cubell = botons.item(3);
      cubell.addEventListener('click',function(){carta.parentNode.removeChild(carta);})
    }

//****************************** Exercici 3 *******************************************************

// seleccionar botó JQ
    var $cartesma = $('#cartes-ma');
    var $cartes = $cartesma.children('.carta');
    console.log ($cartes);

    for (let i=0;i<$cartes.length;i++){
        $carta = getCartaJQ($cartes,i);
        //afegim un atribut on indiquem la posició de la carta
        $carta.attr('posicio',i);
        // contingut  html de la carta de la carta html
        console.log($carta[0].outerHTML);

        let $botoEsquerra = getButtonJQ($carta,'.fa-arrow-left');
        let $botoDret = getButtonJQ($carta,'.fa-arrow-right');

        console.log($botoEsquerra);
         console.log($botoDret);


        $botoEsquerra.on('click',function(){$carta.before($carta[0].outerHTML);});
        $botoDret.on('click',function(){$carta.append($carta[0].outerHTML);$carta.remove();})




    }






function getCartaJQ(cartes,pos){ return  $(cartes).eq(pos);}

function getButtonJQ(carta,classname){return $(carta).find(classname);}



/**

    for (let i=0; i< $cartes.length;i++){

        let $carta = $cartes.eq(i);





        let $opcions = $carta.find('.opcions');
        let $botons = $opcions.children();

        let $botoDret = $botons.eq(1);
        let $botoEsquerra= $botons.eq(2);

        $botoDret.on('click', function(){

        });
        $botoEsquerra.on('mouseout',function(){$carta.find('span').hide();});
    }


        function moureEsquerra(){

            $carta.hide();
            console.log(Int16Array);

        }
    **/
     /*
        function moureDreta(posCarta){

            console.log(posCarta);

            $carta.insertBefore($cartaPosterior);

        }

    **/



});
