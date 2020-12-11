/**
 * Los módulos de alto nivel no deben depender de módulos de bajo nivel.
 * Más bien, ambos deberían depender de abstracciones.
 * 
 * Esta clase no cumple con el principio de DIP porque supongamos que un cliente ha cambiado de
 * opinión y ahora quiere implementar algún otro inicio de sesión social.
 * Este código no funcionará.
 */

class Login { 
    login(noSocialNetwork: any) { 
        // Logica para utilizar el inicio de sesión de google.
        return noSocialNetwork;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var login = new Login();
console.log('DIP1-Bad:', login.login('Cliente no decide red social para el login, pero requiere login'));


/**********************************************************************************************/


/**
 * Estas clases ya cumple con el principio de DIP porque ya puede ser escalable en el caso que
 * el cliente requiera una o varias sesiones con diferentes redes sociales.
 */

interface ISocialLogin {
    /** Métodos a implementar en clases */
    login(options: any);
 }

class GoogleLogin implements ISocialLogin {
    /** Métodos (Funciones o acciones del objeto) */
    login(googleLogin: any) { 
        // Logica para utilizar el inicio de sesión de google.
        return googleLogin;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var googleLogin = new GoogleLogin();
console.log('DIP2-Good:', googleLogin.login('Login google'));


class FBLogin implements ISocialLogin {
    /** Métodos (Funciones o acciones del objeto) */
    login(fbLogin: any) { 
        // Logica para utilizar el inicio de sesión de facebook.
        return fbLogin;
    }
}

/** Instancia del objeto en una variable e impresión en consola */
var fBLogin = new FBLogin();
console.log('DIP3-Good:', fBLogin.login('Login Facebook'));