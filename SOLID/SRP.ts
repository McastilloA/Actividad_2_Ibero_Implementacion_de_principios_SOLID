/*
* Esta clase no cumple con el principio de SRP, ya que en una sola clase está obteniendo atributos
* de la clase book, está paginando el libro y está imprimiendo la pagina actual del libro.
* 
*/
class BookBad {
    /** Propiedades o atributos (Caracteristicas del objeto) */
    title: string;
    author: string;
    prevPage: number;
    nextPage: number;
    specificPage: number;


    /** Métodos (Funciones o acciones del objeto) */
    getTitle() {
        return this.title = "Cien años de soledad";
    }

    getAuthor() {
        return this.author = "Gabriel García Marquez";
    }

    turnPage(prevPager = 1, nextPage = 10, specificPage = 8) {
        // Evento que para paginar libro
        return `Pagina anterior ${prevPager}, pagina siguiente ${nextPage}, pagina especifica ${specificPage}`;
    }

    printCurrentPage() {
        return "Contenido de la página actual para imprimir";
    }
}

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
class BookGood {
    /** Propiedades o atributos (Caracteristicas del objeto) */
    title: string;
    author: string;

    /** Métodos (Funciones o acciones del objeto) */
    getTitle() {
        return this.title = "El coronel no tiene quien le escriba";
    }

    getAuthor() {
        return this.author = "Gabriel García Marquez";
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var bookGood = new BookGood();
console.log('SRP5-Good:', bookGood.getTitle());
console.log('SRP6-Good:', bookGood.getAuthor());

class Pager {
    /** Propiedades o atributos (Caracteristicas del objeto) */
    prevPager: number;
    nextPager: number;
    pagerNumber: number;

    /** Métodos (Funciones o acciones del objeto) */
    gotoPrevPage(prevPager: number) {
        // Evento a la página anterior
        return prevPager;
    }

    gotoNextPage(nextPager: number) {
        // Evento a la página siguiente
        return nextPager;
    }

    gotoPageByPageNumber(pagerNumber: number) {
        // Evento a una página especifca
        return pagerNumber;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var pagerGood = new Pager();
console.log('SRP7-Good: pagina anterior', pagerGood.gotoPrevPage(1));
console.log('SRP8-Good: pagina siguiente', pagerGood.gotoNextPage(10));
console.log('SRP9-Good: pagina especifica', pagerGood.gotoPageByPageNumber(8));

class Printer {

    /** Métodos (Funciones o acciones del objeto) */
    printPageInHTML(pageContent: any) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    }

    printPageInJSON(pageContent: any) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    }

    printPageInXML(pageContent: any) {
        // Operacion a ejecutar con el parametro recibido
        return pageContent;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var printerGood = new Printer();
console.log('SRP10-Good:', printerGood.printPageInHTML('Imprime pagina actual en HTML'));
console.log('SRP11-Good:', printerGood.printPageInJSON('Imprime pagina actual en JSON'));
console.log('SRP12-Good:', printerGood.printPageInXML('Imprime pagina actual en XML'));