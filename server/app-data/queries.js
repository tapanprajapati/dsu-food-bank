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
  getProductsByName: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemName LIKE ?
    ORDER BY I.ItemId`,
  getProductsByCategory: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE I.CategoryId IN (?)
    ORDER BY I.ItemId`,
  getProductsByNameAndCategory: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemName LIKE ? AND I.CategoryId IN (?)
    ORDER BY I.ItemId`,
  signIn: '',
};
