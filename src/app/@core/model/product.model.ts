/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */
export interface ProductModel {
  id: string;
  name: string;
  description: string;
  limit: number;
  availableQuantity: number;
  imagePath: string;
  categoryId: string;
  categoryName: string;
}
