import { Habilidad } from "../Habilidad";

export class Defensa extends Habilidad {
    private puntosDeDefensa: number;
    private duracion: number;

    constructor(nombre: string, costoDeEnergia: number, nivelRequerido: number, puntosDeDefensa: number, duracion: number) {
        super(nombre, costoDeEnergia, nivelRequerido);
        this.puntosDeDefensa = puntosDeDefensa;
        this.duracion = duracion;
    }

    usar(): void {
        console.log(`${this.getNombre()} defiende, bloqueando ${this.getPuntosDeDefensa()} puntos de daño por ${this.getDuracion()} turnos.`);
    }
    getPuntosDeDefensa() { return this.puntosDeDefensa; } 
    getDuracion() { return this.duracion; }
}