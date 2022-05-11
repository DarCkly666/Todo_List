# Todo List

Rest API for **todo** list with login and signup

## Framework and libraries

- TypeScript
- Node JS
- JWT
- Bcrypt
- Sequelize
- MySQL

## Endpoints

- localhost:PORT/api/v1/login
- localhost:PORT/api/v1/signup

#### Successfull login return a **token**

Methods GET, POST, PUT, DELETE for todo require the **token** in _headers_ "authorization".

- localhost:PORT/api/v1/todos/user/USERID => Return a list with all todos by user.

## User model

```
user = {
    id: UUID,
    username: String,
    email: String,
    password: String,
    role: Integer (0 = normal user, 1 = super user)
    }

```

## ToDo model

```
todo = {
    id: UUID,
    name: String,
    content: String,
    completed: Tinyint,
    userId: UUID
    }

```

## Environment variables

- PORT
- DATABASE
- USERNAME
- PASSWORD
- HOST
- SECRET
