/**
 * Los módulos de alto nivel no deben depender de módulos de bajo nivel.
 * Más bien, ambos deberían depender de abstracciones.
 *
 * Esta clase no cumple con el principio de DIP porque supongamos que un cliente ha cambiado de
 * opinión y ahora quiere implementar algún otro inicio de sesión social.
 * Este código no funcionará.
 */
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function (noSocialNetwork) {
        // Logica para utilizar el inicio de sesión de google.
        return noSocialNetwork;
    };
    return Login;
}());
/** Instancia del objeto en una variable e impresión en consola */
var login = new Login();
console.log('DIP1-Bad:', login.login('Cliente no decide red social para el login, pero requiere login'));
var GoogleLogin = /** @class */ (function () {
    function GoogleLogin() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    GoogleLogin.prototype.login = function (googleLogin) {
        // Logica para utilizar el inicio de sesión de google.
        return googleLogin;
    };
    return GoogleLogin;
}());
/** Instancia del objeto en una variable e impresión en consola */
var googleLogin = new GoogleLogin();
console.log('DIP2-Good:', googleLogin.login('Login google'));
var FBLogin = /** @class */ (function () {
    function FBLogin() {
    }
    /** Métodos (Funciones o acciones del objeto) */
    FBLogin.prototype.login = function (fbLogin) {
        // Logica para utilizar el inicio de sesión de facebook.
        return fbLogin;
    };
    return FBLogin;
}());
/** Instancia del objeto en una variable e impresión en consola */
var fBLogin = new FBLogin();
console.log('DIP3-Good:', fBLogin.login('Login Facebook'));
