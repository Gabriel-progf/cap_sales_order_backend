using { managed } from '@sap/cds/common';


namespace sales;

entity SalesOrderHeaders: managed {
    key id: UUID;
        customer: Association to Customers;
        items: Composition of many SalesOrderItems on items.header = $self;
        totalAmount: Decimal(15,2);

}

entity SalesOrderItems {
    key id: UUID;
        header: Association to SalesOrderHeaders;
        product: Association to Products;
        quantity: Integer;
        price: Decimal(15,2);
    
}

entity Customers {
    key id: UUID;
        firstName: String(20);
        lastName: String(100);
        email: String(255);
}

entity Products {
    key id: UUID;
        name: String(255);
        price: Decimal(15,2);
        stock: Integer;
}