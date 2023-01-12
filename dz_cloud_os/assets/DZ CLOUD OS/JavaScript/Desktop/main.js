'use strict';
(function() {
    function uhrzeit() {
        var jetzt = new Date(),
            h = jetzt.getHours(),
            m = jetzt.getMinutes(),
            s = jetzt.getSeconds();
        m = fuehrendeNull(m);
        s = fuehrendeNull(s);
        document.getElementById('uhr')
            .innerHTML = h + ':' + m + ':' + s;
        setTimeout(uhrzeit, 500);
    }

    function fuehrendeNull(zahl) {
        zahl = (zahl < 10 ? '0' : '') + zahl;
        return zahl;
    }

    function datum() {
        var now = new Date(),
            Y = now.getFullYear(),
            M = now.getMonth(),
            D = now.getDay();
        M = fuehrendeNull(M);
        D = fuehrendeNull(D);
        document.getElementById('datum')
            .innerHTML = D + '.' + M + '.' + Y;
        setTimeout(datum, 500);
    }


    document.addEventListener('DOMContentLoaded', uhrzeit);
    document.addEventListener('DOMContentLoaded', datum);
}());


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function Suche() {
    var Suche = document.getElementById("Suche");
    Suche.classList.toggle("show");
}


function accessibility() {
    var accessibility = document.getElementById("accessibility");
    accessibility.classList.toggle("show");
}

function GoogleChrome() {
    var MeinFenster = window.open("https://www.google.com", "Google Chrome", "width=800,height=400,left=400,top=200");
    MeinFenster.focus();

}

function Explorer() {
    var text = 'Comming Soon!';
    var Explorer = window.open("about:blank", "DZ EXPLORER", "width=800,height=400,left=400,top=200");
    Explorer.document.write(text);
    Explorer.focus();

}

function Minecraft() {
    var MeinFenster = window.open("https://classic.minecraft.net", "Minecraft", "width=800,height=400,left=400,top=200");
    MeinFenster.focus();

}

function GitHub() {
    var MeinFenster = window.open("https://www.github.com/DonnerFranzel55", "GitHub", "width=800,height=400,left=400,top=200");
    MeinFenster.focus();

}