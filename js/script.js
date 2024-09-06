//fecha
function fecha(){
let fecha = new Date();    
let dia = fecha.getDate();
let mes = fecha.getMonth();
let anio = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
    alert ("La fecha de hoy es: Día: " + dia + " Mes: " + (mes+1) + " Año: " + anio + ". Hora: " + (hora+1) + ":"+ (minutos+1) + " Hs.");
}

//saludo con localstorage
function saludar() {
    let nombre = localStorage.getItem('nombreUsuario');
    if (!nombre) {
        nombre = prompt("¿Cómo es tu nombre?", "Juan Perez").trim();
        if (nombre !== "") {
            localStorage.setItem('nombreUsuario', nombre);
        } else {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
    }
    let confirmar = confirm(nombre + " ¿Estás listo para continuar navegando por esta página de muestra?");
    if (confirmar == true) {
        alert("¡Bienvenido a esta página de prueba, " + nombre + "!");
    } else {
        alert("¿Cómo que no estás listo?");
    }
}


//juego
let puntajeTotal = 0;
function juego() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Recuerda, que cada respuesta correcta suma 10 puntos, y cada respuesta incorrecta resta 5 puntos. Escribe en minúsculas y sin tildes. ¿Listo para jugar?");

    // Preguntas
    let pregunta1 = parseInt(prompt("¿Cuántas provincias tiene Argentina? Opc: 23, 24, 27, 28"));
    let pregunta2 = parseInt(prompt("¿Cuántos países hay en total en el mundo? Opc: 84, 120, 195, 204"));
    let pregunta3 = prompt("¿Cuál es la capital de Rusia? Opc: san petersburgo, rusia, moscu, kazan");
    let pregunta4 = parseInt(prompt("¿En que año fue la guerra de Malvinas? Opc: 1962, 1972, 1982, 1992"));
    let pregunta5 = parseInt(prompt("¿En que año terminó la segunda guerra mundial? Opc: 1940, 1945, 1954, 1958"));
    let pregunta6 = prompt("¿Qué país tiene la mayor población del mundo actualmente? Opc: india, china, japon, rusia");
    let pregunta7 = prompt("¿Quién fue el creador de la bandera argentina? Opc: sarmiento, san martin, belgrano, pueyrredon");
    let pregunta8 = prompt("¿Cuál es la capital de Brasil? Opc: brasil, rio de janeiro, sao paulo, brasilia");
    let pregunta9 = prompt("¿Cuál es la religión con más devotos en el mundo? Opc: budismo, hinduismo, musulmana, cristianismo");
    let pregunta10 = parseInt(prompt("¿En qué año se declaró la independencia de Argentina? Opc: 1810, 1816, 1910, 1916"));

    // Respuestas
    if (pregunta1 === 23) {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta2 === 195) {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta3 === "moscu") {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta4 === 1982) {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta5 === 1945) {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta6 === "india") {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta7 === "belgrano") {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta8 === "brasilia") {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta9 === "cristianismo") {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    if (pregunta10 === 1816) {
        puntajeTotal += 10;  
    } else {
        puntajeTotal -= 5;   
    }
    // Mostrar el puntaje final
    alert(nombre + ", tu puntaje es " + puntajeTotal + " de 100");
    console.log(nombre + " obtuvo un puntaje de: " + puntajeTotal);
}

//página restautante 
let total = 0;
        function agregarAlTotal(precio) {
            total += precio;
             }    
function verTotal(){
    alert ("El total de tu pedido es: $" +total);
        }


//ciclos
function ciclowhile(){
    let contador = 0;
    while (contador <= 10){
    console.log ("Vuelta nº " + contador + " del ciclo while.");
    contador ++;
}
}    
function ciclodowhile(){
    let contador=0;
    do{
        console.log("Vuela nº " + contador + " de ciclo do while.")
        contador ++;
    }
    while (contador <= 18)
}
function ciclofor(){
    for (let i=0; i<15; i++)
    console.log ("Vuelta nº " + i + " del ciclo for.");
}
function cuentaregresiva(){
    for (let i=10; i>=0; i--)
    console.log ("Vuelta nº " + i + " de cuenta regresiva.");
    alert ("¡Feliz año nuevo!");
}

//Viajando por Argentina
let provinciasArg = [
                    ["Jujuy", "Salta", "Formosa", "Chaco"],
                    ["Santiago del estero", "Tucumán", "Catamarca", "La Rioja"],
                    ["Mendoza", "San Juan", "San Luis", "Córdoba"],
                    ["Entre Ríos", "Corrientes", "Santa Fe", "Buenos Aires"],
                    ["La Pampa", "Rio Negro", "Neuquén", "Chubut"],
                    ["Santa Cruz", "Tierra del fuego"]
];
function viajar(){
for (let f=0; f<provinciasArg.length; f++){
    for (let c=0; c<provinciasArg.length; c++)
    console.log (provinciasArg [f] [c]);
}
}

//DOM
function cambiar(){
    let párrafo = document.getElementById("texto");
    párrafo.textContent = "Felicitaciones! Cambiaste el párrafo mediante el uso de getElementByID";
    párrafo.style.color = "yellow";
    párrafo.style.fontWeight = "bold";
}

