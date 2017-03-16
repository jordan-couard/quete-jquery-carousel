$(document).ready(function() {



    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
        $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
        indexImg = $img.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $img.css('display', 'none'); // on cache les images
    $currentImg.css('display', 'block'); // on affiche seulement l'image courante
    $carrousel.append('<div class="controls"> <span class="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></span> <span class="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></span></div>');


    $('.next').click(function() {
        i++;
        if (i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

        } else {
            i = 0;
        }

    });

    $('.prev').click(function() {
        i--;
        if (i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

        } else {
            i = indexImg;
        }
    });

    function slideImg() {
        setTimeout(function() {
            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
            slideImg();
        }, 3000);
    }
    slideImg();

});
