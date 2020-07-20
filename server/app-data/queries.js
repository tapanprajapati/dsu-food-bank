/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: `SELECT * 
    FROM 
    dalfoodbank.Item as I
      LEFT JOIN 
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    ORDER BY I.ItemId`,
  getCategories: `SELECT * FROM dalfoodbank.Category`,
  getProductById: `SELECT *
    FROM 
    dalfoodbank.Item as I 
      LEFT JOIN 
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemId = ?`,
  signIn: '',
};
