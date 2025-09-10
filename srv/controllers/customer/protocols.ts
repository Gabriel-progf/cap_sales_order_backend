import { Customers } from "@models/sales";

export interface CustomerConstroller {
    afterRead(customerList: Customers): Customers;
}