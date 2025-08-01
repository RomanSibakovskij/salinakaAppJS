# SalinakaAppJS

Selenium test suite on basic e-commerce web app functionality (various product addition to / quantity update / removal from shopping cart / order checkout) The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

 4. Selenium 4.32 and above
    
 5. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Install ESLint with cmd in IDE terminal: npm init @eslint/config@latest
7. Run the test suite on the IDE (to run ESLint input in the terminal: npm run lint)

## Test Case List

//Navigate to Register Page Test

1.	//Test 001 -> navigate user to register page test

//Valid User Account Creation Test

1.	//Test 002 -> valid user account creation test

//Invalid User Account Creation Tests - No Singular Input

1.	//Test 002a -> invalid user account creation test - no user full name
2.	//Test 002b -> invalid user account creation test - no user email
3.	//Test 002c -> invalid user account creation test - no user password

//Invalid User Account Creation Tests - Too Short Singular Input

1.	//Test 002d -> invalid user account creation test - too short user full name (3 chars)
2.	//Test 002e -> invalid user account creation test - too short user email (1 char -> name, domain) (the error wasn't triggered, test has failed)
3.	//Test 002f -> invalid user account creation test - too short user password (7 chars)

//Invalid User Account Creation Tests - Too Long Singular Input

1.	//Test 002g -> invalid user account creation test - too long user full name (201 chars) (the error wasn't triggered, test has failed)
2.	//Test 002h -> invalid user account creation test - too long user email (100 chars -> name, domain) (the error wasn't triggered, but the user account creation was aborted, test has passed)
3.	//Test 002i -> invalid user account creation test - too long user password (75 chars) (the error wasn't triggered, test has failed)

//Invalid User Account Creation Tests - Invalid Singular Input Format

1.	//Test 002j -> invalid user account creation test - invalid full name input format (special symbols only) (the error wasn't triggered, test has failed)
2.	//Test 002k -> invalid user account creation test - invalid email input format (missing '@')
3.	//Test 002l -> invalid user account creation test - existing email (used beforehand in manual testing)
4.	//Test 002l -> invalid user account creation test - existing email (used beforehand in manual testing)

//Valid Edit User Account Data Test

1.	//Test 003 -> valid edit user account data test

//Invalid Edit User Account Data Tests - No Singular Input

1.	//Test 003a -> invalid edit user account data test - no edited full name (the webpage backend seems to put former full name back, test has failed)
2.	//Test 003b -> invalid edit user account data test - no edited email
3.	//Test 003c -> invalid edit user account data test - no address (no error was triggered (during manual testing too), test has failed)
4.	//Test 003d -> invalid edit user account data test - no mobile (the webpage backend seems to put random valid mobile phone number back, test has failed)
5.	//Test 003e -> invalid edit user account data test - no user password (no error was triggered (during manual testing too), test has failed)

//Invalid Edit User Account Data Tests - Too Short Singular Input

1.	//Test 003f -> invalid edit user account data test - too short edited full name (3 chars)
2.	//Test 003g -> invalid edit user account data test - too short edited email (1 char -> name, domain) (no error was triggered (during manual testing too), test has failed)
3.	//Test 003h -> invalid edit user account data test - too short address (3 chars) (no error was triggered (during manual testing too), test has failed)
4.	//Test 003i -> invalid edit user account data test - too short mobile (2 digits) (no error was triggered (during manual testing too), test has failed)

//Invalid Edit User Account Data Tests - Too Long Singular Input

1.	//Test 003j -> invalid edit user account data test - too long edited full name (201 chars)
2.	//Test 003k -> invalid edit user account data test - too long edited email (100 chars -> name, domain) (no error was triggered (during manual testing too), test has failed)
3.	//Test 003l -> invalid edit user account data test - too long address (100 chars) (no error was triggered (during manual testing too), test has failed)
4.	//Test 003m -> invalid edit user account data test - too long mobile (30 digits) (no error was triggered (during manual testing too), test has failed)

//Invalid Edit User Account Data Tests - Invalid Singular Input Format

1.	//Test 003n -> invalid edit user account data test - invalid edited full name format (special symbols only) (no error was triggered (during manual testing too), test has failed)
2.	//Test 003o -> invalid edit user account data test - invalid edited email format (missing '@')
3.	//Test 003p -> invalid edit user account data test - existing email (used beforehand in manual testing) (no error was triggered (during manual testing too), test has failed)
4.	//Test 003q -> invalid edit user account data test - invalid address format (special symbols only) (no error was triggered (during manual testing too), test has failed)
5.	//Test 003r -> invalid edit user account data test - invalid mobile format (special symbols only) (no error was triggered (during manual testing too), test has failed)

//Valid User Logout Test

1.	//Test 004 -> valid user logout test

//Valid User Login Tests

1.	//Test 005 -> valid user login test
2.	//Test 005a -> valid user login with edited login email test

//Invalid User Login Tests - No Singular Input

1.	//Test 005b -> invalid user login test - no login email
2.	//Test 005c -> invalid user login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	//Test 005d -> invalid user login test - invalid login email
2.	//Test 005e -> invalid user login test - invalid login email format (missing '@')
3.	//Test 005f -> invalid user login test - invalid login password

//Add Single Featured Product To Cart Tests

1.	//Test 006 -> add single featured ("Burnikk") product to cart test (as a guest)
2.	//Test 006a -> add single featured product ("Very Nice") to cart test (as a registered user)

//Add Multiple Different Featured Products To Cart Tests

1.	//Test 006b -> add multiple featured products ("Burnikk", "Buldit") to cart test (as a guest)
2.	//Test 006c -> add multiple featured products ("Very Nice", "Balakubak") to cart test (as a registered user)

//Add Single Recommended Product To Cart Tests

1.	//Test 007 -> add single recommended product ("Pitaklan") to cart test (as a guest)
2.	//Test 007a -> add single recommended product ("Kulangot") to cart test (as a registered user)

//Add Multiple Different Recommended Products To Cart Tests

1.	//Test 007b -> add multiple different recommended products ("Pitaklan", "Sipon Malapot") to cart test (as a guest)
2.	//Test 007c -> add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test (as a registered user)

//Add Single Searched Product To Cart Tests

1.	//Test 008 -> add single searched product ("Tilapia") to cart test (as a guest)
2.	//Test 008a -> add single searched product ("Tilapia") to cart test (as a registered user)

//Add Multiple Different Searched Products To Cart Tests

1.	//Test 008b -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a guest)
2.	//Test 008c -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a registered user)

//Remove Product From Basket Test

1.	//Test 009 -> remove single recommended product ("Pitaklan") to cart test

//Add Single Shop Dashboard Page Product To Cart Tests

1.	//Test 010 -> add single shop dashboard product ("Quake Overload") to cart test (as a guest)
2.	//Test 010a -> add single shop dashboard product ("Quake Overload") to cart test (as a registered user)

//Add Multiple Different Shop Dashboard Page Products To Cart Tests

1.	//Test 010b -> add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a guest)
2.	//Test 010c -> add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a registered user)

//Add Single Featured Product To Checkout Tests

1.	//Test 011 -> add single featured product ("Burnikk") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 011a -> add single featured product ("Very Nice") to check out test (as a registered user)

//Add Multiple Different Featured Products To Checkout Tests

1.	//Test 011b -> add multiple featured products ("Burnikk", "Buldit") to cart test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 011c -> add multiple featured products ("Very Nice", "Balakubak") to check out test (as a registered user)

//Add Single Recommended Product To Checkout Tests

1.	//Test 012 -> add single recommended product ("Pitaklan") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 012a -> add single recommended product ("Kulangot") to check out test (as a registered user)

//Add Multiple Different Recommended Products To Checkout Tests

1.	//Test 012b -> add multiple different recommended products ("Pitaklan", "Sipon Malapot") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 012c -> add multiple different recommended products ("Kulangot", "Kibal Batal") to check out test (as a registered user)

//Add Single Searched Product To Checkout Tests

1.	//Test 013 -> add single searched product ("Tilapia") to cart test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 013a -> add single searched product ("Tilapia") to check out test (as a registered user)

//Add Multiple Different Searched Products To Checkout Tests

1.	//Test 013b -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 013c -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a registered user)

//Add Single Shop Dashboard Page Product To Checkout Tests

1.	//Test 014 -> add single shop dashboard product ("Quake Overload") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 014a -> add single shop dashboard product ("Quake Overload") to check out test (as a registered user)


//Add Multiple Different Shop Dashboard Page Products To Checkout Tests

1.	//Test 014b -> add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
2.	//Test 014c -> add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a registered user)

//Update Product Quantity In Cart Test

1.	//Test 015 -> update single featured product ("Burnikk") quantity in cart test

//Remove Product(s) From Cart Tests

1.	//Test 016 -> remove set single product ("Buldit") from cart test
2.	//Test 016a -> remove all products from cart (with "Clear Basket" button) test

//Valid Featured Product(s) Checkout Tests

1.	//Test 017 -> single featured product ("Very Nice") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
2.	//Test 017a -> multiple featured products ("Very Nice", "Balakubak") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)

//Valid Recommended Product(s) Checkout Tests

1.	//Test 018 -> single recommended product ("Kulangot") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
2.	//Test 018a -> multiple different recommended products ("Kulangot", "Kibal Batal") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)

//Valid Searched Product(s) Checkout Tests

1.	//Test 019 -> single searched product ("Tilapia") check out (PayPal) confirmation test (as a registered user)
2.	//Test 019a -> multiple different searched products ("Tilapia", "Tiktilaok Manok") check out (PayPal) confirmation test (as a registered user)

//Valid Shop Dashboard Page Product Checkout Tests

1.	//Test 020 -> single shop dashboard product ("Quake Overload") check out confirmation (PayPal) test (as a registered user) (the feature isn't yet finished, test has failed)
2.	//Test 020a -> multiple different shop dashboard products ("Very Nice", "Sugat") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)

//Invalid Featured Product Checkout Tests - No Singular Input

1.	//Test 021 -> invalid single featured product ("Very Nice") check out confirmation test - no shipping full name (as a registered user) (the backend seems to input full name back after clicking "Next Step" button, test has failed)
2.	//Test 021a -> invalid single featured product ("Very Nice") check out confirmation test - no shipping email (as a registered user)
3.	//Test 021b -> invalid single featured product ("Very Nice") check out confirmation test - no shipping address (as a registered user)
4.	//Test 021c -> invalid single featured product ("Very Nice") check out confirmation test - no shipping mobile phone (as a registered user)
5.	//Test 021d -> invalid single featured product ("Very Nice") check out confirmation test - no credit card full name (as a registered user)
6.	//Test 021e -> invalid single featured product ("Very Nice") check out confirmation test - no credit card number (as a registered user)
7.	//Test 021f -> invalid single featured product ("Very Nice") check out confirmation test - no credit card expiration date (as a registered user)
8.	//Test 021g -> invalid single featured product ("Very Nice") check out confirmation test - no credit card CVV number (as a registered user)

//Invalid Featured Product Checkout Tests - Too Short Singular Input

1.	//Test 021h -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping full name (3 chars) (as a registered user) (no error was triggered, test has failed)
2.	//Test 021i -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping email (1 char -> name, domain) (as a registered user) (no error was triggered, test has failed)
3.	//Test 021j -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping address (3 chars) (as a registered user) (no error was triggered, test has failed)
4.	//Test 021k -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping mobile phone (2 digits) (as a registered user) (no error was triggered, test has failed)
5.	//Test 021l -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card full name (3 chars) (as a registered user)
6.	//Test 021m -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card number (15 digits) (as a registered user) (no error was triggered, test has failed)
7.	//Test 021n -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card expiration date (too short year input) (as a registered user) (no error was triggered, test has failed)
8.	//Test 021o -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card CVV number (2 digits) (as a registered user)

//Invalid Featured Product Checkout Tests - Too Long Singular Input

1.	//Test 021p -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping full name (61 chars) (as a registered user)
2.	//Test 021q -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping email (100 chars -> name, domain) (as a registered user) (no error was triggered, but the checkout was aborted, test has passed)
3.	//Test 021r -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping address (100 chars) (as a registered user) (no error was triggered, test has failed)
4.	//Test 021s -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping mobile phone (30 digits) (as a registered user) (no error was triggered, test has failed)
5.	//Test 021t -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card full name (61 chars) (as a registered user) (no error was triggered, test has failed)
6.	//Test 021y -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card number (17 digits) (as a registered user) (no error was triggered, test has failed)
7.	//Test 021v -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card expiration date (too long year input) (as a registered user) (no error was triggered, test has failed)
8.	//Test 021w -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card CVV number (5 digits) (as a registered user)

//Invalid Featured Product Checkout Tests - Invalid Singular Input Format

1.	//Test 021x -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping full name format (special symbols only) (as a registered user) (no error was triggered, test has failed)
2.	//Test 021y -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping email format (missing '@') (as a registered user)
3.	//Test 021z -> invalid single featured product ("Very Nice") check out confirmation test - existing shipping email (used beforehand in manual testing) (as a registered user) (no error was triggered, but the checkout was aborted, test has passed)
4.	//Test 021aa -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping address format (special symbols only) (as a registered user) (no error was triggered, test has failed)
5.	//Test 021ab -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping mobile phone format (special symbols only) (as a registered user) (input field doesn't allow string input, test has passed)
6.	//Test 021ac -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card full name format (special symbols only) (as a registered user) (no error was triggered, test has failed)
7.	//Test 021ad -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card number format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
8.	//Test 021ae -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card expiration date format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
9.	//Test 021af -> invalid single featured product ("Very Nice") check out confirmation test - reversed credit card expiration date (as a registered user) (other than test string was input, no error was triggered, test has failed)
10.	//Test 021ag -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card CVV number format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
