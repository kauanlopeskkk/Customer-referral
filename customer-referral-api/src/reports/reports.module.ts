import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';
import { CustomersModule } from '../customers/customers.module.js';

@Module({
  imports: [CustomersModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
