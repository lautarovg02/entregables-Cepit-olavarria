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
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(capacidad_de_carga, num_ejes, modelo, patente, color, motor, anio, ruedas, marca) {
        var _this = _super.call(this, modelo, patente, color, motor, anio, ruedas, marca) || this;
        _this.capacidad_de_carga = capacidad_de_carga;
        _this.num_ejes = num_ejes;
        return _this;
    }
    Camion.prototype.getCapacidadDeCarga = function () {
        return this.capacidad_de_carga;
    };
    Camion.prototype.setCapacidadDeCarga = function (capacidad) {
        this.capacidad_de_carga = capacidad;
    };
    Camion.prototype.getNumEjes = function () {
        return this.num_ejes;
    };
    Camion.prototype.setNumEjes = function (numEjes) {
        this.num_ejes = numEjes;
    };
    return Camion;
}(Vehiculo_1.Vehiculo));
exports.Camion = Camion;
