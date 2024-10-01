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
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(tipo_de_carroceria, capacidad_baul, modelo, patente, color, motor, anio, ruedas, marca) {
        var _this = _super.call(this, modelo, patente, color, motor, anio, ruedas, marca) || this;
        _this.capacidad_baul = capacidad_baul;
        _this.tipo_de_carroceria = tipo_de_carroceria;
        return _this;
    }
    Auto.prototype.getTipoDeCarroceria = function () {
        return this.tipo_de_carroceria;
    };
    Auto.prototype.setTipoDeCarroceria = function (tipo) {
        this.tipo_de_carroceria = tipo;
    };
    Auto.prototype.getCapacidadBaul = function () {
        return this.capacidad_baul;
    };
    Auto.prototype.setCapacidadBaul = function (capacidad) {
        this.capacidad_baul = capacidad;
    };
    return Auto;
}(Vehiculo_1.Vehiculo));
exports.Auto = Auto;
