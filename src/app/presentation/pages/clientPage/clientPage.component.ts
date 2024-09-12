import { Accion } from '../../../interfaces/tabla-columna';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IClient } from '../../../interfaces/Client';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [TableDataComponent, HttpClientModule],
  providers: [ClientService],
  templateUrl: './clientPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPageComponent implements OnInit {
  private clientService = inject(ClientService);
  private router = inject(Router);

  public clientList = signal<IClient[]>([]);
  public columnas: string[] = [];
  public title: string = 'Clientes';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('clients');
    this.clientService.loadClients().subscribe((data) => {
      this.clientList.set(data);
    });
  }

  onAction(accion: Accion) {
    if (accion.accion === 'Crear') {
      // Redirigir a la página de creación de productos
      console.log('Crear producto');
      this.router.navigate(['/clients/create']);
    } else if (accion.accion == 'Editar') {
      this.editar(accion.fila);
    } else if (accion.accion == 'Eliminar') {
      this.eliminar(accion.fila.nombre);
    }
  }

  editar(objeto: IClient) {
    alert('Funcion no implementada');
    console.log('editar', objeto);
  }

  eliminar(nombre: string) {
    alert('Funcion no implementada');
    console.log('eliminar', nombre);
  }
}
