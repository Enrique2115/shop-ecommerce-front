import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-edit-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productEditPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductEditPageComponent {}
