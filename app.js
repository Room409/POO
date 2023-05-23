//Crear una clase de tipo Vehiculo. Crear minimo 5 propieades y 3 metodos. Que los metodos interactuen con las propiedades.

class vehicle {
    constructor(vehicle, model, year, color, tires) {
        this.vehicle = vehicle;
        this.model = model;
        this.year = year;
        this.color = color;
        this.tires = tires
    }

    typeColor() {
        return this.color.toLowerCase() === 'negro' ? 'No tenemos este vehiculo en este color' : 'Color accesible'
    }

    yearVehicle() {
        return this.year < 2009 ? 'Solo hay vehiculos del año 2009 para arriba' : 'Año del vehiculo accesible.'
    }

    tiresVehicule() {
        return this.tires < 4 ? 'Solo hay vehiculos de 4 neumaticos a mas' : 'Vehiculo disponible'
    }
}

const vehicle1 = new vehicle('carro', 'Toyota', 2009, 'negro', 2);
console.log(vehicle1.typeColor());
console.log(vehicle1.yearVehicle());
console.log(vehicle1.tiresVehicule());

//Agregar ejemplo de cada uno delos conceptos base de poo. Herencia , polimorfismo, abstraccion y encapsulamient.

/////////////////////////////////////////////////////////////////////////////////herencia
class Tractor extends vehicle {
    constructor(model, year, color, tires, speed) {
        super('Tractor', model, year, color, tires);
        this.speed = speed
    }

}

const tractor1 = new Tractor('cat', 2005, 'amarillo', 7, "300kp/h");
console.log(tractor1)

///////////////////////////////////////////////////////////////////////////
//Polimorfismo

class Moto extends vehicle {
    constructor(vehicle, model, year, color, tires) {
        super(vehicle, model, year, color, tires);
    }

    typeColor() {
        return this.color.toLowerCase() === 'amarillo' ? 'No tenemos este vehiculo en este color' : 'Color accesible'
    }

    yearVehicle() {
        return this.year < 2017 ? 'Solo hay vehiculos del año 2009 para arriba' : 'Año del vehiculo accesible.'
    }

    tiresVehicule() {
        return this.tires === 2 ? 'Vehiculo disponible' : 'Solo hay vehiculos de 2 neumaticos';
    }

}

const moto1 = new Moto('Moto', 'yamaha', 2009, 'negro', 3);

console.log(moto1);
console.log(moto1.typeColor());
console.log(moto1.yearVehicle());
console.log(moto1.tiresVehicule());

//////////////////////////////////////////////////////////////////////////////////encapsulamiento

class Autobus extends Moto {
    #propietario = 'Juan Roblez' 

    constructor(vehicle, model, year, color, tires) {
        super(vehicle, model, year, color, tires);
    }

    get getName(){
        return this.#propietario
    }

    set newName(value){
        return this.#propietario = value
    }

    
}
const autobus1 = new Autobus('Moto', 'yamaha', 2009, 'negro', 3)

console.log(autobus1.getName)
console.log(autobus1.newName = 'Robles Robles')