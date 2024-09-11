import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientPageComponent {}
