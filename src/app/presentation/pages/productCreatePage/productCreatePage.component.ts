import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategory } from '../../../interfaces/Product';

@Component({
  selector: 'app-product-create-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './productCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductCreatePageComponent {
  public productForm: FormGroup;
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);

  public categories = Object.values(ProductCategory); // Obtiene los valores del enum

  constructor() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productDescription: ['', Validators.required],
      productPrice: [null, [Validators.required, Validators.min(0)]],
      productStock: [null, [Validators.required, Validators.min(0)]],
      productBrand: ['', Validators.required],
      productImage: ['', Validators.required],
      productSku: ['', Validators.required],
      productCategory: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formValues = this.productForm.value;

      const productData = {
        ...formValues,
        productCategory: formValues.productCategory.toUpperCase(), // Convierte la categoría a mayúsculas
      };
      console.log('Producto creado:', productData);
      this.productService.createProduct(productData).subscribe(
        (response) => {
          console.log('Producto creado con éxito:', response);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log('Error al crear el producto:', error);
        }
      );
    }
  }
}
