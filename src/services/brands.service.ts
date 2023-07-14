import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brand.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;

  private brands: Brand[] = [
    {
      id: 1,
      description: 'Cool brand',
      logo: 'https://photos.com',
      name: 'My cool brand!',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found.`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((item) => item.id === id);
      this.brands[index] = {
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
    return null;
  }

  delete(id: number) {
    const brandIndex = this.brands.findIndex((item) => item.id === id);
    if (brandIndex === -1) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    this.brands.splice(brandIndex, 1);
    return true;
  }
}
