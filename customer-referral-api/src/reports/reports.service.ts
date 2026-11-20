import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service.js';

@Injectable()
export class ReportsService {
  constructor(private readonly customersService: CustomersService) {}

  async getSummary() {
    const customers = await this.customersService.findAll();
    const totalCustomers = customers.length;
    const referredCustomers = customers.filter((c) => c.referredBy).length;

    return {
      totalCustomers,
      referredCustomers,
      organicCustomers: totalCustomers - referredCustomers,
      generatedAt: new Date(),
    };
  }
}
