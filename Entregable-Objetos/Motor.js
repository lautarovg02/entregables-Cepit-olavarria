"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor(tipo, potencia, cilindrada) {
        this.tipo = tipo;
        this.potencia = potencia;
        this.cilindrada = cilindrada;
    }
    Motor.prototype.getTipo = function () {
        return this.tipo;
    };
    Motor.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Motor.prototype.getPotencia = function () {
        return this.potencia;
    };
    Motor.prototype.setPotencia = function (potencia) {
        this.potencia = potencia;
    };
    Motor.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Motor.prototype.setCilindrada = function (cilindrada) {
        this.cilindrada = cilindrada;
    };
    return Motor;
}());
exports.Motor = Motor;
