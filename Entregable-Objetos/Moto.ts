import { Motor } from "./Motor";
import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private tipo_de_moto: string;
    private cilindrada: string;

    constructor(modelo: string, patente: string, color: string, motor:Motor, anio: number, ruedas: Rueda[], marca: string,tipo_de_moto: string, cilindrada: string) {
        super(modelo, patente, color, motor, anio, ruedas, marca);
        this.tipo_de_moto = tipo_de_moto;
        this.cilindrada = cilindrada;
    }

    public getTipoDeMoto(): string {  
        return this.tipo_de_moto;  
    }  

    public setTipoDeMoto(tipo: string): void {  
        this.tipo_de_moto = tipo;  
    }  

    public getCilindrada(): string {  
        return this.cilindrada;  
    }  

    public setCilindrada(cilindrada: string): void {  
        this.cilindrada = cilindrada;  
    }  
}