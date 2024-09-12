import { IProduct } from './Product';

type Products = Pick<IProduct, 'name' | 'price'> & {
  id: string;
  quantity: number;
};

export interface IOrders {
  id: string;
  clientId: string;
  total: number;
  status: string;
}

export interface ICreateOrders {
  clientId: string;
  products: Products[];
  total: number;
}

export class OrdersResponse {
  id = '';
  clientId = '';
  total = 0;
  status = '';
}

export interface IOrderDetail extends IOrders {
  products: Products[];
}

export class OrderDetailResponse {
  id = '';
  clientId = '';
  total = 0;
  status = '';
  products: any[] = [];
}
