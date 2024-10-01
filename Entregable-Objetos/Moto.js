"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, patente, color, motor, anio, ruedas, marca, tipo_de_moto, cilindrada) {
        var _this = _super.call(this, modelo, patente, color, motor, anio, ruedas, marca) || this;
        _this.tipo_de_moto = tipo_de_moto;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.getTipoDeMoto = function () {
        return this.tipo_de_moto;
    };
    Moto.prototype.setTipoDeMoto = function (tipo) {
        this.tipo_de_moto = tipo;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Moto.prototype.setCilindrada = function (cilindrada) {
        this.cilindrada = cilindrada;
    };
    return Moto;
}(Vehiculo_1.Vehiculo));
exports.Moto = Moto;
