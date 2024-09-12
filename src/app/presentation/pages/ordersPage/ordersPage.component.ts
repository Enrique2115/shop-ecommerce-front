import { Accion } from '../../../interfaces/tabla-columna';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IOrders } from '../../../interfaces/Orders';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { SearchComponent } from '../../components/searchTable/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [TableDataComponent, SearchComponent],
  templateUrl: './ordersPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrdersPageComponent implements OnInit {
  orderList: IOrders[] = [];
  columnas: string[] = [];
  title: string = 'Ordenes';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('orders');
    this.orderList = [];
  }

  constructor(private router: Router) {}

  onAction(accion: Accion) {
    if (accion.accion === 'Crear') {
      // Redirigir a la página de creación de productos
      console.log('Crear producto');
      this.router.navigate(['/orders/create']);
    } else if (accion.accion == 'Editar') {
      this.editar(accion.fila);
    } else if (accion.accion == 'Eliminar') {
      this.eliminar(accion.fila.nombre);
    }
  }

  editar(objeto: IOrders) {
    console.log('editar', objeto);
  }

  eliminar(nombre: string) {
    console.log('eliminar', nombre);
  }
}
