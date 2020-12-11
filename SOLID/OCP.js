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
/*
* Esta clase no cumple con el principio de OCP, ya que Las entidades deben estar abiertas
* para su extensión pero cerradas para modificaciones y en este ejemplo
* Simplemente podemos modificar la lógica del código para proporcionar más información, y si
* se manejan varios libros tendriamos seríos problemas.
*
*/
var BookBadOCP = /** @class */ (function () {
    function BookBadOCP() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookBadOCP.prototype.getTitle = function () {
        return this.title = 'Cien años de soledad';
    };
    BookBadOCP.prototype.getAuthor = function () {
        return this.author = 'Gabriel García Marquez';
    };
    BookBadOCP.prototype.getEditorial = function () {
        return this.editorial = 'Sudamericana';
    };
    BookBadOCP.prototype.getPagerNumber = function () {
        return this.pagerNumber = 300;
    };
    return BookBadOCP;
}());
/** Instancia del objeto en una variable e impresión en consola */
var bookBadOCP = new BookBadOCP();
console.log('OCP1-Bad:', bookBadOCP.getTitle());
console.log('OCP2-Bad:', bookBadOCP.getAuthor());
console.log('OCP3-Bad:', bookBadOCP.getEditorial());
console.log('OCP4-Bad:', bookBadOCP.getPagerNumber());
/**********************************************************************************************/
/*
* Estas clases cumplen con el principio de OCP, ya que Las entidades deben estar abiertas
* para su extensión pero cerradas para modificaciones, como lo vemos en los ejemplos hay una
* clase abierta para su extensión de datos, pero es cerrada con sus propiedades.
*/
var BookGoodOCP = /** @class */ (function () {
    function BookGoodOCP(title, pagerNumber) {
        this.title = title;
        this.author = 'Gabriel García Marquez';
        this.editorial = 'Sudamericana';
        this.pagerNumber = pagerNumber;
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookGoodOCP.prototype.getTitle = function () {
        return this.title;
    };
    BookGoodOCP.prototype.getEditorial = function () {
        return this.editorial;
    };
    BookGoodOCP.prototype.getPagerNumber = function () {
        return this.pagerNumber;
    };
    return BookGoodOCP;
}());
/** Ejemplo 1 */
var BookGoodOCP1 = /** @class */ (function (_super) {
    __extends(BookGoodOCP1, _super);
    function BookGoodOCP1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookGoodOCP1.prototype.getTitle = function () {
        return this.title;
    };
    BookGoodOCP1.prototype.getPagerNumber = function () {
        return this.pagerNumber;
    };
    return BookGoodOCP1;
}(BookGoodOCP));
/** Instancia del objeto en una variable e impresión en consola */
var bookGoodOCP1 = new BookGoodOCP1('Cien años de soledad', 496);
console.log('OCP5-Good:', bookGoodOCP1);
/** Ejemplo 2 */
var BookGoodOCP2 = /** @class */ (function (_super) {
    __extends(BookGoodOCP2, _super);
    function BookGoodOCP2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookGoodOCP2.prototype.getTitle = function () {
        return this.title;
    };
    BookGoodOCP2.prototype.getPagerNumber = function () {
        return this.pagerNumber;
    };
    return BookGoodOCP2;
}(BookGoodOCP));
/** Instancia del objeto en una variable e impresión en consola */
var bookGoodOCP2 = new BookGoodOCP2('El coronel no tiene quien le escriba', 92);
console.log('OCP6-Good:', bookGoodOCP2);
