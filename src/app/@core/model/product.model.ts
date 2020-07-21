/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */
import { CategoryModel } from '@core/model/category.model';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  limit: number;
  availableQuantity: number;
  imagePath: string;
  category: CategoryModel;
}
