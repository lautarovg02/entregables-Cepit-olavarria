"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habilidad = void 0;
var Habilidad = /** @class */ (function () {
    function Habilidad(nombre, costoDeEnergia, nivelRequerido) {
        this.nombre = nombre;
        this.costoDeEnergia = costoDeEnergia;
        this.nivelRequerido = nivelRequerido;
    }
    Habilidad.prototype.getNombre = function () { return this.nombre; };
    Habilidad.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Habilidad.prototype.getNivelRequerido = function () { return this.nivelRequerido; };
    ;
    Habilidad.prototype.setNivelRequerido = function (nivelRequerido) { this.nivelRequerido; };
    Habilidad.prototype.getCostoDeEnergia = function () { return this.costoDeEnergia; };
    Habilidad.prototype.setCostoDeEnergia = function (costo) { this.costoDeEnergia = costo; };
    return Habilidad;
}());
exports.Habilidad = Habilidad;
