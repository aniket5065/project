# API Documentation - User Endpoints

## POST /users/register

This endpoint registers a new user into the application.

### Description
- **Endpoint:** `/users/register`
- **Method:** POST
- **Purpose:** Creates a new user with the provided details.
- **Validation:**
  - `email` must be a valid email address.
  - `fullname.firstname` must be at least 3 characters long.
  - `password` must be at least 6 characters long.

### Request Body
The endpoint expects a JSON payload with the following structure:

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"  // Optional: Include if available.
    },
    "email": "john.doe@example.com",
    "password": "yourPassword"
}
```

### Response Body
The endpoint returns a JSON payload with the following structure:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6426c2f17aee0b2c7c0c8e9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## POST /users/login

This endpoint authenticates an existing user.

### Description
- **Endpoint:** `/users/login`
- **Method:** POST
- **Purpose:** Authenticates a user and returns a JWT token if the credentials are valid.
- **Validation:**
  - `email` must be a valid email address.
  - `password` must be at least 6 characters long.

### Request Body
The endpoint expects a JSON payload with the following structure:

```json
{
    "email": "john.doe@example.com",
    "password": "yourPassword"
}
```

## GET /users/profile

This endpoint retrieves the profile of the authenticated user.

### Description
- **Endpoint:** `/users/profile`
- **Method:** GET
- **Purpose:** Returns the profile object for the current authenticated user.
- **Authentication:** Requires a valid JWT token provided either in the `Authorization` header in the format `Bearer <token>` or via a cookie named `token`.

### Request Headers
Example using Authorization header:

```plaintext
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response Body
On success, returns JSON containing the user profile:

```json
{
  "user": {
    "_id": "6426c2f17aee0b2c7c0c8e9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## GET /users/logout

This endpoint logs out the authenticated user.

### Description
- **Endpoint:** `/users/logout`
- **Method:** GET
- **Purpose:** Logs the user out by clearing the authentication cookie and blacklisting the current token.
- **Authentication:** Requires a valid JWT token provided in the `Authorization` header or via a `token` cookie.

### How It Works
- The endpoint clears the `token` cookie.
- The current token is added to a blacklist, preventing its further use.

### Request Headers
Example:

```plaintext
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response Body
On success, returns a JSON message confirming logout.

### Success Response Example
- **Status Code:** 200 OK

```json
{
  "message": "Logged out successfully"
}
```

# API Documentation - Captain Endpoints

## POST /captains/register

This endpoint registers a new captain into the application.

### Description
- **Endpoint:** `/captains/register`
- **Method:** POST
- **Purpose:** Creates a new captain with the provided details.
- **Validation:**
  - `fullname.firstname` must be at least 3 characters long.
  - `fullname.lastname` must be at least 3 characters long.
  - `email` must be a valid email address.
  - `password` must be at least 6 characters long.
  - `vehicle.color` must be at least 3 characters long.
  - `vehicle.plate` must be at least 3 characters long.
  - `vehicle.capacity` must be a number.
  - `vehicle.vehicleType` must be one of the following: `car`, `motorcycle`, or `auto`.

### Request Body
The endpoint expects a JSON payload with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword",
  "vehicle": {
    "color": "red",
    "plate": "mp 04 xy 6504",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

### Response Body
The endpoint returns a JSON payload with the following structure:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "6426c2f17aee0b2c7c0c8e9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "mp 04 xy 6504",
      "capacity": 3,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

### Error Response Example
- **Status Code:** 409 Conflict

```json
{
  "message": "Captain already exists"
}
```
