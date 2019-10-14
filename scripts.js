// double click
// po podwójnym kliknięciu wyświetla przeróbkę w miejsce
// bazowego zdjęcia
function zdjecie1() {
    zdjecie1 = "<img src=\"img/bigPics/r1a.jpg\" alt=\"\">"

    document.getElementById("owoc").innerHTML = zdjecie1;
}

function zdjecie2() {
    zdjecie2 = "<img src=\"img/bigPics/r2a.jpg\" alt=\"\">"

    document.getElementById("owoc").innerHTML = zdjecie2;
}

function zdjecie3() {
    zdjecie3 = "<img src=\"img/bigPics/r3a.jpg\" alt=\"\">"

    document.getElementById("owoc").innerHTML = zdjecie3;
}

function zdjecie4() {
    zdjecie4 = "<img src=\"img/bigPics/r4a.jpg\" alt=\"\">"

    document.getElementById("owoc").innerHTML = zdjecie4;
}

function zdjecie5() {
    zdjecie5 = "<img src=\"img/bigPics/r5a.jpg\" alt=\"\">"

    document.getElementById("owoc").innerHTML = zdjecie5;
}

// zdjęcie zmienia się przed i po najechaniu na miniaturę
// przed najechaniem na miniaturę pokazuje oryginalne zdjęcie
// po najechaniu na miniaturę pokazuje przerobione zdjęcie i wraca 
// do stanu poprzedniego

function over1() {
    this.setAttribute("src", "img/miniatures/r1.jpg");
}

function out1() {
    this.setAttribute("src", "img/miniaturesNoFilter/r1b.jpg");
}

function over2() {
    this.setAttribute("src", "img/miniatures/r2.jpg");
}

function out2() {
    this.setAttribute("src", "img/miniaturesNoFilter/r2b.jpg");
}

function over3() {
    this.setAttribute("src", "img/miniatures/r3.jpg");
}

function out3() {
    this.setAttribute("src", "img/miniaturesNoFilter/r3b.jpg");
}

function over4() {
    this.setAttribute("src", "img/miniatures/r4.jpg");
}

function out4() {
    this.setAttribute("src", "img/miniaturesNoFilter/r4b.jpg");
}

function over5() {
    this.setAttribute("src", "img/miniatures/r5.jpg");
}

function out5() {
    this.setAttribute("src", "img/miniaturesNoFilter/r5b.jpg");
}

//  double click w nieskończoność (po podwójnym kliknięciu na zdj1 i zdj2, można 
//  double clickiem wrócić do zdj1)
let i = 1;

while (i <= 100) {
    function zdjecie1() {
        zdjecie1 = "<img src=\"img/bigPics/r1a.jpg\" alt=\"\">"

        document.getElementById("owoc").innerHTML = zdjecie1;
    }

    function zdjecie2() {
        zdjecie2 = "<img src=\"img/bigPics/r2a.jpg\" alt=\"\">"

        document.getElementById("owoc").innerHTML = zdjecie2;
    }

    function zdjecie3() {
        zdjecie3 = "<img src=\"img/bigPics/r3a.jpg\" alt=\"\">"

        document.getElementById("owoc").innerHTML = zdjecie3;
    }

    function zdjecie4() {
        zdjecie4 = "<img src=\"img/bigPics/r4a.jpg\" alt=\"\">"

        document.getElementById("owoc").innerHTML = zdjecie4;
    }

    function zdjecie5() {
        zdjecie5 = "<img src=\"img/bigPics/r5a.jpg\" alt=\"\">"

        document.getElementById("owoc").innerHTML = zdjecie5;
    }
    i++;
}