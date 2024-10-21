import { Personaje } from "../Personaje";

export class Luchador extends Personaje {
    private fuerza: number;

    constructor(nombre: string, puntosDeVida: number, fuerza: number) {
        super(nombre, puntosDeVida);
        this.fuerza = fuerza;
    }

    evolucionar():void {
        console.log(`${this.getNombre()} esta evolucionado!`);
        this.setPuntosDeVida(this.getPuntosDeVida() + Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        this.setFuerza(this.getFuerza() + Math.floor(Math.random() * (50 - 20 + 1)) + 20);
    }

     getFuerza(): number { return this.fuerza; }
     setFuerza(fuerza: number) { this.fuerza = fuerza; }
}