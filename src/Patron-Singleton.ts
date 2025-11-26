export interface Producto {
  name: string;
  type: string;
  status: string;
}

class Inventario implements Producto {
  public readonly name: string = "Producto A";
  public readonly type: string = "Tipo 1";
  public readonly status: string = "Disponible";
  private equipos: Producto[] = [];

  private static instance: Inventario | null = null;

  constructor() {}

  public static ObtenerInstancia(): Inventario {
    if (!Inventario.instance) {
      Inventario.instance = new Inventario();
    }

    return Inventario.instance;
  }

  public agregarEquipo(equipo: Producto): void {
    this.equipos.push(equipo);
  }

  public listarEquipos(): Producto[] {
    return this.equipos;
  }
}

const inventario1 = Inventario.ObtenerInstancia();

inventario1.agregarEquipo({
  name: "Notebook",
  type: "Portátil",
  status: "Disponible",
});
// inventario1.agregarEquipo({ name: "Monitor", type: "Pantalla", status: "En uso" });

console.log(inventario1.listarEquipos());
