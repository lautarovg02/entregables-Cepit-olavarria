"use strict";
/**
 * Main: Simulación del juego
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Ataque_1 = require("./Habilidades/Ataque");
var Defensa_1 = require("./Habilidades/Defensa");
var Arquero_1 = require("./Personajes/Arquero");
var Luchador_1 = require("./Personajes/Luchador");
var Mago_1 = require("./Personajes/Mago");
function main() {
    // Creando un Mago 
    var mago = new Mago_1.Mago("Merlin", 120, 200);
    console.log("\u00A1Se ha creado un mago llamado ".concat(mago.getNombre(), " con ").concat(mago.getPuntosDeVida(), " puntos de vida y ").concat(mago.getMana(), " de mana!"));
    // Creamos algunas habilidades para el Mago: Hechizo de Fuego (Ataque) y Escudo de Energía (Defensa).
    var hechizoFuego = new Ataque_1.Ataque("Hechizo de Fuego", 15, 1, 40, 6);
    var escudoEnergia = new Defensa_1.Defensa("Escudo de Energía", 10, 1, 30, 3);
    // Le "ensenamos" las habilidades.
    mago.aprenderHabilidad(hechizoFuego);
    mago.aprenderHabilidad(escudoEnergia);
    mago.aprenderHabilidad(escudoEnergia);
    // Usamos la primera habilidad del mago (Hechizo de Fuego).
    console.log("\n-- El mago usa su primera habilidad --");
    mago.usarHabilidad(0);
    // Usamos la segunda habilidad del mago (Escudo de Energía).
    console.log("\n-- El mago usa su segunda habilidad --");
    mago.usarHabilidad(1);
    // Evolucionando al mago
    console.log("\n-- El mago sube de nivel --");
    for (var i = 0; i <= 10; i++) {
        mago.subirNivel(i); // Subimos 10 niveles
    }
    // Si el nivel es suficiente (10 o más), evolucionamos el mago.
    if (mago.getNivel() >= 10) {
        console.log("\n-- ¡El mago evolucionooo! --");
        mago.evolucionar();
        console.log("".concat(mago.getNombre(), " ahora tiene ").concat(mago.getPuntosDeVida(), " puntos de vida y ").concat(mago.getMana(), " de mana."));
    }
    // ----------------------------------------
    // Crear y probar un Luchador
    // ----------------------------------------
    // Creando un Luchador 
    var luchador = new Luchador_1.Luchador("Ares", 200, 50);
    console.log("\n\u00A1Se ha creado un luchador llamado ".concat(luchador.getNombre(), " con ").concat(luchador.getPuntosDeVida(), " puntos de vida y ").concat(luchador.getFuerza(), " de fuerza!"));
    // Cremos algunas habilidades para el luchador: Golpe de Poder (Ataque) y Bloqueo Ferreo (Defensa).
    var golpePoder = new Ataque_1.Ataque("Golpe de Poder", 20, 1, 70, 1);
    var bloqueoFerreo = new Defensa_1.Defensa("Bloqueo Ferreo", 10, 1, 40, 2);
    // El luchador aprende las habilidades.
    luchador.aprenderHabilidad(golpePoder);
    luchador.aprenderHabilidad(bloqueoFerreo);
    // Usamos la primera habilidad del luchador (Golpe de Poder).
    console.log("\n-- El luchador usa su primera habilidad --");
    luchador.usarHabilidad(0);
    // Usamos la segunda habilidad del luchador (Bloqueo Férreo).
    console.log("\n-- El luchador usa su segunda habilidad --");
    luchador.usarHabilidad(1);
    // Subimos de nivel al luchador varias veces y lo evolucionamos .
    console.log("\n-- El luchador sube de nivel --");
    for (var i = 0; i <= 10; i++) {
        luchador.subirNivel(i); // Subimos 10 niveles
    }
    // Evolucionando el luchador.
    if (luchador.getNivel() >= 10) {
        console.log("\n-- ¡El luchador evolucionooo! --");
        luchador.evolucionar();
        console.log("".concat(luchador.getNombre(), " ahora tiene ").concat(luchador.getPuntosDeVida(), " puntos de vida y ").concat(luchador.getFuerza(), " de fuerza."));
    }
    // ----------------------------------------
    // Crear y probar un Arquero
    // ----------------------------------------
    // Creamos un Arquero
    var arquero = new Arquero_1.Arquero("Dibu Martinez", 150, 80);
    console.log("\n\u00A1Se ha creado un arquero llamado ".concat(arquero.getNombre(), " con ").concat(arquero.getPuntosDeVida(), " puntos de vida y ").concat(arquero.getPrecision(), " de precisi\u00F3n!"));
    // Creamos algunas habilidades para el arquero: Flecha Explosiva (Ataque) y Esquiva Agil(Defensa).
    var flechaExplosiva = new Ataque_1.Ataque("Flecha Explosiva", 20, 1, 60, 7);
    var esquivaAgil = new Defensa_1.Defensa("Esquiva Agil", 5, 1, 20, 2);
    // El arquero aprende las habilidades.
    arquero.aprenderHabilidad(flechaExplosiva);
    arquero.aprenderHabilidad(esquivaAgil);
    // Usamos la primera habilidad del arquero (Flecha Explosiva).
    console.log("\n-- El arquero usa su primera habilidad --");
    arquero.usarHabilidad(0);
    // Usamos la segunda habilidad del arquero (Esquiva Ágil).
    console.log("\n-- El arquero usa su segunda habilidad --");
    arquero.usarHabilidad(1);
    // Subimos de nivel al arquero varias veces y lo evolucionamos .
    console.log("\n-- El arquero sube de nivel --");
    for (var i = 0; i <= 10; i++) {
        arquero.subirNivel(i); // Subimos 10 niveles
    }
    // Evolucionamos el arquero .
    if (arquero.getNivel() >= 10) {
        console.log("\n-- ¡El arquero esta evolucionandooo! --");
        arquero.evolucionar();
        console.log("".concat(arquero.getNombre(), " ahora tiene ").concat(arquero.getPuntosDeVida(), " puntos de vida y ").concat(arquero.getPrecision(), " de precisi\u00F3n."));
    }
}
// Ejecutar el main
main();
