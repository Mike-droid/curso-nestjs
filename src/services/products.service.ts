import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Bla bla',
      price: 125,
      image: 'lol',
      stock: 100,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...payload,
      };
      return this.products[productIndex];
    }
    return null;
  }

  delete(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      const deletedProduct = this.products.splice(productIndex, 1);
      return deletedProduct[0];
    }
    return null;
  }
}
