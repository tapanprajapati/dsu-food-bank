/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */
import { CategoryModel } from '@core/model/category.model';

export interface ProductModel {
  id?: string;
  name?: string;
  description?: string;
  limit?: number;
  availableQuantity?: number;
  imagePath?: string;
  category?: CategoryModel;
}
