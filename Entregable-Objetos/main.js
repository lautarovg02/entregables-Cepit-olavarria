"use strict";
// Main  
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Camion_1 = require("./Camion");
var Moto_1 = require("./Moto");
var Motor_1 = require("./Motor");
var RegistroAutomor_1 = require("./RegistroAutomor");
var Rueda_1 = require("./Rueda");
function main() {
    //* Crear ruedas y motor  
    var rueda1 = new Rueda_1.Rueda(16, "Michelin", 32);
    var rueda2 = new Rueda_1.Rueda(16, "Michelin", 32);
    var ruedasAuto = [rueda1, rueda2, rueda1, rueda2];
    var motorAuto = new Motor_1.Motor("combustión", 150, 2000);
    var motorCamion = new Motor_1.Motor("diesel", 300, 5000);
    var motorMoto = new Motor_1.Motor("eléctrico", 75, 0);
    //* Crear vehículos  
    var auto = new Auto_1.Auto("sedán", 400, "Modelo X", "FGD241", "Rojo", motorAuto, 2020, ruedasAuto, "Chevrolet");
    var camion = new Camion_1.Camion(10000, 4, "Camion DSA", "SDF789", "Azul", motorCamion, 2021, [rueda1, rueda2, rueda1, rueda2], "Ford");
    var moto = new Moto_1.Moto("Deportiva", "LMN456", "Negro", motorMoto, 2023, [rueda1, rueda2], "BWM", "Deportiva", "600cc");
    //* Inicializar registro  
    var registro = new RegistroAutomor_1.RegistroAutomotor([]);
    //* Agregar vehículos al registro  
    registro.addVehiculo(auto);
    registro.addVehiculo(camion);
    registro.addVehiculo(moto);
    //* Mostrar vehículos en el registro  
    console.log("Vehículos en el registro:");
    console.log(registro.getVehiculos());
    //* Modificar un vehículo  
    var nuevoCamion = new Camion_1.Camion(12000, 6, "Camion Modificado", "XYZ789", "Verde", motorCamion, 2021, [rueda1, rueda2, rueda1, rueda2], "Marca B");
    registro.modificarVehiculo("XYZ789", nuevoCamion);
    //* Mostrar vehículos después de la modificación  
    console.log("Vehículos después de la modificación:");
    console.log(registro.getVehiculos());
    // Dar de baja un vehículo  
    registro.darDeBaja(auto);
    // Mostrar vehículos después de dar de baja  
    console.log("Vehículos después de dar de baja:");
    console.log(registro.getVehiculos());
}
main();
