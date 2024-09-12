import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-create-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [ClientService],
  templateUrl: './clientCreatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientCreatePageComponent {
  public clientForm: FormGroup;
  private fb = inject(FormBuilder);
  private clientService = inject(ClientService);
  private router = inject(Router);

  constructor() {
    this.clientForm = this.fb.group({
      name: ['', null],
      document: ['', null],
      email: ['', null],
      phone: ['', null],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const clientData = this.clientForm.value;

      console.log('Cliente creado:', clientData);
      this.clientService.createClient(clientData).subscribe(
        (response) => {
          console.log('Cliente creado con éxito:', response);
          this.router.navigate(['/clients']);
        },
        (error) => {
          console.log('Error al crear el cliente:', error);
        }
      );
    }
  }
}
