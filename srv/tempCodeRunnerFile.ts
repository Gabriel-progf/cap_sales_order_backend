import cds, { Request, Service } from '@sap/cds'
import { Customers } from '@models/sales'

export default (service: Service) => {
  service.after('READ','Customers', (result: Customers) => {
    result.forEach(customer => {
      if (!customer.email?.includes('@')) {
        customer.email = `${customer.email}@gmail.com`
      }
      console.log(customer)
    })
  })

  service.before('CREATE','SalesOrderHeaders', async (request: Request) => {
    const params = request.data
    if (!params.customer_id) {
      return request.reject(400, 'Invalid Customer')
    }
    
    if (!params.items || params.items?.length === 0) {
      return request.reject(400, 'Invalid Item')
    }

    const customerQuery = SELECT.one.from('sales.Customers').where({ id: params.customer_id })
    const customer =  await cds.run(customerQuery)

    if (!customer) {
      return request.reject(404, 'Customer not found')
    }

    const productsIds: string[] = params.items.map((item: SalesOrderItem) => item.product_id);
    const productSQuery = SELECT.from('sales.Products').where({ id: productsIds });
    const products: Products = await cds.run(productSQuery);
    for (const item of items) {
        const dbProduct = products.find(product => product.id == item.product_id);
        if (!dbProduct) {
            return request.reject(404, `Produto ${item.product_id} não encontrado`);
        }
        if (dbProduct.stock === 0) {
            return request.reject(400, `Produto ${dbProduct.name} (${dbProduct.id}) sem estoque disponível`);
        }
    }


  })

}
