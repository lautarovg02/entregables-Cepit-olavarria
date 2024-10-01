// Main  

import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { Motor } from "./Motor";
import { RegistroAutomotor } from "./RegistroAutomor";
import { Rueda } from "./Rueda";

function main() {  
    //* Crear ruedas y motor  
    const rueda1 = new Rueda(16, "Michelin", 32);  
    const rueda2 = new Rueda(16, "Michelin", 32);  
    const ruedasAuto = [rueda1, rueda2, rueda1, rueda2];  
    
    const motorAuto = new Motor("combustión", 150, 2000);  
    const motorCamion = new Motor("diesel", 300, 5000);  
    const motorMoto = new Motor("eléctrico", 75, 0);  

    //* Crear vehículos  
    const auto = new Auto("sedán", 400, "Modelo X", "FGD241", "Rojo", motorAuto, 2020, ruedasAuto, "Chevrolet");  
    const camion = new Camion(10000, 4, "Camion DSA", "SDF789", "Azul", motorCamion, 2021, [rueda1, rueda2, rueda1, rueda2], "Ford");  
    const moto = new Moto("Deportiva", "LMN456", "Negro", motorMoto, 2023, [rueda1, rueda2], "BWM", "Deportiva", "600cc");  

    //* Inicializar registro  
    const registro = new RegistroAutomotor([]);  

    //* Agregar vehículos al registro  
    registro.addVehiculo(auto);  
    registro.addVehiculo(camion);  
    registro.addVehiculo(moto);  

    //* Mostrar vehículos en el registro  
    console.log("Vehículos en el registro:");  
    console.log(registro.getVehiculos());  

    //* Modificar un vehículo  
    const nuevoCamion = new Camion(12000, 6, "Camion Modificado", "XYZ789", "Verde", motorCamion, 2021, [rueda1, rueda2, rueda1, rueda2], "Marca B");  
    registro.modificarVehiculo("XYZ789", nuevoCamion);  
    
    //* Mostrar vehículos después de la modificación  
    console.log("Vehículos después de la modificación:");  
    console.log(registro.getVehiculos());  

    //* Dar de baja un vehículo  
    registro.darDeBaja(auto);  
    
    //* Mostrar vehículos después de dar de baja  
    console.log("Vehículos después de dar de baja:");  
    console.log(registro.getVehiculos());  
}  
main();