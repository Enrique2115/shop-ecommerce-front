export interface IOrders {
  id: string;
  clientId: string;
  total: number;
  status: string;
}

export class OrdersResponse {
  id = '';
  clientId = '';
  total = 0;
  status = '';
}
