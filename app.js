//Crear una clase de tipo Vehiculo. Crear minimo 5 propieades y 3 metodos. Que los metodos interactuen con las propiedades.

class vehicle {
    constructor(vehicle,model,year,color,tires){
        this.vehicle = vehicle;
        this.model = model;
        this.year = year;
        this.color = color;
        this.tires = tires
    }

    typeColor(){
        return this.color === 'negro' ? 'No tenemos este vehiculo en este color' : 'Color accesible'
    }

    yearVehicle(){
        return this.year < 2009 ? 'Solo hay vehiculos del año 2009 para arriba' : 'Año del vehiculo accesible.'
    }

    tiresVehicule(){
        return this.tires < 4 ? 'Solo hay vehiculos de 4 neumaticos a mas' : 'Vehiculo disponible'
    }
}

const vehicle1 = new vehicle('carro','Toyota',2009,'azul',2);
console.log(vehicle1.typeColor())
console.log(vehicle1.yearVehicle())
console.log(vehicle1.tiresVehicule())