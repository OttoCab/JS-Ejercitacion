/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y 
si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

class Auto {
    constructor(color, marca, modelo, encendido) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = encendido;
    }
    //Metodos
    Encender() {
        this.encendido = true;
    }

    Apagar() {
        this.encendido = false;
    }

    toString() {
        let estado = "";
        if (this.encendido == true) {
            estado = "Encendio";
        } else {
            estado = "Apagado";
        }

        document.write(`Marca: ${this.marca} <br>
        Modelo: ${this.modelo} <br>
        Color: ${this.color} <br>
        Encendido: ${estado} <br>`)

    }
}

//Instanciar el objeto

let OttoCar = new Auto("Rojo Pasion", "Renault", "Oroch", true);

document.write(`<h4>Estado inicial</h4>`);
OttoCar.toString();

//TurnOn
document.write(`<h4>Encendido el auto</h4>`);
OttoCar.Encender();
OttoCar.toString();

//TurnOff
document.write(`<h4>Apagado el auto</h4>`);
OttoCar.Apagar();
OttoCar.toString();


