import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomersService } from './customers.service.js';

@Controller('customers')
export class CustomersController {

  // O construtor serve apenas para injetar o serviço
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.customersService.create(createDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }
}
