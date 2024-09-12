import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IClient } from '../../../interfaces/Client';
import { IProduct } from '../../../interfaces/Product';
import { OrderService } from '../../services/order.service';
import { ClientService } from '../../services/client.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ICreateOrders } from '../../../interfaces/Orders';

@Component({
  selector: 'app-order-create-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [OrderService, ClientService, ProductService],
  templateUrl: './orderCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderCreatePageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private orderService = inject(OrderService);
  private clientService = inject(ClientService);
  private productService = inject(ProductService);
  private router = inject(Router);

  public orderForm: FormGroup;
  public clientList = signal<IClient[]>([]);
  public productList = signal<IProduct[]>([]);

  constructor() {
    this.orderForm = this.fb.group({
      clientId: ['', Validators.required],
      products: this.fb.array([], Validators.required),
      total: [{ value: 0, disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.loadClients().subscribe((data) => {
      this.clientList.set(data);
    });
  }

  searchProduct(e: Event): void {
    const term = (e.target as HTMLInputElement).value;

    this.productService.getProducts(term).subscribe((products) => {
      this.productList.set(products);
    });
  }

  addToCart(product: any): void {
    const productsControl = this.orderForm.get('products') as FormArray;

    const existingProduct = productsControl.value.find(
      (p: any) => p.id === product.id
    );

    // Obtener el stock actual del producto desde productList
    const productInStock = this.productList().find(
      (p: IProduct) => p.id === product.id
    );

    if (!productInStock) {
      alert('Producto no encontrado en la lista de productos');
      return;
    }

    const currentQuantity = existingProduct ? existingProduct.quantity : 0;

    // Verificar si hay stock disponible
    if (currentQuantity + 1 > productInStock.stock) {
      alert('No hay suficiente stock disponible');
      return;
    }

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      productsControl.push(
        this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [1, Validators.required],
        })
      );
    }

    this.updateTotal();
  }

  cancelOrder(): void {
    const productsControl = this.orderForm.get('products') as FormArray;
    while (productsControl.length) {
      productsControl.removeAt(0);
    }

    // Resetear el formulario completo sin agregar items nulos en el FormArray
    this.orderForm.reset({
      clientId: '',
      products: [],
      total: 0,
    });

    alert('La orden ha sido cancelada y el carrito ha sido vaciado.');
  }

  // Calcular el total de la orden
  updateTotal(): void {
    const productsControl = this.orderForm.get('products') as FormArray;
    const total = productsControl.value.reduce(
      (sum: number, product: any) => sum + product.price * product.quantity,
      0
    );
    this.orderForm.get('total')?.setValue(total);
  }

  // Enviar la orden al API
  submitOrder(): void {
    if (this.orderForm.valid) {
      const orderData: ICreateOrders = {
        clientId: this.orderForm.get('clientId')?.value,
        products: this.orderForm.get('products')?.value,
        total: this.orderForm.get('total')?.value,
      };

      this.orderService.createOrder(orderData).subscribe(
        (response) => {
          console.log('Order created successfully', response);
          // Manejar el éxito (redirección o notificación)
          this.router.navigate(['/orders']);
        },
        (error) => {
          console.log('Error creating order', error);
        }
      );
    }
  }
}
