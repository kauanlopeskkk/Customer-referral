import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers: any[] = [];

  create(createCustomerDto: any) {
    const customer = { id: Date.now().toString(), ...createCustomerDto };
    this.customers.push(customer);
    return customer;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: string) {
    return this.customers.find((c) => c.id === id);
  }
}
