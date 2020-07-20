/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { ProductModel } from '@core/model/product.model';
import { CategoryModel } from '@core/model/category.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _products = [
    {
      id: 'a112233445511',
      name: 'Apple',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 3,
      availableQuantity: 340,
      imagePath: '',
      categoryId: 'c111',
      categoryName: 'Fruits & Vegetables',
    },
    {
      id: 'a112233445512',
      name: 'Milk',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 1,
      availableQuantity: 123,
      imagePath: '',
      categoryId: 'c222',
      categoryName: 'Dairy & Eggs',
    },
    {
      id: 'a112233445513',
      name: 'Boneless Chicken',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 456,
      imagePath: '',
      categoryId: 'c333',
      categoryName: 'Meat & seafood',
    },
    {
      id: 'a112233445514',
      name: 'Potato chips',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 4,
      availableQuantity: 678,
      imagePath: '',
      categoryId: 'c444',
      categoryName: 'Pantry food',
    },
    {
      id: 'a112233445515',
      name: 'Soft Tofu',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 234,
      imagePath:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      categoryId: 'c555',
      categoryName: 'Natural & organic',
    },
    {
      id: 'a112233445516',
      name: 'Cauliflower',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 324,
      imagePath: '',
      categoryId: 'c111',
      categoryName: 'Fruits & Vegetables',
    },
    {
      id: 'a112233445517',
      name: 'Avocado, organic',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 223,
      imagePath: '',
      categoryId: 'c555',
      categoryName: 'Natural & organic',
    },
    {
      id: 'a112233445518',
      name: 'Cookies',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 334,
      imagePath: '',
      categoryId: 'c444',
      categoryName: 'Pantry food',
    },
    {
      id: 'a112233445519',
      name: 'Turkey Pepperoni Sticks',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 3,
      availableQuantity: 400,
      imagePath: '',
      categoryId: 'c333',
      categoryName: 'Meat & seafood',
    },
    {
      id: 'a112233445520',
      name: 'Cheese',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 1,
      availableQuantity: 320,
      imagePath: '',
      categoryId: 'c222',
      categoryName: 'Dairy & Eggs',
    },
    {
      id: 'a112233445521',
      name: 'Banana',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      limit: 2,
      availableQuantity: 400,
      imagePath: '',
      categoryId: 'c111',
      categoryName: 'Fruits & vegetables',
    },
  ];

  private _categories: CategoryModel[] = [];

  getAllProducts(): ProductModel[] {
    return this._products;
  }

  getAllCategories(): CategoryModel[] {
    this._products.forEach((product) => {
      if (!!!this._categories.find((category) => category?.id === product.categoryId)) {
        this._categories.push({ id: product.categoryId, name: product.categoryName });
      }
    });
    return this._categories;
  }

  getProductDetails(id: string): ProductModel {
    return this._products.find((product: ProductModel) => product.id === id);
  }

  filterProductsByName(productName: string): ProductModel[] {
    return this._products.filter(
      (product: ProductModel) => product.name.toLowerCase().indexOf(productName.toLowerCase()) === 0
    );
  }
  filterProductsByCategory(categories: string[]): ProductModel[] {
    return this._products.filter(
      (product: ProductModel) => categories.findIndex((category) => category === product.categoryId) > -1
    );
  }
}

// REF: https://www.lipsum.com/
// REF: https://walmart.ca
