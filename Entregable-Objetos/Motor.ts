export class Motor {  
    private tipo: string;   
    private potencia: number;
    private cilindrada: number;  

    constructor(tipo: string, potencia: number, cilindrada: number) {  
        this.tipo = tipo;  
        this.potencia = potencia;  
        this.cilindrada = cilindrada;  
    }  

    public getTipo(): string {  
        return this.tipo;  
    }  

    public setTipo(tipo: string): void {  
        this.tipo = tipo;  
    }  

    public getPotencia(): number {  
        return this.potencia;  
    }  

    public setPotencia(potencia: number): void {  
        this.potencia = potencia;  
    }  

    public getCilindrada(): number {  
        return this.cilindrada;  
    }  

    public setCilindrada(cilindrada: number): void {  
        this.cilindrada = cilindrada;  
    }  
}  