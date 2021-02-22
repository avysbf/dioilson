var app = document.getElementById('typer');

var typedio = new Typewriter(app, {
    cursor: "<i>|</i>"
});

let paragrafo = 
'<b>Corria uma tarde enformigada de cajueiros na ponta do horizonte chovia baba de <i>Iemanjá</i>, que tava que tava danada! Taludinha, bebendo açude pelos mundaréus. E se foi rachando arco-íris, chovendo colorido nas estripulias de Toró fazendo chuva nuns batuques.</b>';

typedio.typeString(paragrafo).start();


