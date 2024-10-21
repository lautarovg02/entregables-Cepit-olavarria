import { Habilidad } from "../Habilidad";

export class Ataque extends Habilidad {
    private dano: number;
    private rango: number;

    constructor(nombre: string, costoDeEnergia: number, nivelRequerido: number, dano: number, rango: number) {
        super(nombre, costoDeEnergia, nivelRequerido);
        this.dano = dano;
        this.rango = rango;
    }

    usar(): void {
        console.log(`${this.getNombre()} ataca causando ${this.getDano()} de daño con un rango de ${this.getRango()}`);
    }

    getRango(): number { return this.rango; }
    getDano(): number { return this.dano; }
    setDano(dano: number) { this.dano = dano; }
    setRango(rango: number) { this.rango = rango;}
}