/* llamado a los id*/
var user = document.getElementById('user');
const menu = document.querySelector('.Cajero-menu');
var conti = document.getElementById('contra');
var contra = document.getElementById('checkPass');
var opciones = document.getElementById('option');
var cont = document.getElementById('cont');
var ingresar = document.getElementById('ingresar');
var retirar = document.getElementById('retirar');
var ver = document.getElementById('mostrar');
const p = document.getElementById('pass');
var otra1 = document.querySelector('#uno');
var otra2 = document.querySelector('#dos');
var otra3 = document.querySelector('#tres');
var otra4 = document.querySelector('#cuatro');
var dinero = document.getElementById('checkIngreso');
var vaciar = document.getElementById('checkRetiro');
const padre = document.querySelector('.Cajero');
const saldoIngre = document.querySelector('#ver1');
const saldoReti = document.querySelector('#ver2');

/* clase para los clientes*/
class clientes{
    constructor(n, s, p, i, r){
        this.nombre = n;
        this.saldo = s;
        this.pass = p;
        this.ingre = i;
        this.retry = r;
    }
}

var cliente1 = new clientes('Mali', 200, 1234, 0, 0);
var cliente2 = new clientes('Gera', 290, 8911, 0, 0);
var cliente3 = new clientes('Maui', 67, 9876, 0, 0);
var cliente4 = new clientes('Jose', 180, 3337, 0, 0);
var cliente5 = new clientes('Thai', 405, 2772, 0, 0);
var cliente6 = new clientes('Gohan', 937, 4040, 0, 0);


cliente();
function cliente() {
    user.addEventListener('click', identificar);
}


function identificar(e) {
    var usuario = e.target.textContent;
    click('open', 'clientesoff');
    console.log(usuario);

    contraseña();
    function contraseña() {
        contra.addEventListener('click', veryPass);
    }

    function veryPass() {
        let pass = parseInt(p.value);
        console.log(pass);
        const error = document.querySelector(".Cajero-contraseña");
        
        switch (usuario) {
            case cliente1.nombre:
                    const unos = cliente1;
                    interaction(unos, pass, error);
                break;
            case cliente2.nombre:
                    const doss = cliente2;
                    interaction(doss, pass, error);
                break;
            case cliente3.nombre:
                    const tress = cliente3;
                    interaction(tress, pass, error);
                break;
            case cliente4.nombre:
                    const cuatros = cliente4;
                    interaction(cuatros, pass, error);
                break;
            case cliente5.nombre:
                    const cincos = cliente5;
                    interaction(cincos, pass, error);
                break;
            case cliente6.nombre:
                    const seiss = cliente6;
                    interaction(seiss, pass, error);
                break;
            default:
                console.log("no valido");
                break;
        }
    }

}


function click(c, o) {
    conti.classList.toggle(c);
    menu.classList.add(o);
}

function action(e) {
    e.classList.remove('error');
    opciones.classList.add('open');
    conti.classList.remove('open');
}

function options(e) { 
    var opcion = e.target.textContent;
    console.log(opcion);

    switch (opcion) {
        case "Consultar saldo":
            cont.classList.add('consultar');
            opciones.classList.remove('open');
            
            break;
        case "Ingresar monto":
            ingresar.classList.add('Ingresar');
            opciones.classList.remove('open');
            break;
        case "Retirar monto":
            retirar.classList.add('sacar');
            opciones.classList.remove('open');
            break;
        default:
            p.value = "";
            menu.classList.remove('clientesoff');
            opciones.classList.remove('open');
            break;
    }

}


function saldoActual(monto) {
    const saldo = document.querySelector('.Cajero-cont-saldo');
    saldo.textContent = monto;
    console.log(monto);
}

function otraOpera(a, z,) {
    a.classList.remove(z);
    opciones.classList.add('open');
    saldoReti.classList.remove('tran');
    saldoIngre.classList.remove('tran');
}

function ingreCash(cash) {
    let d = document.getElementById('dinero');
    const noIngreso = document.querySelector('#ingresar .Cajero-contraseña');

    let din = parseInt(d.value);
    let dTotal = cash.saldo + din;
    if (dTotal <= 990) {
        console.log("tu saldo total es menor a 990");
        cash.saldo = dTotal;
        cash.ingre += din;
        procesos(d, noIngreso, 'ver1');
    } else {
            noIngreso.textContent = "tu cuenta no puede tener mas de 990 mil, ingresa menos dinero.";
            noIngreso.style.color = "red";
            noIngreso.classList.add('noIngreso');
        setTimeout( () => {
            d.value = "";
            noIngreso.classList.remove('noIngreso');
        }, 2000);
    }

}

function retiCash(cash) {
    let d = document.getElementById('retiro');
    const noIngreso = document.querySelector('#retirar .Cajero-contraseña');

    let din = parseInt(d.value);
    let dTotal = cash.saldo - din;
    if (dTotal >= 10) {
        console.log("tu saldo total es mayor a 10");
        cash.saldo = dTotal;
        cash.retry += din;
        procesos(d, noIngreso, 'ver2');
    } else {
            noIngreso.textContent = "tu cuenta no puede tener menos de 10 mil, saca menos dinero.";
            noIngreso.style.color = "red";
            noIngreso.classList.add('noIngreso');
        setTimeout( () => {
            d.value = "";
            noIngreso.classList.remove('noIngreso');
        }, 2000);
    }
}    


function procesos(d, n, i) {
    tans = document.querySelector(`#${i}`);
    tans.classList.add('tran');

    n.textContent = "Transaccion realizada con exito.";
    n.style.color = "green";
    n.classList.add('noIngreso');
    setTimeout( () => {
        d.value = "";
        n.classList.remove('noIngreso');
    }, 2000); 
    
}


function verDinero(c, b) {
    
    operacion = document.querySelector('.Cajero-mostrar-operacion');
    total = document.querySelector('.Cajero-mostrar-total');

    if (b.id == "ver1") {
        ingresar.classList.remove('Ingresar');
        ver.classList.add('ver');
        operacion.textContent = `${c.ingre}`;
        total.textContent = `${c.saldo}`;
    } else{ 
        retirar.classList.remove('sacar');
        ver.classList.add('ver');
        operacion.textContent = `${c.retry}`;
        total.textContent = `${c.saldo}`;
    }
}
   
function interaction(uno, pass, error) {
        
        if (pass == uno.pass) {
            action(error);
            opciones.addEventListener('click', options);
            opciones.addEventListener('click', () => {
                saldoActual(uno.saldo);
            });
            
            dinero.addEventListener('click', () =>{
                ingreCash(uno); 
            });
            saldoIngre.addEventListener('click', () => {
                verDinero(uno, saldoIngre);
            });
            vaciar.addEventListener('click', () => {
                retiCash(uno);
            });
            saldoReti.addEventListener('click', () => {
                verDinero(uno, saldoReti);
            });


            otra1.addEventListener('click', () => {
                otraOpera(cont, 'consultar');
            });
            otra2.addEventListener('click', () => {
                otraOpera(ingresar, 'Ingresar');
            });
            otra3.addEventListener('click', () => {
                otraOpera(retirar, 'sacar');
            });
            otra4.addEventListener('click', () => {
                otraOpera(ver, 'ver');
            });
        } else {
            error.classList.add('error');
            setTimeout( () => {
                error.classList.remove('error');
            }, 2000);
        }
}






