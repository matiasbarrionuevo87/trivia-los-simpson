const preguntas = [
    {
        pregunta: "¿Donde Trabaja Homero?",
        opciones: ["En el Kwik-E-Mart", "En Una Planta Nuclear", "En la Tienda para Zurdos"],
        respuestaCorrecta: "En Una Planta Nuclear"
    },
    {
        pregunta: "¿Como se llama el dueño de la taberna que va Homero?",
        opciones: ["Burns", "Moe", "Barney"],
        respuestaCorrecta: "Moe"
    },
    {
        pregunta: "¿Como se llama el hermano gemelo de Bart?",
        opciones: ["Hugo", "Claudio", "No Tiene Hermano"],
        respuestaCorrecta: "Hugo"
    },
    {
        pregunta: "¿Que famoso futbolista aparece en el capitulo en que Lisa juega y Homero es arbitro?",
        opciones: ["Messi", "Ronaldo", "Ronaldinho"],
        respuestaCorrecta: "Ronaldo"
    },
    {
        pregunta: "¿Cual de estos niños no es un brabucon?",
        opciones: ["Jimbo Jones", "Nelson Muntz", "Rafa Gorgori"],
        respuestaCorrecta: "Rafa Gorgori"
    },
    {
        pregunta: "¿A dónde la manda Gorgory a Marge en su primer día como policía?",
        opciones: ["centro Comercial", "A Comprar rosquillas", "sector de vagos y viciosos"],
        respuestaCorrecta: "sector de vagos y viciosos"
    },
    {
        pregunta: "¿Cuando homero asume de comisionado de limpia cuanto dinero gasta en un mes?",
        opciones: ["2 Millores", "4 Millones", "6 Millones"],
        respuestaCorrecta: "4 Millones"
    },
    {
        pregunta: "¿Cuanto era la deuda que tenia Krusty con la Mafia?",
        opciones: ["48 Dolares", "50 dolares", "Nunda tuvo Deuda"],
        respuestaCorrecta: "48 Dolares"
    },
    {
        pregunta: "¿Cuál es el último deseo que le pide Homero a la mano de mono?",
        opciones: ["sanwich de pavo", "muchas rosquillas", "que muera flanders"],
        respuestaCorrecta: "sanwich de pavo"
    },
    {
        pregunta: "¿Como se llama el gato de los simpson?",
        opciones: ["Ayudante de santa", "Bola de nieve", "No tienen gato"],
        respuestaCorrecta: "Bola de nieve"
    },
];

let indicePreguntaActual = 0;

const elementoPregunta = document.getElementById('pregunta');
const elementoOpciones = document.getElementById('opciones');
const botonSiguiente = document.getElementById('siguiente-boton');

function mostrarPregunta() {
    const preguntaActual = preguntas[indicePreguntaActual];
    elementoPregunta.textContent = preguntaActual.pregunta;

    elementoOpciones.innerHTML = '';
    preguntaActual.opciones.forEach((opcion) => {
        const listItem = document.createElement('li');
        const opcionBoton = document.createElement('button');
        opcionBoton.textContent = opcion;

        opcionBoton.addEventListener('click', () => verificarRespuesta(opcion));

        listItem.appendChild(opcionBoton);
        elementoOpciones.appendChild(listItem);
    });
}

function verificarRespuesta(respuestaSeleccionada) {
    const preguntaActual = preguntas[indicePreguntaActual];
    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        alert('¡Respuesta correcta!');
    } else {
        alert('Respuesta incorrecta. La respuesta correcta es: ' + preguntaActual.respuestaCorrecta);
    }

    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        alert('¡Fin del juego!');
        botonSiguiente.disabled = true;
    }
}

botonSiguiente.addEventListener('click', () => {
    mostrarPregunta();
    botonSiguiente.disabled = true;
});

mostrarPregunta();


let respuestasCorrectas = 0; // Variable para contar las respuestas correctas

function verificarRespuesta(respuestaSeleccionada) {
    const preguntaActual = preguntas[indicePreguntaActual];
    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        alert('¡Respuesta correcta!');
        respuestasCorrectas++; // Incrementar el contador de respuestas correctas
    } else {
        alert('Respuesta incorrecta. La respuesta correcta es: ' + preguntaActual.respuestaCorrecta);
    }

    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
        botonSiguiente.disabled = true;
    }
}

function mostrarResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Obtuviste ${respuestasCorrectas} respuestas correctas de ${preguntas.length}.`;
}

botonSiguiente.addEventListener('click', () => {
    mostrarPregunta();
    botonSiguiente.disabled = true;
});

mostrarPregunta();
