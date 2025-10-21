type tipoEstado = ["Disponible","En reparaciones","No Disponible"]

interface Propiedad {
    nombre: string;
    tipo: string;
    estado: tipoEstado; 
}

class Inventario {

    static instancia: Inventario;
    propiedades: Propiedad[] = []
    
    constructor () {
console.log('Curtiendo mi mambo')
    }

    static getInstance(){
        if (!this.instancia){
            this.instancia = new Inventario();
            return this.instancia
        }

    }
}
console.log({Inventario})