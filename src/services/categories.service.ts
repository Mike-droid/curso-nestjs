import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;

  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Bla bla',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category ${id} not found.`);
    }
    return category;
  }

  create(payload: CreateCategoryDto) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
    return null;
  }

  delete(id: number) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    this.categories.splice(categoryIndex, 1);
    return true;
  }
}
