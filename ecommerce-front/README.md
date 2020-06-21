`#######################################################################################################################################`
                                                        `swipe down for README by the author`
`#######################################################################################################################################`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
#########################################################################################################################################
#########################################################################################################################################
#########################################################################################################################################
#########################################################################################################################################
#########################################################################################################################################
                                                    README by MANOJ MORE
#########################################################################################################################################
`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`

1. Before stating to analyze or work on this project please run `npm install` that will install all the dependencies.
2. Afte that please make sure you include the neccesary files in this root directoy that i will provide with the mail the most important 
one being, `.env` file make sure to add and save it in the root directory 
3. To start the project please run `npm start`
4. Folder Structure:
                    src
                        -admin `contains all the components for admin operations`
                            -AddCategory.js `component to add new category in the database`
                            -AddProduct.js `component to add new product in the database`
                            -ManageProducts `component to manage (update, delete) all the available products in the database`
                            -Orders.js `component to check orders given by people and mark their progess resp.`
                            -UpdateCategory.js `Update the category in the database`
                            -UpdatePoduct.js `Update the product in the database`
                            -auth `Contains mainly authorization middleware sort of components for user authentication(whether admin or normal user`
                            -AdminRoute.js `Checks if the comming request is from admin or noormal user approves admin`
                            -index.js `some important methods for signup signin and so on`
                            -PrivateRoute.js `Checks if the comming request is from admin or noormal user approves normal user`
                        -core
                            -About.js
                            -ApiCore.js
                            -Card.js
                            -Cart.js
                            -CartHelpers.js
                            -Checkbox.js
                            -Checkout.js
                            -FixedPrice.js
                            -Home.js
                            -Layout.js
                            -Menu.js
                            -Product.js
                            -RadioBox.js
                            -Search.js
                            -Shop.js
                            -ShowImage.js
                        -user
                            -AminDashboard.js
                            -ApiUser.js
                            -Profile.js
                            -Signin.js
                            -Signup.js
                            -UserDashboard.js
                        -App.js `Contains all the driving logic (routing logic) for the web app`
                        -config.js `regular function of config`
                        -index.js `execution start`
                        -styles.css

5.  By default this app runs on PORT 3000 keep it that way if you wish to run this as is by importing the env files given in the mail
for front end and backend because back end runs on port 3001
6. Please contact for further quiries, feedbacks, ammendments.
