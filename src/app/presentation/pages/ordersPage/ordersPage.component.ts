import { Accion } from '../../../interfaces/tabla-columna';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IOrders } from '../../../interfaces/Orders';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [TableDataComponent, HttpClientModule],
  providers: [OrderService, ClientService],
  templateUrl: './ordersPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrdersPageComponent implements OnInit {
  private orderService = inject(OrderService);
  private clientService = inject(ClientService);
  private router = inject(Router);

  public orderList = signal<IOrders[]>([]);
  public columnas: string[] = [];
  public title: string = 'Ordenes';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('orders');
    this.loadOrders();
  }

  onAction(accion: Accion) {
    if (accion.accion === 'Crear') {
      // Redirigir a la página de creación de productos
      console.log('Crear producto');
      this.router.navigate(['/orders/create']);
    } else if (accion.accion == 'Editar') {
      this.editar(accion.fila);
    } else if (accion.accion == 'Eliminar') {
      this.eliminar(accion.fila.id);
    }
  }

  loadOrders() {
    this.orderService.loadOrders().subscribe((data) => {
      const ordersWithClient = data.map(async (order) => {
        const client = await this.clientService
          .findClient(order.clientId)
          .toPromise();
        return {
          ...order,
          clientId: client?.name as string,
        };
      });
      Promise.all(ordersWithClient).then((dataWithClient) => {
        this.orderList.set(
          dataWithClient.filter((order) => order.status !== 'CANCELLED')
        );
      });
    });
  }

  editar(objeto: IOrders) {
    alert('Funcion no implementada');
    console.log('editar', objeto);
  }

  eliminar(id: string) {
    console.log('eliminar', id);
    alert('Orden Cancelada');
    this.orderService.cancelOrder(id).subscribe((response) => {
      console.log('Orden eliminada con éxito:', response);
      this.orderList.set(
        this.orderList().filter((order: any) => order.id !== id)
      );
    });
  }
}
