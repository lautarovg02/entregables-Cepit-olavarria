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
exports.Defensa = void 0;
var Habilidad_1 = require("../Habilidad");
var Defensa = /** @class */ (function (_super) {
    __extends(Defensa, _super);
    function Defensa(nombre, costoDeEnergia, nivelRequerido, puntosDeDefensa, duracion) {
        var _this = _super.call(this, nombre, costoDeEnergia, nivelRequerido) || this;
        _this.puntosDeDefensa = puntosDeDefensa;
        _this.duracion = duracion;
        return _this;
    }
    Defensa.prototype.usar = function () {
        console.log("".concat(this.getNombre(), " defiende, bloqueando ").concat(this.getPuntosDeDefensa(), " puntos de da\u00F1o por ").concat(this.getDuracion(), " turnos."));
    };
    Defensa.prototype.getPuntosDeDefensa = function () { return this.puntosDeDefensa; };
    Defensa.prototype.getDuracion = function () { return this.duracion; };
    return Defensa;
}(Habilidad_1.Habilidad));
exports.Defensa = Defensa;
