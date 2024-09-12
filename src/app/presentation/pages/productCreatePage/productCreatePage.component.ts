import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-create-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductCreatePageComponent {}
