import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordersPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrdersPageComponent {}
