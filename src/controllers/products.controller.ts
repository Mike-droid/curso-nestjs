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
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

//import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
//* podemos usar nuestras propias pipes

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
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  createOne(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
