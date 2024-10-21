/**
 * Main: Simulación del juego 
 */

import { Ataque } from "./Habilidades/Ataque";
import { Defensa } from "./Habilidades/Defensa";
import { Arquero } from "./Personajes/Arquero";
import { Luchador } from "./Personajes/Luchador";
import { Mago } from "./Personajes/Mago";

function main() {
    // Creando un Mago 
    const mago = new Mago("Merlin", 120, 200);
    console.log(`¡Se ha creado un mago llamado ${mago.getNombre()} con ${mago.getPuntosDeVida()} puntos de vida y ${mago.getMana()} de mana!`);

    // Creamos algunas habilidades para el Mago: Hechizo de Fuego (Ataque) y Escudo de Energía (Defensa).
    const hechizoFuego = new Ataque("Hechizo de Fuego", 15, 1, 40, 6);
    const escudoEnergia = new Defensa("Escudo de Energía", 10, 1, 30, 3);

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
    for (let i = 0; i <= 10; i++) {
        mago.subirNivel(i);  // Subimos 10 niveles
    }

    // Si el nivel es suficiente (10 o más), evolucionamos el mago.
    if (mago.getNivel() >= 10) {
        console.log("\n-- ¡El mago evolucionooo! --");
        mago.evolucionar(); 
        console.log(`${mago.getNombre()} ahora tiene ${mago.getPuntosDeVida()} puntos de vida y ${mago.getMana()} de mana.`);
    }

    // ----------------------------------------
    // Crear y probar un Luchador
    // ----------------------------------------

    // Creando un Luchador 
    const luchador = new Luchador("Ares", 200, 50);
    console.log(`\n¡Se ha creado un luchador llamado ${luchador.getNombre()} con ${luchador.getPuntosDeVida()} puntos de vida y ${luchador.getFuerza()} de fuerza!`);

    // Cremos algunas habilidades para el luchador: Golpe de Poder (Ataque) y Bloqueo Ferreo (Defensa).
    const golpePoder = new Ataque("Golpe de Poder", 20, 1, 70, 1);
    const bloqueoFerreo = new Defensa("Bloqueo Ferreo", 10, 1, 40, 2);

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
    for (let i = 0; i <= 10; i++) {
        luchador.subirNivel(i);  // Subimos 10 niveles
    }

    // Evolucionando el luchador.
    if (luchador.getNivel() >= 10) {
        console.log("\n-- ¡El luchador evolucionooo! --");
        luchador.evolucionar();  
        console.log(`${luchador.getNombre()} ahora tiene ${luchador.getPuntosDeVida()} puntos de vida y ${luchador.getFuerza()} de fuerza.`);
    }

    // ----------------------------------------
    // Crear y probar un Arquero
    // ----------------------------------------

    // Creamos un Arquero
    const arquero = new Arquero("Dibu Martinez", 150, 80);
    console.log(`\n¡Se ha creado un arquero llamado ${arquero.getNombre()} con ${arquero.getPuntosDeVida()} puntos de vida y ${arquero.getPrecision()} de precisión!`);

    // Creamos algunas habilidades para el arquero: Flecha Explosiva (Ataque) y Esquiva Agil(Defensa).
    const flechaExplosiva = new Ataque("Flecha Explosiva", 20, 1, 60, 7);
    const esquivaAgil = new Defensa("Esquiva Agil", 5, 1, 20, 2);

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
    for (let i = 0; i <= 10; i++) {
        arquero.subirNivel(i);  // Subimos 10 niveles
    }

    // Evolucionamos el arquero .
    if (arquero.getNivel() >= 10) {
        console.log("\n-- ¡El arquero esta evolucionandooo! --");
        arquero.evolucionar();  
        console.log(`${arquero.getNombre()} ahora tiene ${arquero.getPuntosDeVida()} puntos de vida y ${arquero.getPrecision()} de precisión.`);
    }
}

// Ejecutar el main
main();