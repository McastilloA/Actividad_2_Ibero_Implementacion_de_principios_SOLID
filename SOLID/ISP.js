/**
 * Este ejemplo no cumple el principio ISP, ya que la clase FishISP necesita implementar
 * el método fly() que no usa su objeto. De manera similar, EageleISP necesita implementar swim(),
 * que no debe hacer.
 */
var FishISP = /** @class */ (function () {
    function FishISP() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    FishISP.prototype.fly = function () {
        return 'Este pez no vuela';
    };
    FishISP.prototype.swim = function () {
        return 'Este pez nada';
    };
    return FishISP;
}());
/** Instancia del objeto en una variable e impresión en consola */
var fishISP = new FishISP();
console.log('ISP1-Bad:', fishISP.fly());
console.log('ISP2-Bad:', fishISP.swim());
var EageleISP = /** @class */ (function () {
    function EageleISP() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    EageleISP.prototype.fly = function () {
        return 'Esta ave vuela';
    };
    EageleISP.prototype.swim = function () {
        return 'Este ave no nada';
    };
    return EageleISP;
}());
/** Instancia del objeto en una variable e impresión en consola */
var eageleISP = new EageleISP();
console.log('ISP3-Bad:', eageleISP.fly());
console.log('ISP4-Bad:', eageleISP.swim());
var FishISP2 = /** @class */ (function () {
    function FishISP2() {
    }
    FishISP2.prototype.swim = function () {
        return 'Simplemente nada';
    };
    return FishISP2;
}());
/** Instancia del objeto en una variable e impresión en consola */
var fishISP2 = new FishISP2();
console.log('ISP5-Good:', fishISP2.swim());
var EageleISP2 = /** @class */ (function () {
    function EageleISP2() {
    }
    EageleISP2.prototype.fly = function () {
        return 'Simpelmente vuela';
    };
    return EageleISP2;
}());
/** Instancia del objeto en una variable e impresión en consola */
var eageleISP2 = new EageleISP2();
console.log('ISP6-Good:', eageleISP2.fly());
