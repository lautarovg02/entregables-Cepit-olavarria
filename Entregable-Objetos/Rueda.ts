export class Rueda {  
    private diametro: number; 
    private marca: string;  
    private presion: number; 
    constructor(diametro: number, marca: string, presion: number) {  
        this.diametro = diametro;  
        this.marca = marca;  
        this.presion = presion;  
    }  

    public getDiametro(): number {  
        return this.diametro;  
    }  

    public setDiametro(diametro: number): void {  
        this.diametro = diametro;  
    }  

    public getMarca(): string {  
        return this.marca;  
    }  

    public setMarca(marca: string): void {  
        this.marca = marca;  
    }  

    public getPresion(): number {  
        return this.presion;  
    }  

    public setPresion(presion: number): void {  
        this.presion = presion;  
    }  
}  