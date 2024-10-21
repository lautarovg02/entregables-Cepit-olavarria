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
exports.Arquero = void 0;
var Personaje_1 = require("../Personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, precision) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.precision = precision;
        return _this;
    }
    Arquero.prototype.evolucionar = function () {
        console.log("".concat(this.getNombre(), " esta evolucionando!"));
        this.setPuntosDeVida(this.getPuntosDeVida() + Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        this.setPrecision(this.getPrecision() + Math.floor(Math.random() * (50 - 20 + 1)) + 20);
    };
    Arquero.prototype.getPrecision = function () { return this.precision; };
    Arquero.prototype.setPrecision = function (precision) { this.precision = precision; };
    return Arquero;
}(Personaje_1.Personaje));
exports.Arquero = Arquero;
