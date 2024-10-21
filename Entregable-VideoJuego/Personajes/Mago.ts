import {Personaje} from "../Personaje";

export class Mago extends Personaje {
    private mana: number;

    constructor(nombre: string, puntosDeVida: number, mana: number) {
        super(nombre, puntosDeVida);
        this.mana = mana;
    }

    evolucionar(): void {
        console.log(`${this.getNombre()} ha evolucionado a Mago Supremo!`);
        this.setPuntosDeVida(this.getPuntosDeVida() + Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        this.setMana(this.getMana() + Math.floor(Math.random() * (50 - 10 + 1)) + 20);

    }

    setMana(mana: number) {
        this.mana = mana;
    }

    getMana(): number {
        return this.mana;
    }
}