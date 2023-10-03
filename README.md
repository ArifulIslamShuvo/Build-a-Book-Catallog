# Build a Book Catallog

### Github Repository Link: https://github.com/ArifulIslamShuvo/Build-a-Book-Catallog

### Deployed Live Link: 

# 
## Application Routes:
### Application Routes:
#### User:
* api/v1/auth/signup (POST)
* api/v1/auth/signin (POST)
* api/v1/users (GET)
* api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include 

* api/v1/users/064a0378-8f78-44a5-a303-d062bdd9cb8f (PATCH)

* api/v1/users/064a0378-8f78-44a5-a303-d062bdd9cb8f (DELETE) 
* api/v1/profile/ (GET)

#### Category :
api/v1/categories/create-category (POST)
api/v1/categories/ (GET)
api/v1/categories/e52603cb-7126-4849-a107-2f01a2c686c3 (Single GET) 
api/v1/categories/7cc994fa-daa2-4747-9d19-76b243ff2990 (PATCH)
api/v1/categories/7cc994fa-daa2-4747-9d19-76b243ff2990 (DELETE) Include 

#### Books :
* api/v1/books/create-book(POST)
* api/v1/books (GET)
* api/v1/books/08f7edd5-dc74-47f1-9942-39f31ad0d6a3/category 
* api/v1/books/:id (GET)
* api/v1/books/:id (PATCH)
* api/v1/books/:id (DELETE)

#### Orders : 
* api/v1/orders/create-order (POST)
* api/v1/orders (GET)
* api/v1/orders/:orderId (GET)
* api/v1/orders/67b2149c-82af-4f9d-b8de-49a6eb70173e (GET)