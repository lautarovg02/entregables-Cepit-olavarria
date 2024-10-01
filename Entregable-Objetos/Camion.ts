import { Motor } from "./Motor";
import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private capacidad_de_carga:number;
    private num_ejes:number;

    constructor(capacidad_de_carga:number, num_ejes:number, modelo: string, patente: string, color: string, motor:Motor, anio: number, ruedas: Rueda[], marca: string) {
        super(modelo, patente, color, motor, anio, ruedas, marca);
        this.capacidad_de_carga = capacidad_de_carga;
        this.num_ejes = num_ejes;
    }
    
    public getCapacidadDeCarga(): number {  
        return this.capacidad_de_carga;  
    }  

    public setCapacidadDeCarga(capacidad: number): void {  
        this.capacidad_de_carga = capacidad;  
    }  

    public getNumEjes(): number {  
        return this.num_ejes;  
    }  

    public setNumEjes(numEjes: number): void {  
        this.num_ejes = numEjes;  
    }  
}