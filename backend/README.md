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
