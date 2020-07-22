/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Formatting the response objects for the front-end models
 */

const formatProducts = (products) => {
  return products.map((product) => {
    return {
      id: product.ItemId,
      name: product.ItemName,
      description: product.ItemDescription,
      limit: product.ItemLimit,
      availableQuantity: product.AvailableQuantity,
      imagePath: product.ItemImagePath,
      category: {
        id: product.CategoryId,
        name: product.CategoryName,
      },
    };
  });
};

const formatCatgories = (categories) => {
  return categories.map((category) => {
    return {
      id: category.CategoryId,
      name: category.CategoryName,
    };
  });
};

const formatUsers = (users) => {
  return users.map((user) => {
    return {
      bannerId: user.BannerId,
      firstname: user.FirstName,
      lastname: user.LastName,
      password: user.Password,
      email: user.Email,
      roleid: user.RoleId,
    };
  });
};

module.exports = { formatProducts, formatCatgories, formatUsers };
