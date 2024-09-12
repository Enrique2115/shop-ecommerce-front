import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client-create-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientCreatePageComponent {}
