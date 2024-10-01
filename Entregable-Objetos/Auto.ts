import { Motor } from "./Motor";
import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private tipo_de_carroceria: string;
    private capacidad_baul:number;

    constructor(tipo_de_carroceria:string, capacidad_baul:number, modelo: string, patente: string, color: string, motor:Motor, anio: number, ruedas: Rueda[], marca: string) {
        super(modelo, patente, color, motor, anio, ruedas, marca);
        this.capacidad_baul = capacidad_baul;
        this.tipo_de_carroceria = tipo_de_carroceria;
    }

    
    public getTipoDeCarroceria(): string {  
        return this.tipo_de_carroceria;  
    }  

    public setTipoDeCarroceria(tipo: string): void {  
        this.tipo_de_carroceria = tipo;  
    }  

    public getCapacidadBaul(): number {  
        return this.capacidad_baul;  
    }  

    public setCapacidadBaul(capacidad: number): void {  
        this.capacidad_baul = capacidad;  
    }  
}