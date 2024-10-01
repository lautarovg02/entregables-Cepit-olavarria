"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rueda = void 0;
var Rueda = /** @class */ (function () {
    function Rueda(diametro, marca, presion) {
        this.diametro = diametro;
        this.marca = marca;
        this.presion = presion;
    }
    Rueda.prototype.getDiametro = function () {
        return this.diametro;
    };
    Rueda.prototype.setDiametro = function (diametro) {
        this.diametro = diametro;
    };
    Rueda.prototype.getMarca = function () {
        return this.marca;
    };
    Rueda.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Rueda.prototype.getPresion = function () {
        return this.presion;
    };
    Rueda.prototype.setPresion = function (presion) {
        this.presion = presion;
    };
    return Rueda;
}());
exports.Rueda = Rueda;
