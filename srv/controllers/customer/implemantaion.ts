import { CustomerService } from "srv/services/customer/protocols";
import { CustomerConstroller } from "./protocols";
import { Customers } from "@models/sales";

export class CustomerControllerImpl implements CustomerConstroller {
  constructor(private readonly service: CustomerService) {}

  public afterRead(customerList: Customers): Customers {
    return this.service.afterRead(customerList);
  }
}
