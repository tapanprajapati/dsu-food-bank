## _Project Component - CSCI5709_

# 1. Project

## 1.1 Overview


## 1.2 Links

[Application](https://dsu-food-bank.herokuapp.com/)
[Source code](https://github.com/parthsw/dsu-food-bank)

## 1.3 Framework Customization

The application is bootstraped using the [ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket) enterprise level project generator. The generated boilerplate code has been extensively customized to accommodate our application need. It is divided in various logical modules to support the application features and are lazily loaded to improve the performance. The architecture is fairly scalable for future extensions.

The global stylesheets are partitioned in different partials to handle entities such as colors, typography, variables, reset, components, etc... Moreover, the build system includes auto-formatting and linting steps before generating the production build.

To conclude, Angular provides a modern, scalable, and modular architecture for the front-end development. As it is an opinionated framework, it encompasses everything that a web application needs. Furthermore, I have a fair share of experience with the framework working in enterprise level projects.

---

# 2. Application

The section gives an overview about application and various aspects of its design and development process.

## 2.1 Overview

The application aims to transform the manual operations of Dalhousie Student Union Food Bank into a managed digital solution by creating a digital and time saving experience for target users. It primarily targets three sets of users:

- Students and staff members of Dalhousie University using the services of Dalhousie Student Union Food bank
- Volunteers and staff members working for the food bank
- People who want to donate to the food bank

## 2.2 Technology Stack

The application is developed using below frameworks/libraries/plug-ins.

### Built with:

| Framework/Library/Package                                        | Usage                                                                                                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Angular](https://angular.io)                                    | Used as an application design framework and development platform to create a modular and scalable single-page app.                       |
| [Angular Material](https://material.angular.io)                  | To directly use comprehensive and modern UI components that work flawlessly across different devices.                                    |
| [Angular Flex Layout](https://github.com/angular/flex-layout)    | To create a responsive layout using [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and Responsive API. |
| [RxJS](http://reactivex.io/rxjs)                                 | Used to work with asynchronous or callback-based code.                                                                                   |
| [FontAwesome](https://fontawesome.com/)                          | To get the vector icons and social logos for the application.                                                                            |
| [Bootstrap](https://getbootstrap.com/)                           | To build responsive layout using predefined set of classes.                                                                              |
| [ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket) | To generate an extensible enterprise-grade angular boilerplate codebase.                                                                 |
| [Express](https://expressjs.com/)                                | To build a node server using minimalist web framework to deploy angular app on Heroku.                                                   |
| [HTMLhint](https://htmlhint.com/)                                | To perform static code analysis of HTML code.                                                                                            |
| [Stylelint](https://stylelint.io/)                               | Used to lint CSS code to avoid errors and enforce conventions in styles.                                                                 |
| [TSlint](https://palantir.github.io/tslint/)                     | Used to lint TypeScript code for readability, maintainability, and functionality errors.                                                 |
| [Prettier](https://prettier.io/)                                 | To automatically format all `.ts`, `.scss`, and `.html` files.                                                                           |
| [Angular CLI](https://cli.angular.io/)                           | Used as a command line interface to generate various entities of Angular.                                                                |
| [Jasmine](https://jasmine.github.io/)                            | Used as a behaviour-driven development framework for testing.                                                                            |
| [Karma](https://karma-runner.github.io/latest/index.html)        | Used as a Test runner to execute test cases.                                                                                             |
| [Protractor](https://www.protractortest.org/#/)                  | Used as an end-to-end test framework for Angular app.                                                                                    |

## 2.3 Design Decision

The section describes the chosen color palette and fonts.

### 2.3.1 Color Palatte

Color palette of the application is primarily derived from the dribble shot used on the landing page. It is a minimalistic rendition with default color white and below shades of blue and orange extracted from the shot:

| UI Element                      | Color Code |
| ------------------------------- | ---------- |
| Text + Links                    | #2d316b    |
| Primary button + Input + Footer | #0e0d3a    |
| Sub-footer                      | #06061d    |
| Action button                   | #e86317    |
| Image placeholder               | #ededed    |

All of them are incremental shades of blue except the action button. The later one uses a shade of orange to clearly attract the attention.

### 2.3.2 Typography

The application uses two variants of [Montserrat Google font](https://fonts.google.com/specimen/Montserrat), Black and Regular. Currently, all the `<h1>` elements of the application uses the Black variant, while everything else is being rendered with the regular form.

### 2.3.3 Design Principles

The application is designed keeping the following design principles in mind:

- 7 ± 2 Principle - The navigation bar only consist of seven items allowing users to retain.
- The 3-click rule - Designed the workflow in a way that requires minimum clicks to reach to a destination.
- Clear & Concise - All the labels and interactive buttons are clearly labeled.
- Appropriate Feedback - User receives an appropriate feedback to find their way back if they get lost or make a mistake.
- Content hierarchy - The app has clear and concise focus on content hierarchy. It provides clear emphasis on primary and secondary elements on a given page. (I.e., Organization of product name and category) All pages have an organized content having clear visual hierarchy.

## 2.4 Responsiveness + Testing

The application is tested for features and responsiveness with below set of devices and browsers:

- Asus VivoBook - Google Chrome, IE Edge, Firefox
- Nokia 5.1 Plus - Google Chrome
- Redmi Note 5 - Google Chrome
- One Plus 7 pro - Google Chrome

Note: The app is designed using modern CSS concepts such as grid and flex, which is supported by most of the browsers. However, Internet Explorer does not support all features of them, and therefore, you may not have a best experience while browsing the site in IE. I may add IE polyfills in the future, if time permits.

## 2.5 Content

See the section `Sources Used` to get details about images and content attribution.

## 2.6 W3C compliance

The application passes the W3C compliance check on [W3C Validator](https://validator.w3.org/). It only shows framework specific errors, which can not be corrected.

---

# 3. Technical Details

The section provides information about setting up the development environment and scripts to execute various tasks.

## 3.1 Getting Started

The section outlines the process to setup the source code on your local machine for development, testing, and/or extension.

See deployment for notes on how to deploy the project on a live system.

### 3.1.1 Prerequisites

Install the following list of softwares / libraries / plug-ins to setup the development environment to run this project on your local machine. The guide provides the steps considering the windows operating system.

- [Node.js](https://nodejs.org/en/download/) - JavaScript runtime environment
- [Visual Studio Code](https://code.visualstudio.com/) - Code Editing. Redefined.

See the following section for detailed step-by-step instructions on how to set up the project.

### 3.1.2 Installing

1. Go to project folder in VS code and install dependencies:

```sh
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```sh
npm run dev
```

## 3.2 Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                  | Description                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm start`           | Run node server on [Heroku](https://www.heroku.com/) to serve angular application                                                                           |
| `npm run postinstall` | [Heroku](https://www.heroku.com/) executes this script once all dependencies are installed to build the angular application                                 |
| `npm run build`       | Lint the application code, run prettier and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/dal-food-bank` folder |
| `npm run dev`         | Launch the application in development environment                                                                                                           |
| `npm run lint:ts`     | Lint TypeScript code                                                                                                                                        |
| `npm run lint:scss`   | Run the linter for scss code                                                                                                                                |
| `npm run lint:html`   | Run the linter for HTML code                                                                                                                                |
| `npm run lint`        | Executes linter for HTML, SCSS, and TypeScript code                                                                                                         |
| `npm run prettier`    | Automatically format all `.ts`, `.html` & `.scss` files                                                                                                     |

## 3.3 Deployment

The application is deployed on [Heroku](https://www.heroku.com/) - Cloud Application Platform. Following is a step-by-step guide to deploy your app on Heroku:

1. Sign in to Heroku.
2. Create a new app by providing app name & choosing region.
3. On the Deploy tab, select _GitHub_ as deployment menthod. It will prompt to connect with GitHub repository.
4. Sign in to GitHub and select the application repository.
5. Select _Enable Automatic Deploys_ to enable the automatic deployment as and when you check in to your source code.
6. Lastly, click on _Deploy Branch_ to deploy your application.

---

# 4. Sources

The section outlines the various sources used in design and development of the application.

## 4.1 Images

[1][landing](https://dal-food-bank.herokuapp.com/) Page Image - "DNA/FOOD," Dribbble. [Online]. Available: https://dribbble.com/shots/6413123-DNA-FOOD. [Accessed: 02-Jun-2020].  
[2][login](https://dal-food-bank.herokuapp.com/login) Page Image - "DNA/FOOD," Dribbble. [Online]. Available: https://dribbble.com/shots/6413153-DNA-FOOD. [Accessed: 02-Jun-2020].  
[3][products](https://dal-food-bank.herokuapp.com/products) & Product Details Image - "Grocery smallcase," Dribbble. [Online]. Available: https://dribbble.com/shots/6990945-Grocery-smallcase. [Accessed: 02-Jun-2020].  
[4][products](https://dal-food-bank.herokuapp.com/products) - No Result Found Image - "Scribd- 'No Search Results Found,'" Dribbble. [Online]. Available: https://dribbble.com/shots/4020070-Scribd-No-Search-Results-Found. [Accessed: 02-Jun-2020].  
[5][404](https://dribbble.com/shots/9133627-404-not-found) Page Image - "404 not found," Dribbble. [Online]. Available: https://dribbble.com/shots/9133627-404-not-found. [Accessed: 02-Jun-2020].  

## 4.2 Content

[1] "Lorem Ipsum," Lorem Ipsum - All the facts - Lipsum generator. [Online]. Available: https://www.lipsum.com/. [Accessed: 04-Jun-2020]. (Product description & footer element contains lorem ipsum text)  
[2] "Online Shopping Canada: Everyday Low Prices at Walmart.ca!" [Online]. Available: https://www.walmart.ca/en. [Accessed: 15-Jun-2020]. (Created dummy products using walmart site)  

## 4.3 Soure Code Citation

#### \_placeholders.scss

_Line 11_

```
object-fit: cover;
```

The code above was created by adapting the code in [Object-fit | CSS-Tricks](https://css-tricks.com/almanac/properties/o/object-fit/) as shown below:

```
object-fit: cover;
```

- [Object-fit | CSS-Tricks](https://css-tricks.com/almanac/properties/o/object-fit/)'s Code was used as I was looking for a way to contain an image in the given container irrespective of size.

#### _app-routing.module.ts_

_Lines 49_

```
RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
```

The code above was created by adapting the code in [Introduce Router Scroller in Angular v6.1](https://medium.com/lacolaco-blog/introduce-router-scroller-in-angular-v6-1-ef34278461e9) as shown below:

```
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
```

- The code in [Introduce Router Scroller in Angular v6.1](https://medium.com/lacolaco-blog/introduce-router-scroller-in-angular-v6-1-ef34278461e9) was implemented by finding the new configuration to scroll to the top on every route load.
- [Introduce Router Scroller in Angular v6.1](https://medium.com/lacolaco-blog/introduce-router-scroller-in-angular-v6-1-ef34278461e9)'s Code was used because the new component was getting loaded with the previous scroll position. It should go to the top for every new route.
- [Introduce Router Scroller in Angular v6.1](https://medium.com/lacolaco-blog/introduce-router-scroller-in-angular-v6-1-ef34278461e9)'s Code was modified by extracting the `scrollPositionRestoration` key.

#### products.component.scss

_Lines 08 - 15_

```
.grid {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
}
```

The code above was created by adapting the code in [Parthsw - CSS Grid](https://github.com/parthsw/css-grid/blob/master/image-grid/index.css) as shown below:

```
.container{
    display:grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
}
```

- [Parthsw - CSS Grid](https://github.com/parthsw/css-grid/blob/master/image-grid/index.css)'s Code was used as a refresher to CSS grid syntax.
- [Parthsw - CSS Grid](https://github.com/parthsw/css-grid/blob/master/image-grid/index.css)'s Code was modified by understanding the CSS grid layout created for reponsive image tiles and was adapted in Products tile grid.

## 4.4 References

[1] Twitter. [Online]. Available: https://twitter.com/DalStudentUnion/. [Accessed: 10-Jun-2020].  
[2] Facebook. [Online]. Available: https://www.facebook.com/dalstudentunion/. [Accessed: 10-Jun-2020].  
[3] Instagram. [Online]. Available: https://www.instagram.com/dalstudentunion/ [Accessed: 10-Jun-2020].  
[4] "Dalhousie Student Union Food Bank: Dalhousie Student Union," Dalhousie Student Union Food Bank | Dalhousie Student Union. [Online]. Available: http://dsu.ca/foodbank. [Accessed: 01-Jun-2020].  
[5] Angular, "angular/flex-layout," GitHub. [Online]. Available: https://github.com/angular/flex-layout/wiki/API-Documentation. [Accessed: 08-Jun-2020].  
[6] Angular, "Angular Material UI component library," Angular Material. [Online]. Available: https://material.angular.io/components/select/api. [Accessed: 11-Jun-2020].  
[7] Angular, "Angular Material UI component library," Angular Material. [Online]. Available: https://material.angular.io/components/card/api. [Accessed: 11-Jun-2020].  
[8] Angular, "Angular Material UI component library," Angular Material. [Online]. Available: https://material.angular.io/components/dialog/api. [Accessed: 11-Jun-2020].  
[9] "Components," Components · Bootstrap. [Online]. Available: https://getbootstrap.com/2.3.2/components.html. [Accessed: 11-Jun-2020].  
[10] Ngx-Rocket, "ngx-rocket/starter-kit," GitHub, 02-Apr-2020. [Online]. Available: https://github.com/ngx-rocket/starter-kit. [Accessed: 12-Jun-2020].  

---

## Author(s)

- [Parth Parmar](parth.parmar@dal.ca) - _(Front End Engineer)_

## Changelog

- Date Created: 16 JUN 2020
- Last Modification Date: 23 JUN 2020
