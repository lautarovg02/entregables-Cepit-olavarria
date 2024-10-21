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
exports.Luchador = void 0;
var Personaje_1 = require("../Personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosDeVida, fuerza) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    Luchador.prototype.evolucionar = function () {
        console.log("".concat(this.getNombre(), " esta evolucionado!"));
        this.setPuntosDeVida(this.getPuntosDeVida() + Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        this.setFuerza(this.getFuerza() + Math.floor(Math.random() * (50 - 20 + 1)) + 20);
    };
    Luchador.prototype.getFuerza = function () { return this.fuerza; };
    Luchador.prototype.setFuerza = function (fuerza) { this.fuerza = fuerza; };
    return Luchador;
}(Personaje_1.Personaje));
exports.Luchador = Luchador;
