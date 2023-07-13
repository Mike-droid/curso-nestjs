import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} - offset => ${offset} - brand => ${brand}`,
    };
  }

  //! las rutas dinámicas deben de ir al final
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      meesage: `product ${id}`,
    };
  }

  @Post()
  createOne(@Body() payload: any) {
    return {
      message: 'Product created successfully',
      payload,
    };
  }
}
