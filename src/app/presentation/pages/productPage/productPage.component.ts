import { Accion } from '../../../interfaces/tabla-columna';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IProduct } from '../../../interfaces/Product';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [TableDataComponent],
  templateUrl: './productPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductPageComponent implements OnInit {
  productList: IProduct[] = [];
  columnas: string[] = [];
  title: string = 'Productos';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('products');
    this.productList = [];
  }

  onAction(accion: Accion) {
    if (accion.accion === 'Crear') {
      // Redirigir a la página de creación de productos
      console.log('Crear producto');
      this.router.navigate(['/products/create']);
    } else if (accion.accion == 'Editar') {
      this.editar(accion.fila);
    } else if (accion.accion == 'Eliminar') {
      this.eliminar(accion.fila.nombre);
    }
  }

  editar(objeto: IProduct) {
    console.log('editar', objeto);
  }

  eliminar(nombre: string) {
    console.log('eliminar', nombre);
  }
}
