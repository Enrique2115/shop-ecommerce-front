import { Accion } from '../../../interfaces/tabla-columna';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { getEntityPropiedades } from '../../../utils/entity-properties';
import { IProduct } from '../../../interfaces/Product';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [TableDataComponent, HttpClientModule],
  providers: [ProductService],
  templateUrl: './productPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductPageComponent implements OnInit {
  private productService = inject(ProductService);
  private router = inject(Router);

  public columnas: string[] = [];
  public productList = signal<IProduct[]>([]);
  public title: string = 'Productos';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('products');
    this.productService.loadProducts().subscribe((data) => {
      this.productList.set(data);
    });
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
