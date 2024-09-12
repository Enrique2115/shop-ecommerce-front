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

export interface ICreateProduct {
  productName: string;
  productDescription: string;
  productPrice: number;
  productStock: number;
  productBrand: string;
  productImage: string;
  productSku: string;
  productCategory: string;
}

export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  GAMES = 'Games',
  HOME = 'Home',
  SPORTS = 'Sports',
  TOYS = 'Toys',
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
