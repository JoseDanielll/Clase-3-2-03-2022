const matricula =900000
let creditos, descuento, totalM;

function LeerDatos() {
    creditos = Number (prompt(`Ingrese cantidad de creditos`))
}

LeerDatos()
Calcular(creditos)

function Calcular(creditos) {
    if(creditos<6) {
        descuento = matricula * 0.5;
    }
    else if(creditos>6 && creditos <=10) {
        descuento = matricula * 0.25
    }

    else if(creditos >10) {
        descuento = 0;
    }else{
        alert(`Opcion no valida`)
    }
    totalM = matricula - descuento
    return
}

console.log(`El valor dr la matricula es:${totalM}`)
