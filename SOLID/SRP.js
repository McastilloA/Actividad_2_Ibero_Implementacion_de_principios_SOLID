/*
* Esta clase no cumple con el principio de SRP, ya que en una sola clase está obteniendo atributos
* de la clase book, está paginando el libro y está imprimiendo la pagina actual del libro.
*
*/
var BookBad = /** @class */ (function () {
    function BookBad() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookBad.prototype.getTitle = function () {
        return this.title = "Cien años de soledad";
    };
    BookBad.prototype.getAuthor = function () {
        return this.author = "Gabriel García Marquez";
    };
    BookBad.prototype.turnPage = function (prevPager, nextPage, specificPage) {
        if (prevPager === void 0) { prevPager = 1; }
        if (nextPage === void 0) { nextPage = 10; }
        if (specificPage === void 0) { specificPage = 8; }
        // Evento que para paginar libro
        return "Pagina anterior " + prevPager + ", pagina siguiente " + nextPage + ", pagina especifica " + specificPage;
    };
    BookBad.prototype.printCurrentPage = function () {
        return "Contenido de la página actual para imprimir";
    };
    return BookBad;
}());
/** Instancia del objeto en una variable e impresión en consola */
var bookBad = new BookBad();
console.log('SRP1-Bad:', bookBad.getTitle());
console.log('SRP2-Bad:', bookBad.getAuthor());
console.log('SRP3-Bad:', bookBad.turnPage());
console.log('SRP4-Bad:', bookBad.printCurrentPage());
/**********************************************************************************************/
/*
* Estas clases cumplen con el principio de SRP, ya que se dividen en diferentes clases
* obteniendo atributos propios del libro en una clase, eventos en otra clase y operaciones en
* otra clase.
*/
var BookGood = /** @class */ (function () {
    function BookGood() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    BookGood.prototype.getTitle = function () {
        return this.title = "El coronel no tiene quien le escriba";
    };
    BookGood.prototype.getAuthor = function () {
        return this.author = "Gabriel García Marquez";
    };
    return BookGood;
}());
/** Instancia del objeto en una variable e impresión en consola */
var bookGood = new BookGood();
console.log('SRP5-Good:', bookGood.getTitle());
console.log('SRP6-Good:', bookGood.getAuthor());
var Pager = /** @class */ (function () {
    function Pager() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    Pager.prototype.gotoPrevPage = function (prevPager) {
        // Evento a la página anterior
        return prevPager;
    };
    Pager.prototype.gotoNextPage = function (nextPager) {
        // Evento a la página siguiente
        return nextPager;
    };
    Pager.prototype.gotoPageByPageNumber = function (pagerNumber) {
        // Evento a una página especifca
        return pagerNumber;
    };
    return Pager;
}());
/** Instancia del objeto en una variable e impresión en consola */
var pagerGood = new Pager();
console.log('SRP7-Good: pagina anterior', pagerGood.gotoPrevPage(1));
console.log('SRP8-Good: pagina siguiente', pagerGood.gotoNextPage(10));
console.log('SRP9-Good: pagina especifica', pagerGood.gotoPageByPageNumber(8));
var Printer = /** @class */ (function () {
    function Printer() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    Printer.prototype.printPageInHTML = function (pageContent) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    };
    Printer.prototype.printPageInJSON = function (pageContent) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    };
    Printer.prototype.printPageInXML = function (pageContent) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    };
    return Printer;
}());
/** Instancia del objeto en una variable e impresión en consola */
var printerGood = new Printer();
console.log('SRP10-Good:', printerGood.printPageInHTML('Imprime pagina actual en HTML'));
console.log('SRP11-Good:', printerGood.printPageInJSON('Imprime pagina actual en JSON'));
console.log('SRP12-Good:', printerGood.printPageInXML('Imprime pagina actual en XML'));
