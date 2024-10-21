"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
        this.habilidades = [];
    }
    Personaje.prototype.getNombre = function () { return this.nombre; };
    Personaje.prototype.getNivel = function () { return this.nivel; };
    Personaje.prototype.getPuntosDeVida = function () { return this.puntosDeVida; };
    Personaje.prototype.getHabilidades = function () { return this.habilidades; };
    ;
    Personaje.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Personaje.prototype.setPuntosDeVida = function (puntosDeVida) { this.puntosDeVida = puntosDeVida; };
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.getNombre(), " est\u00E1 atacando."));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.getNombre(), " est\u00E1 defendiendo."));
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.subirNivel = function (nivel) {
        this.setNivel(nivel);
        console.log("".concat(this.nombre, " ha subido al nivel ").concat(this.nivel, "."));
    };
    Personaje.prototype.aprenderHabilidad = function (habilidad) {
        var existe = this.habilidades.some(function (h) { return h.getNombre() === habilidad.getNombre(); });
        if (!existe) {
            this.habilidades.push(habilidad);
            console.log("".concat(this.nombre, " ha aprendido la habilidad: ").concat(habilidad.getNombre()));
        }
        else {
            console.log("".concat(this.nombre, " ya conoce la habilidad: ").concat(habilidad.getNombre()));
        }
    };
    Personaje.prototype.usarHabilidad = function (indice) {
        if (indice >= 0 && indice < this.habilidades.length) {
            this.habilidades[indice].usar();
        }
        else {
            console.log("Habilidad no disponible.");
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
