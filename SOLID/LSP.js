var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * En estas clase no cumplen el principio LSP porque, el principio nos dice que
 * que los tipos derivados deben ser completamente sustituibles por sus tipos base y en las clases
 * de ejemplo ninguna sustituyo a ninguna.
 */
var BirdBad = /** @class */ (function () {
    function BirdBad() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    BirdBad.prototype.fly = function () {
        console.log('LSP1-Bad: Ellos pueden volar!');
    };
    return BirdBad;
}());
var FlyingFish = /** @class */ (function (_super) {
    __extends(FlyingFish, _super);
    function FlyingFish() {
        return _super.call(this) || this;
    }
    return FlyingFish;
}(BirdBad));
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        return _super.call(this) || this;
    }
    return Eagle;
}(BirdBad));
/** Instancia del objeto en una variable e impresión en consola */
var flyingFish = new FlyingFish();
flyingFish.fly();
var eagle = new Eagle();
eagle.fly();
/**********************************************************************************************/
/**
 * En estas clases se evidencia que este principio es una variación del principio OCP,
 * dice que los tipos derivados deben ser completamente sustituibles por sus tipos base, o en
 * otras palabras del lado del cliente.
 */
var BirdGood = /** @class */ (function () {
    function BirdGood() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    BirdGood.prototype.flyGood = function () {
        console.log('LSP3-Good: Ellos pueden volar!');
    };
    return BirdGood;
}());
var EagleGood = /** @class */ (function (_super) {
    __extends(EagleGood, _super);
    function EagleGood() {
        return _super.call(this) || this;
    }
    return EagleGood;
}(BirdGood));
var FlyingFishGood = /** @class */ (function (_super) {
    __extends(FlyingFishGood, _super);
    function FlyingFishGood() {
        return _super.call(this) || this;
    }
    /** Métodos (Funciones o acciones del objeto) */
    FlyingFishGood.prototype.flyGood = function () {
        console.log("LSP2-Good: El pez vuela aveces, pero nada más");
    };
    return FlyingFishGood;
}(BirdGood));
/** Instancia del objeto en una variable e impresión en consola */
var flyingFishGood = new FlyingFishGood();
flyingFishGood.flyGood();
var eagleGood = new EagleGood();
eagleGood.flyGood();
