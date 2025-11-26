interface IEquipo {
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
}


class Notebook implements IEquipo {
    constructor(public tipo:string, public nombre: string, public ram:string, public procesador: string) {
        this.tipo = tipo.trim();
        this.nombre = nombre.trim();
        this.ram = ram.trim();
        this.procesador = procesador.trim();
    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}GB, Procesador: ${this.procesador}`;
    }
}

class Desktop implements IEquipo {
    constructor(public tipo:string, public nombre: string, public ram:string, public procesador: string) {
        this.tipo = tipo.trim();
        this.nombre = nombre.trim();
        this.ram = ram.trim();
        this.procesador = procesador.trim();
    }

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}GB, Procesador: ${this.procesador}`;
    }
}

class Server implements IEquipo {
    constructor(public tipo:string, public nombre: string, public ram:string, public procesador: string) {
        this.tipo = tipo.trim();
        this.nombre = nombre.trim();
        this.ram = ram.trim();
        this.procesador = procesador.trim();
    }

    detalles(): string {
        return `Tipo: Server, Nombre: ${this.nombre}, RAM: ${this.ram}GB, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): IEquipo {
        console.log(`Creando equipo de tipo: ${tipo.toLowerCase()}`);
        if (tipo.toLowerCase().trim() === 'notebook') {
            return new Notebook(tipo, nombre, ram, procesador);
        } else if (tipo.trim().toLowerCase() === 'desktop') {
            return new Desktop(tipo, nombre, ram, procesador);
        } else if (tipo.trim().toLowerCase() === 'server') {
            return new Server(tipo, nombre, ram, procesador);
        } else {
            throw new Error('Tipo de equipo no soportado');
        }
    }
}

const factory = new EquipoFactory();

const equipo = factory.crearEquipo('notebook', 'Lenovo', '16', 'Intel i7');
console.log(equipo.detalles());