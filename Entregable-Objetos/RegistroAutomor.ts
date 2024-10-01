import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor{
    private vehiculos: Vehiculo[];

    constructor(vehiculos:Vehiculo[]){
        this.vehiculos = vehiculos;
    }

    public addVehiculo(vehiculo:Vehiculo){
        if(vehiculo)
            this.vehiculos.push(vehiculo);
        else console.log("No puede agregar un vehiculo que sea nulo");
    }

    public setVehiculos(vehiculos:Vehiculo[]) {
        this.vehiculos = vehiculos;
    }

    public getVehiculos(){
        return this.vehiculos;
    }

    public darDeBaja(vehiculo: Vehiculo){
        this.setVehiculos(this.vehiculos.filter(v => v.getPatente() !== vehiculo.getPatente()));
    }
    
    public modificarVehiculo(patente: string, vehiculoModificado:Vehiculo){
        if(this.vehiculos.find(v => v.getPatente() === patente)){
            const index = this.vehiculos.findIndex(v => v.getPatente() === patente);     
            this.vehiculos.splice(index, 1, vehiculoModificado); 
            console.log(`Vehículo con patente ${patente} modificado satisfactoriamente.`);  
        }else{
            console.log(`El Vehículo con patente ${patente} no se encuentra en el registro.`);  
        }
    }

  
}