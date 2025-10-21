// console.log('Me gustan los buenos proyectos')


type Estado = "disponible" | "en reparación" | "baja";

interface Dispositivo {
  nombre: string;
  categoria: string;
  estado: Estado;
}

export class GestorDispositivos {
  private static instancia: GestorDispositivos | null = null;
  private dispositivos: Dispositivo[] = [];

  private constructor() {} // evita new desde afuera

  static getInstance(): GestorDispositivos {
    if (!this.instancia) this.instancia = new GestorDispositivos();
    return this.instancia;
  }

  registrar(nombre: string, categoria: string, estado: Estado) {
    this.dispositivos.push({ nombre, categoria, estado });
  }

  listar(): Dispositivo[] {
    return [...this.dispositivos];
  }
}

// Ejemplo de uso (puede ir en index.ts)
const gestor = GestorDispositivos.getInstance();
gestor.registrar("HP Probook", "Portátil", "disponible");
console.log(gestor.listar());
