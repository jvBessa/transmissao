var enigmas = ["Tudo começa por mim! O fluxo que banha o outro lado! A entidade da fome, da dor, da paixão, do ÓDIO!!!",
"Todas as coisas precisam de um fim! Cada instante é ao mesmo tempo eterno e instantâneo!!!",
"Descobrir, decifrar, entender! Na imensidão do outro lado, existe um ruído crescente, um som familiar!!!",
"O intangível! É possível enxergar o que so pode ser descrito como uma galáxia inteira se transfigurando simultaneamente!!!",
"INFINITO!"];

var respostas = ["SANGUE", "MORTE", "CONHECIMENTO", "ENERGIA", "MEDO"];
var resposta1 = document.getElementById('input1');
var etapa = 1;
var i = 0;
var j = 0;
var etapaAtual = document.getElementById('etapa');
var enigma = document.getElementById('enigma');
var quiz = document.getElementById('quiz');
var posQuiz = document.getElementById('posQuiz');

console.log(parseInt(etapaAtual.innerText))

function fechaQuiz(etapa){
    if(etapa == 6){
        quiz.style.display = "none";
        posQuiz.style.display = "inline-block";
    }
}

function verificaResposta(){

    if(etapa < 6){
        if(resposta1.value.toUpperCase() == respostas[i]){
            resposta1.value = "";
            etapa++;
            i++;
            j++;
            etapaAtual.innerText = etapa.toString();
            enigma.innerText = enigmas[j];
            console.log(parseInt(etapaAtual.innerText))
            fechaQuiz(etapa);
        }
        else{
            resposta1.value = "";
            alert("Resposta errada!")
        }
    }
        
    else if(etapa == 7){
        quiz.style.display = 'none';
    }
    
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        verificaResposta();
    }
});


