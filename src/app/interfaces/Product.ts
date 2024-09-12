export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  productCategory: string;
  stock: number;
  active: string;
  brand: string;
}

export class ProductResponse {
  name = '';
  price = 0;
  description = '';
  image = '';
  productCategory = '';
  stock = 0;
  active = '';
  brand = '';
}
