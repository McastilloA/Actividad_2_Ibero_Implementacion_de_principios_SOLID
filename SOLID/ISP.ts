/**
 * Este ejemplo no cumple el principio ISP, ya que la clase FishISP necesita implementar
 * el método fly() que no usa su objeto. De manera similar, EageleISP necesita implementar swim(), 
 * que no debe hacer.
 */

interface IBird {
    /** Métodos a implementar en clases */
    fly();
    swim();
}

class FishISP implements IBird {
    /** Métodos (Funciones o acciones del objeto) */
    fly() {
        return 'Este pez no vuela';
    }
    swim() {
        return 'Este pez nada';
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var fishISP = new FishISP();
console.log('ISP1-Bad:', fishISP.fly());
console.log('ISP2-Bad:', fishISP.swim());


class EageleISP implements IBird {
    /** Métodos (Funciones o acciones del objeto) */
    fly() {
        return 'Esta ave vuela';
    }
    swim() {
        return 'Este ave no nada';
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var eageleISP = new EageleISP();
console.log('ISP3-Bad:', eageleISP.fly());
console.log('ISP4-Bad:', eageleISP.swim());



/**********************************************************************************************/


/**
 * Este ejemplo cumple el principio ISP, ya que la clase FishISP2 necesita implementar
 * el método swim() y el objeto lo está utilizando. De manera similar, EageleISP2 necesita
 * implementar swim(), y el objeto lo está utilizando.
 */

interface IFishBird {
    swim();
}

interface IEagleBird {
    fly();
}

class FishISP2 implements IFishBird {
    swim() {
        return 'Simplemente nada';
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var fishISP2 = new FishISP2();
console.log('ISP5-Good:', fishISP2.swim());


class EageleISP2 implements IEagleBird {
    fly() {
        return 'Simpelmente vuela';
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var eageleISP2 = new EageleISP2();
console.log('ISP6-Good:', eageleISP2.fly());