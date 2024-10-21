export abstract class Habilidad{
    private nombre: string;
    private costoDeEnergia: number;
    private nivelRequerido: number;

    constructor(nombre: string, costoDeEnergia: number, nivelRequerido: number) {
        this.nombre = nombre;
        this.costoDeEnergia = costoDeEnergia;
        this.nivelRequerido = nivelRequerido;
    }

    abstract usar(): void;

    getNombre(): string{ return this.nombre; }
    setNombre(nombre: string){ this.nombre = nombre;}
    getNivelRequerido(): number{ return this.nivelRequerido};
    setNivelRequerido(nivelRequerido: number){ this.nivelRequerido}
    getCostoDeEnergia(): number { return this.costoDeEnergia; }
    setCostoDeEnergia(costo: number){ this.costoDeEnergia = costo}
}