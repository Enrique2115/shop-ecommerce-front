import { ClientResponse } from '../interfaces/Client';
import { OrdersResponse } from '../interfaces/Orders';
import { ProductResponse } from '../interfaces/Product';

export const getEntityPropiedades = (entidad: string): Array<any> => {
  let resultados: any = [];
  let clase: any;

  switch (entidad) {
    case 'products':
      clase = new ProductResponse();
      break;
    case 'clients':
      clase = new ClientResponse();
      break;
    case 'orders':
      clase = new OrdersResponse();
      break;
  }

  if (clase) {
    resultados = Object.keys(clase);
  }
  return resultados;
};
