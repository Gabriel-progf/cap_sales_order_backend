import { Service } from '@sap/cds';
import { Customers } from '@models/sales';

export default (service: Service) => {
  service.after('READ','Customers', (result: Customers) => {
    result.forEach(customer => {
      if (!customer.email?.includes('@')) {
        customer.email = `${customer.email}@gmail.com`;
      }
      console.log(customer);
    });
    
  });
};
