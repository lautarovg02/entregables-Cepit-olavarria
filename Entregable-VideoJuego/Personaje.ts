import { Habilidad } from "./Habilidad";

export abstract class Personaje {
    private nombre: string;
    private nivel: number;
    private puntosDeVida: number;
    private habilidades: Habilidad[];

    constructor(nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
        this.habilidades = [];
    }

    getNombre() { return this.nombre; }
    getNivel() { return this.nivel; }
    getPuntosDeVida() { return this.puntosDeVida;}
    getHabilidades() { return this.habilidades;};
    setNombre(nombre:string){this.nombre = nombre;}
    setPuntosDeVida(puntosDeVida:number){this.puntosDeVida = puntosDeVida;}

    atacar(): void {
        console.log(`${this.getNombre()} está atacando.`);
    }

    defender(): void {
        console.log(`${this.getNombre()} está defendiendo.`);
    }

    setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    subirNivel(nivel:number): void {
        this.setNivel(nivel);
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);

    }

    aprenderHabilidad(habilidad: Habilidad): void {
        const existe = this.habilidades.some(h => h.getNombre() === habilidad.getNombre());  
        if (!existe) {  
        this.habilidades.push(habilidad);  
        console.log(`${this.nombre} ha aprendido la habilidad: ${habilidad.getNombre()}`);  
        } else {  
        console.log(`${this.nombre} ya conoce la habilidad: ${habilidad.getNombre()}`);  
        } 
        
    }

    usarHabilidad(indice: number): void {
        if (indice >= 0 && indice < this.habilidades.length) {
            this.habilidades[indice].usar();
        } else {
            console.log("Habilidad no disponible.");
        }
    }

    abstract evolucionar(): void;
}