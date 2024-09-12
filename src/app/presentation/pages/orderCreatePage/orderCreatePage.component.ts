import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-create-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderCreatePageComponent {}
