import { CustomerControllerImpl } from "srv/controllers/customer/implemantaion";
import { CustomerConstroller } from "srv/controllers/customer/protocols";
import { customerService } from "../services/customer";

const makeCustomerController = (): CustomerConstroller => {
  return new CustomerControllerImpl(customerService);
};

export const customerController = makeCustomerController();
