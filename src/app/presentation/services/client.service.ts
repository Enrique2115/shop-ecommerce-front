import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../../interfaces/Client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);
  private url: string = environment.ENDPOINTS.API_URL;

  public loadClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${this.url}/client`);
  }

  public findClient(id: string): Observable<IClient> {
    return this.http.get<IClient>(`${this.url}/client/${id}`);
  }

  public createClient(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(`${this.url}/client/create`, client);
  }
}
