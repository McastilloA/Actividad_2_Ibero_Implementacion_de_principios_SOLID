/**
 * En estas clase no cumplen el principio LSP porque, el principio nos dice que
 * que los tipos derivados deben ser completamente sustituibles por sus tipos base y en las clases
 * de ejemplo ninguna sustituyo a ninguna.
 */
class BirdBad {
    /** Métodos (Funciones o acciones del objeto) */
    fly() {
        console.log('LSP1-Bad: Ellos pueden volar!');
    }
}

class FlyingFish extends BirdBad {
    constructor() {
        super()
    }
}

class Eagle extends BirdBad {
    constructor() {
        super()
    }
}

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
class BirdGood {
    /** Métodos (Funciones o acciones del objeto) */
    flyGood() {
        console.log('LSP3-Good: Ellos pueden volar!');
    }
}

class EagleGood extends BirdGood {
    constructor() {
        super()
    }
}

class FlyingFishGood extends BirdGood {
    constructor() {
        super()
    }

    /** Métodos (Funciones o acciones del objeto) */
    flyGood() {
        console.log("LSP2-Good: El pez vuela aveces, pero nada más");
    }
}


/** Instancia del objeto en una variable e impresión en consola */
var flyingFishGood = new FlyingFishGood();
flyingFishGood.flyGood();

var eagleGood = new EagleGood();
eagleGood.flyGood();