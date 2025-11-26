interface Observador {
  actualizarEstado(nombre: string, estado: string): void;
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    private nombre: string,
    private tipo: string,
    private estado: string
  ) {}

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    this.observadores.forEach(obs => obs.actualizarEstado(this.nombre, this.estado));
  }
}

class Soporte implements Observador {
  actualizarEstado(nombre: string, estado: string): void {
    console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`);
  }
}

const soporte = new Soporte();
const equipo1 = new Equipo("Notebook ASUS", "Portátil", "disponible");
equipo1.agregarObservador(soporte);
equipo1.cambiarEstado("en reparación");