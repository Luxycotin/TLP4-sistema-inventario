import type { Producto } from "./Patron-Singleton";

class InventarioViejo {
  private items: Producto[] = [];

  public agregarItem(item: Producto): void {
    this.items.push(item);
  }

  public getItems() {
    return this.items;
  }
}

class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(name: string, type: string, status: string): void {
    const item = { name, type, status };
    this.inventarioViejo.agregarItem(item);
  }

  public listarEquipos(): Producto[] {
    return this.inventarioViejo.getItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor IPF", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
