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
exports.Ataque = void 0;
var Habilidad_1 = require("../Habilidad");
var Ataque = /** @class */ (function (_super) {
    __extends(Ataque, _super);
    function Ataque(nombre, costoDeEnergia, nivelRequerido, dano, rango) {
        var _this = _super.call(this, nombre, costoDeEnergia, nivelRequerido) || this;
        _this.dano = dano;
        _this.rango = rango;
        return _this;
    }
    Ataque.prototype.usar = function () {
        console.log("".concat(this.getNombre(), " ataca causando ").concat(this.getDano(), " de da\u00F1o con un rango de ").concat(this.getRango()));
    };
    Ataque.prototype.getRango = function () { return this.rango; };
    Ataque.prototype.getDano = function () { return this.dano; };
    Ataque.prototype.setDano = function (dano) { this.dano = dano; };
    Ataque.prototype.setRango = function (rango) { this.rango = rango; };
    return Ataque;
}(Habilidad_1.Habilidad));
exports.Ataque = Ataque;
