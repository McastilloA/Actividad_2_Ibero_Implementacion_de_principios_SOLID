/*
* Esta clase no cumple con el principio de OCP, ya que Las entidades deben estar abiertas
* para su extensión pero cerradas para modificaciones y en este ejemplo 
* Simplemente podemos modificar la lógica del código para proporcionar más información, y si
* se manejan varios libros tendriamos seríos problemas.
* 
*/
class BookBadOCP {
    /** Propiedades o atributos (Caracteristicas del objeto) */
    title: string;
    author: string;
    editorial: string;
    pagerNumber: number;

    /** Métodos (Funciones o acciones del objeto) */
    getTitle(): string {
        return this.title = 'Cien años de soledad';
    }

    getAuthor(): string {
        return this.author = 'Gabriel García Marquez';
    }

    getEditorial(): string {
        return this.editorial= 'Sudamericana';
    }

    getPagerNumber(): number {
        return this.pagerNumber = 300;
    }
}

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
class BookGoodOCP {
    /** Propiedades o atributos (Caracteristicas del objeto) */
    title: string;
    author: string;
    editorial: string;
    pagerNumber: number;

    constructor(title: string, pagerNumber: number) {
        this.title = title;
        this.author = 'Gabriel García Marquez';
        this.editorial = 'Sudamericana';
        this.pagerNumber = pagerNumber;
    }

    /** Métodos (Funciones o acciones del objeto) */
    getTitle(): string {
        return this.title;
    }

    getEditorial(): string {
        return this.editorial;
    }

    getPagerNumber(): number {
        return this.pagerNumber;
    }
}

/** Ejemplo 1 */
class BookGoodOCP1 extends BookGoodOCP {

    /** Métodos (Funciones o acciones del objeto) */
    getTitle(): string {
        return this.title;
    }

    getPagerNumber(): number {
        return this.pagerNumber;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var bookGoodOCP1 = new BookGoodOCP1('Cien años de soledad', 496);
console.log('OCP5-Good:', bookGoodOCP1);


/** Ejemplo 2 */
class BookGoodOCP2 extends BookGoodOCP {

    /** Métodos (Funciones o acciones del objeto) */
    getTitle(): string {
        return this.title;
    }

    getPagerNumber(): number {
        return this.pagerNumber;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var bookGoodOCP2 = new BookGoodOCP2('El coronel no tiene quien le escriba', 92);
console.log('OCP6-Good:', bookGoodOCP2);
