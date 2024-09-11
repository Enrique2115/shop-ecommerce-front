import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductPageComponent {}
