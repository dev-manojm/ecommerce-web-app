`#######################################################################################################################################`
`#######################################################################################################################################`
`#######################################################################################################################################`
`#######################################################################################################################################`
`#######################################################################################################################################`
                                                    README by MANOJ MORE
#########################################################################################################################################
`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`

1. Before stating to analyze or work on this project please run `npm install` that will install all the dependencies.
2. Afte that please make sure you include the neccesary files in this root directoy that i will provide with the mail the most important 
one being, `.env` file make sure to add and save it in the root directory 
3. To start the project please run `npm start`
4. Folder Structure:
                        -controller
                            -auth.js
                            -braintree.js
                            -category.js
                            -order.js
                            -product.js
                            -user.js
                        -helpers
                            -dbErrorHandlers.js
                        -models
                            -category.js
                            -order.js
                            -product.js
                            -user.js
                        -routes
                            -auth.js
                            -braintree.js
                            -category.js
                            -order.js
                            -product.js
                            -user.js
                        -validators
                            -index.js
                        app.js

                    
5.  By default this app runs on PORT 3001 keep it that way if you wish to run this as is by importing the env files given in the mail
for front end and backend because front end runs on port 3000.
7. For payment and other things it is a sandbox account that is next to real but not real and it wont work if you try to give original
card details. So please make sure while checking ou you use the card number:
############################################# Card no: 4111 1111 1111 1111 CVV: 123 EXP: 12/21#########################################
8. Also for payments I have given my client ID token ID and mechant ID in the .env file that is given with the mail. So, you can either
use that or please feel free to create own account and edit the .env file's variables.
6. Please contact for further quiries, feedbacks, ammendments.