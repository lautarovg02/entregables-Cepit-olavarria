import { Personaje } from "../Personaje";
export class Arquero extends Personaje {
    private precision: number;

    constructor(nombre: string, puntosDeVida: number, precision: number) {
        super(nombre, puntosDeVida);
        this.precision = precision;
    }

    evolucionar():void {
        console.log(`${this.getNombre()} esta evolucionando!`);
        this.setPuntosDeVida(this.getPuntosDeVida() + Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        this.setPrecision(this.getPrecision() + Math.floor(Math.random() * (50 - 20 + 1)) + 20) ;
    }

     getPrecision(): number { return this.precision; }
     setPrecision(precision: number) { this.precision = precision; }
}