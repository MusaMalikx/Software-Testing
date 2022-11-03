
# Medusa

An Open Source E commerce Platform.



## Testing Tool
- The platform uses JEST for test automation.
- JEST is used to test both the APIs and backend database.
- The configurations of JEST implemented in the **jest.config.js file**. 

![App Screenshot](/images/jest-config.png)
 
### Database Testing
Several test cases are written for testing the response from the database and verfiying any modifcation previously made into it.
#### Test Case 1
     Initialize Connection with Database

![App Screenshot](/images/tc1.png)

#### Test Case 2
     Verfiying Canceled order

![App Screenshot](/images/tc2.png)

#### Test Case 3
     Shipment Order

![App Screenshot](/images/tc3.png)

#### Test Case 3
     Order Placed

![App Screenshot](/images/tc4.png)

### API Testing
API test cases are divided into different modules such that each module contains their respective test cases.

![App Screenshot](/images/api-test.png)

#### Admin Authentication 
For verifying the Admin authentication, a post request is sent over the application server with admin credentials in a hashed format. On receving the response status code **200**. The test is passed. 

![App Screenshot](/images/admin-auth.png)

#### Orders
A get request is sent to application server to fetch the orders and display the current order list.

![App Screenshot](/images/order.png)

### List of Customers
A get request is tested to fetch the list of customers who have placed any order, a sample of 3 customers are tested.

![App Screenshot](/images/customer.png)



