"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(modelo, patente, color, motor, anio, ruedas, marca) {
        this.modelo = modelo;
        this.patente = patente;
        this.color = color;
        this.motor = motor;
        this.anio = anio;
        this.ruedas = ruedas;
        this.marca = marca;
    }
    // Getters  
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getMotor = function () {
        return this.motor;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getRuedas = function () {
        return this.ruedas;
    };
    // Setters   
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehiculo.prototype.setMotor = function (motor) {
        this.motor = motor;
    };
    Vehiculo.prototype.setRuedas = function (ruedas) {
        this.ruedas = ruedas;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
