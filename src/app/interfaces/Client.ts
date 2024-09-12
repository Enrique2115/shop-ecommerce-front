export interface IClient {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
}

export class ClientResponse {
  id = '';
  name = '';
  document = '';
  email = '';
  phone = '';
}
