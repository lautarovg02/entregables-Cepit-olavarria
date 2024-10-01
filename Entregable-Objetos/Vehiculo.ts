import { Motor } from "./Motor";
import { Rueda } from "./Rueda";

export class Vehiculo{
    private marca: string;
    private modelo: string;
    private patente: string;
    private color: string;
    private motor: Motor;
    private anio: number;
    private ruedas: Rueda[];
    

    constructor(modelo: string, patente: string, color: string, motor:Motor, anio: number, ruedas: Rueda[], marca: string){
        this.modelo = modelo;
        this.patente = patente;
        this.color = color;
        this.motor = motor;
        this.anio = anio;
        this.ruedas = ruedas;
        this.marca = marca;
    }

    public getMarca(): string {  
        return this.marca;  
    }  

    public getModelo(): string {  
        return this.modelo;  
    }  

    public getPatente(): string {  
        return this.patente;  
    }  

    public getColor(): string {  
        return this.color;  
    }  

    public getMotor(): Motor {  
        return this.motor;  
    }  

    public getAnio(): number {  
        return this.anio;  
    }  

    public getRuedas(): Rueda[] {  
        return this.ruedas;  
    }  

    public setPatente(patente: string): void {  
        this.patente = patente;  
    }  

    public setColor(color: string): void {  
        this.color = color;  
    }  

    public setMotor(motor: Motor): void {  
        this.motor = motor;  
    }  

    public setRuedas(ruedas: Rueda[]): void {  
        this.ruedas = ruedas;  
    }  
    
}