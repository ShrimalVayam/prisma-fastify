# 🧠 Fastify Profile Service

A simple REST API to manage user profiles using **Fastify**, **Prisma ORM**, and **PostgreSQL**, containerized with **Docker**.

---

## 📦 Tech Stack

- **Fastify** – blazing-fast Node.js framework
- **Prisma** – type-safe PostgreSQL ORM
- **PostgreSQL** – relational database
- **Docker** – containerization for local and production parity
- **TypeBox** – runtime validation for request bodies and responses

---

## 🚀 Features

- CRUD APIs for managing user profiles:
  - `GET /profiles` – Retrieve all profiles
  - `GET /profiles/:id` – Retrieve a profile by ID
  - `POST /profiles` – Create a new profile
  - `PUT /profiles/:id` – Update a profile
- Built-in observability using Fastify's logger
- Full type safety with Prisma and TypeBox

---

## 🧪 Prerequisites

- Node.js ≥ 18
- Docker + Docker Compose

---

## 🔧 Getting Started

### 1. Install
```bash
git clone[ https://github.com/your-username/fastify-profile-service](https://github.com/ShrimalVayam/prisma-fastify).git
cd prisma-fastify
```
### 2. Install
npm install

### 3. Start the application
npm run dev
