import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {} //* Esto creará una inyección de dependencias

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  //! las rutas dinámicas deben de ir al final
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  createOne(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() payload: any) {
    this.productsService.update(id, payload);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return {
      message: `Product with ID=${id} has been deleted`,
    };
  }
}
