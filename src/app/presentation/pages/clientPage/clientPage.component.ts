import { Accion } from '../../../interfaces/tabla-columna';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IClient } from '../../../interfaces/Client';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { SearchComponent } from '../../components/searchTable/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [TableDataComponent, SearchComponent],
  templateUrl: './clientPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPageComponent implements OnInit {
  clientList: IClient[] = [];
  columnas: string[] = [];
  title: string = 'Clientes';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('clients');
    this.clientList = [];
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
    console.log('editar', objeto);
  }

  eliminar(nombre: string) {
    console.log('eliminar', nombre);
  }
}
