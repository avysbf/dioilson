let quem = document.getElementById('quem');
let que = document.getElementById('que');
let como = document.getElementById('como');
let fala = document.getElementById('fala');
let leia = document.getElementById('leia');


let typequem = new Typewriter(quem, {
    loop: false,
    cursor: ""
});
typequem.typeString('quem?').start();

let typeque = new Typewriter(que, {
    loop: false,
    cursor: ""
});
typeque.typeString('quê?').start();

let typecomo = new Typewriter(como, {
    loop: false,
    cursor: ""
});
typecomo.typeString('como?').start();

let typefala = new Typewriter(fala, {
    loop: false,
    cursor: ""
});
typefala.typeString('fala').start();

let typeleia = new Typewriter(leia, {
    loop: false,
    cursor: ""
});
typeleia.typeString('leia').start();
