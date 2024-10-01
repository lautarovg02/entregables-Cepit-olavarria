"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(vehiculos) {
        this.vehiculos = vehiculos;
    }
    RegistroAutomotor.prototype.addVehiculo = function (vehiculo) {
        if (vehiculo)
            this.vehiculos.push(vehiculo);
        else
            console.log("No puede agregar un vehiculo que sea nulo");
    };
    RegistroAutomotor.prototype.setVehiculos = function (vehiculos) {
        this.vehiculos = vehiculos;
    };
    RegistroAutomotor.prototype.getVehiculos = function () {
        return this.vehiculos;
    };
    RegistroAutomotor.prototype.darDeBaja = function (vehiculo) {
        this.setVehiculos(this.vehiculos.filter(function (v) { return v.getPatente() !== vehiculo.getPatente(); }));
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, vehiculoModificado) {
        if (this.vehiculos.find(function (v) { return v.getPatente() === patente; })) {
            var index = this.vehiculos.findIndex(function (v) { return v.getPatente() === patente; });
            this.vehiculos.splice(index, 1, vehiculoModificado);
            console.log("Veh\u00EDculo con patente ".concat(patente, " modificado satisfactoriamente."));
        }
        else {
            console.log("El Veh\u00EDculo con patente ".concat(patente, " no se encuentra en el registro."));
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
