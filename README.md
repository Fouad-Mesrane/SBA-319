# SBA-319
# Express and MongoDB API

This is a simple RESTful API built with Node.js, Express, and MongoDB. The API includes three collections: **Users**, **Posts**, and **Comments**, with full CRUD operations and appropriate relationships between the collections.

## Features
- **Users**: Create, retrieve, update, and delete users.
- **Posts**: Create, retrieve, update, and delete posts. Each post is associated with a user.
- **Comments**: Create, retrieve, update, and delete comments. Each comment is associated with a post and a user.
- MongoDB data validation and population for referenced fields.
- Automatically delete posts and comments when a user or post is deleted.

---

## API Endpoints

### Users
| Method | Endpoint        | Description                |
|--------|-----------------|----------------------------|
| GET    | `/api/users`    | Retrieve all users         |
| GET    | `/api/users/:id`| Retrieve a user by ID      |
| POST   | `/api/users`    | Create a new user          |
| PATCH  | `/api/users/:id`| Update a user by ID        |
| DELETE | `/api/users/:id`| Delete a user by ID        |

---

### Posts
| Method | Endpoint        | Description                          |
|--------|-----------------|--------------------------------------|
| GET    | `/api/posts`    | Retrieve all posts                   |
| GET    | `/api/posts/:id`| Retrieve a post by ID                |
| POST   | `/api/posts`    | Create a new post (requires user email)|
| PATCH  | `/api/posts/:id`| Update a post by ID                  |
| DELETE | `/api/posts/:id`| Delete a post by ID                  |

---

### Comments
| Method | Endpoint                              | Description                                      |
|--------|--------------------------------------|--------------------------------------------------|
| GET    | `/api/posts/:id/comments`            | Retrieve all comments for a specific post        |
| POST   | `/api/posts/:id/comments`            | Create a new comment for a specific post (requires user email)|
| GET    | `/api/posts/:id/comments/:commentId` | Retrieve a specific comment by ID               |
| PATCH  | `/api/posts/:id/comments/:commentId` | Update a specific comment by ID                 |
| DELETE | `/api/posts/:id/comments/:commentId` | Delete a specific comment by ID                 |


