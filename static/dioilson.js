var app = document.getElementById('typer');

var typedio = new Typewriter(app, {
    loop: true,
    cursor: "|"
});

typedio.typeString('Dioilson')
    .pauseFor(900)
    .deleteChars(2)
    .typeString("On")
    .pauseFor(1400)
    .deleteChars(6)
    .typeString("OilsOn")
    .pauseFor(5000)
    .start();



