# Assignment - 4

[Source Code](https://github.com/parthsw/dsu-food-bank)

[App Link](https://dsu-food-bank.herokuapp.com/)

- Date Created: 22 JUN 2020
- Last Modification Date: 25 July 2020

## Authors

- [Malav Jani - B00851408](ml805403@dal.ca)

---

# Overview

## Project

The fundamental goal of this web application is to provide an efficient way of accessing the food
bank digitally. This web application will help all the community members and especially students, by
providing an easy way of registering the items and picking it up at their convenience. Using this
website, the student can save their time by avoiding standing in a long queue to get their food.
Moreover, the major goal of this application is to help students to ask for the items they need
regularly. Students will have all the new updates on the food bank and would be able to give
feedback. Considering the current scenario of such pandemic "DSU food bank" will help in
maintaining social distancing for students by scheduling proper pickup time for students

## Goal

This assignment was all about connecting front end developed in earlier stage of assignment with back end. This includes creating web API and handling the database. In earlier assignment I have briefly described the functioning of front-end and back-end using MySQL.

Purpose of this assignment was to implement back-end functionality for any one feature mentioned in earlier submissions and in Project Proposal.

I have implemented back-end functionality for **Products Management for Admin**. A brief description of this feature with back-end is explained below.

---

## **[Admin - Products Management](https://dsu-food-bank.herokuapp.com/admin/products)**:

### Overview

This feature is mainly intended for Admin users of the system. It focuses on managing products in the database. Managing the products includes following tasks:

1. Getting list of Products.
2. Adding a new Product.
3. Updating existing Products.
4. Deleting existing Products.
5. Changing and removing Product image.
6. Getting list of Categories.
7. Adding a new Category.
8. Updating name of existing Category.

All the tasks are achieved by manipulating database using API calls except for images. Images are stored separately on Firebase Storage. Firebase Storage provides an easy and reliable way to store and retrieve images.

### Managing Products

All the products are displayed in the form of table as soon as page is loaded. There are two action button provided with each product, one to edit the product and one to delete the product. A button to add a new product is provided on the top of table.

Below are the list of API end-points used for managing products.

1. **Get All Products:**

   > GET: api/products/

   Response:

   ```js
   {
     success: boolean,
     statusCode: number,
     items: listOfProducts
   }
   ```

2. **Get Specific Product by Id:\***

   > GET: api/products/:productId

   Response:

   ```js
   {
     success: boolean,
     statusCode: number,
     items: listOfProducts
   }
   ```

3. **Create New Product:**

   > POST: api/products

   Request Body:

   ```js
   {
     name: string,
     desc: string,
     categoryId: number,
     availableQty: number,
     limit: number
   }
   ```

4. **Update Product:**

   > PUT: api/products/:productId

   Request Body:

   ```js
   {
     name: string,
     desc: string,
     categoryId: number,
     availableQty: number,
     limit: number
   }
   ```

5. **Delete Product:**

   > DELETE: api/products/:productId

   Response:

   ```js
   {
     success: boolean,
     statusCode: number,
     result: responseFromDatabase
   }
   ```

### Managing Images

Images are stored in Firebase Storage using [AngularFire](https://github.com/angular/angularfire) library. Name of image file is set to product id to easily locate and update image. Storing and retrieving operation are asynchronous and have very minimal impact on efficiency of the application.

### Managing Categories

Categories are also displayed as table in a separate tab on the same page. Categories can be only updated, they cannot be deleted. As categories are assigned with each product, deleting a category would required that category to be not assigned with any product. As long as a category is assigned to any product, it cannot be deleted. Hence deleting a category is not so meaningful operation.

1. **Get All Categories:**

   > GET: /api/categories

   Response:

   ```js
   {
     success: boolean,
     statusCode: number,
     items: listOfCategories
   }
   ```

2. **Add Category:**

   > POST: /api/categories

   Request Body:

   ```js
   {
     name: string;
   }
   ```

3. **Update Category:**

   > PUT: /api/categories/:categoryId

   Request Body:

   ```js
   {
     name: string;
   }
   ```

---

## Directory Structure

Since we are using Angular Framework for this application, the directory structure is different that specified in Assignment Description document. Angular uses component base directory structure to manage files related to a single component.

A component comprise of mainly three files:

- HTML file (Presentation Logic)
- Style file (SASS, CSS, SCSS)
- TypeScript file (Business Logic)

Below is an example of a component that I have used for my feature:

```
  . products
  |
  +-- products.component.html
  |
  +-- products.component.scss
  |
  +-- products.component.ts

```

---

## List of Files I have created

```
.
|
+-- server
|   +

```

---

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [AngularFire](https://github.com/angular/angularfire)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

---

## Sources Used

### delete-dialog.component.ts

**Lines 10-18**

```ts
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit(): void {}

  confirm() {
    this.dialogRef.close(true);
  }
}
```

The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/dialog/examples) as shown below:

```ts
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
```

- The code in [Angular Material](https://material.angular.io/components/dialog/examples) is used in the example of Dialog component.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is used to display dialog to confirm the delete operation for a product in Admin Dashboard.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is modified to return a value when `Delete` button is pressed in dialog. When `Delete` button is pressed, the code will return `true` which will be checked by the calling function to delete the product.

## References

- [Navigation Bar](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp)
- [Material Icons](https://material.angular.io/components/icon/overview)
- [Material Table](https://material.angular.io/components/table/overview)
- [Material Card](https://material.angular.io/components/card/overview)
- [Material Dialogbox](https://material.angular.io/components/dialog/overview)
- [Material Snackbar](https://material.angular.io/components/snack-bar/overview)
- [Google Map](https://goo.gl/maps/Jb5tu61uEUrq3gdt9)
- [Social Media Icons](https://fontawesome.com/6?next=%2Ficons)

### Images

- [Product Image and Search Bar Image (Right Side)](https://www.themississaugafoodbank.org/)
- [404 Image](https://pngio.com/images/png-a503902.html)
- [Profile Page Background Image](https://wallpaperaccess.com/blue-orange)
- [Profile Image](https://www.vecteezy.com/vector-art/379094-edit-profile-vector-icon)
