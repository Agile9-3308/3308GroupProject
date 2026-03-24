# SQL_TESTING.md
## Project Milestone 5: SQL Design
**Project:** Agile Backend  
**Purpose:** Database design and testing specification for developers   
**Deployed Test** GitHub link : [UNIT TESTING ORM CODE](https://github.com/Sergrojas29/Agile-Backend/tree/python/tests)

---

## Overview

This document describes the **database schema**, **table relationships**, and **data access methods** for the Agile Backend application. It is intended as a **developer-facing design document** that clearly defines how data is stored, accessed, and validated.

This document answers the following questions:
- What tables exist in the database?
- What fields and constraints do those tables contain?
- How are tables related?
- What data access methods are required?
- Which pages depend on which data?
- How do we test both the schema and the access routines?

The backend uses **PostgreSQL** accessed through **SQLAlchemy 2.0** via a Flask web framework and Gunicorn WSGI server.

---

# Database Tables

At minimum, the system requires the following core tables:
- `users`
- `projects`
- `sprints`
- `tasks`


---

## 1) Table: users

### Table Description
Stores user account profiles, roles, and authentication data for the Agile tracking system.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique user identifier | UUID, Primary key, default uuid4 |
| name | User's full name | String, NOT NULL |
| role | User's job role/title | String, Nullable |
| is_admin | Admin privileges flag | Boolean, default False |
| username | Unique login name | String, Unique, NOT NULL |
| email | User email address | String, Unique, NOT NULL |
| password | Hashed password string | String, NOT NULL |
| created_at | Account creation timestamp | DateTime, NOT NULL, default NOW() |

### Relationships
- One-to-many with `projects` (as `assigned_projects` via `owner_id`)
- One-to-many with `tasks` (as `assigned_tasks`)

### Table Tests

**Use Case Name:** Create user record  
**Description:** Verify a new user can be stored and constraints are enforced.  
**Pre-conditions:** Database running, active `SessionLocal`  
**Test Steps:**
1. Insert valid user row (`session.add(user)`)
2. Commit and query by `username`  
3. Insert invalid user row (Missing `email` field)
**Expected Result:** Valid user persists with generated UUID. Invalid user triggers `IntegrityError` (NotNullViolation).  
**Actual Result:** Database enforces `nullable=False` and accurately returns data.  
**Status:** Pass  

---

## 2) Table: projects

### Table Description
Represents a high-level Agile project that contains multiple sprints.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique project identifier | UUID, Primary key, default uuid4 |
| title | Project display name | String(50), NOT NULL |
| description | Detailed project scope | String(500), Nullable |
| start_at | Target start date | Date, NOT NULL, server_default current_date |
| end_at | Target end date | Date, NOT NULL |
| owner_id | User who owns the project | Foreign key → users.id, Nullable |

### Relationships
- Many-to-one with `users` (Owner)
- One-to-many with `sprints` (as `assigned_sprints`)

### Table Tests

**Use Case Name:** Create multiple projects  
**Description:** Verify bulk project creation and Identity Map expiration.  
**Pre-conditions:** Owner user exists in the database.  
**Test Steps:**
1. Fetch existing user for `owner_id`.
2. Insert list of projects using `session.add_all()`.  
3. Call `session.flush()` and `session.expire_all()`.
4. Query all projects.
**Expected Result:** Projects are persisted, UUIDs generated, and exact count matches input.  
**Status:** Pass  

---

## 3) Table: sprints

### Table Description
Represents a time-boxed iteration (Sprint) assigned to a specific Project.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique sprint identifier | UUID, Primary key, default uuid4 |
| title | Sprint iteration name | String(100), NOT NULL |
| start_at | Sprint start date | Date, NOT NULL, server_default current_date |
| end_at | Sprint end date | Date, NOT NULL |
| project_id | Project owning this sprint | Foreign key → projects.id, NOT NULL |

### Relationships
- Many-to-one with `projects`
- One-to-many with `tasks`

### Table Tests

**Use Case Name:** Create sprint  
**Description:** Verify sprint is strictly tied to a project constraint.  
**Test Steps:**
1. Insert sprint with valid `project_id`.  
**Expected Result:** Sprint row created and associated with Project's `assigned_sprints` list.  
**Status:** Pass  

---

## 4) Table: tasks

### Table Description
Tracks individual Agile tasks/tickets within sprints or backlogs.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Task identifier | UUID, Primary key, default uuid4 |
| title | Task name | String, NOT NULL |
| description | Detailed task instructions | String, NOT NULL |
| start_at | Expected work start date | Date, NOT NULL |
| due_at | Deadline date | Date, NOT NULL |
| value | Story points | Integer, NOT NULL |
| user_id | Assigned user | Foreign key → users.id, Nullable |
| sprint_id | Associated sprint | Foreign key → sprints.id, Nullable |

### Relationships
- Many-to-one with `sprints` (Optional)
- Many-to-one with `users` (Optional)

### Table Tests

**Use Case Name:** Create orphan/backlog task  
**Description:** Verify optional relationships allow tasks to exist without a sprint or assigned user.  
**Test Steps:**
1. Insert task with `user_id=None` and `sprint_id=None`.  
2. Query task from database.  
**Expected Result:** Task persists successfully as a backlog item without throwing foreign key errors.  
**Status:** Pass  

---

# Data Access Methods

Each table has core access methods managed via Flask routes and SQLAlchemy sessions.

## Create Routes : [UNIT TESTING ORM CODE](https://github.com/Sergrojas29/Agile-Backend/tree/python/app/routes)

---

## Access Method: GET all users

### Description
Fetches all users from the database and serializes them for API consumption.

### Parameters
- */users (GET Request)

### Return Values
- List of Users `JSON` objects.

### Tests

**Use Case Name:** Fetch all users via API  
**Pre-conditions:** Database contains seeded users.  
**Test Steps:**
1. Execute `GET /users/`  
**Expected Result:** Returns HTTP 200 with JSON payload mapping `User` model attributes (UUID cast to string, DateTime formatted to ISO string).  
**Post-conditions:** None  

---

## Access Method: bulk_seed_database

### Description
Internal developer tool to instantly populate testing data.

### Parameters
- GET request(`api/db_create`) (`cls` class FilloutDataBase: / createTestDataBase())

### Return Values
- Return confrimation text

### Tests
1. Execute script.
2. Verify exact row counts (5 Users, 4 Projects, 4 Sprints, 10 Tasks).

---

# Page-to-Database Mapping

| Page/Endpoint | Tables Accessed |
|----|----------------|
| GET `/users/` | users |
| POST `/users/` | users |
| GET `/project/` | projects |
| POST `/project/` | projects |
| GET `/sprint/` | sprints |
| POST `/sprint/` | sprints |
| GET `/task/` | tasks |
| POST `/task/` | tasks |
| Projects Dashboard | projects, users (for owner mapping) |
| Sprint Board | sprints, projects |
| Task Backlog | tasks |
| Active Sprint View | tasks, sprints, users |

---

# Page Data Access Tests

**Use Case Name:** Dashboard loads active sprint tasks  
**Description:** Verify relational queries fetch tasks for a specific sprint.  
**Pre-conditions:** Seed data is loaded.  
**Test Steps:**
1. Query a specific Sprint.
2. Access `sprint.tasks` relationship array.  
**Expected Result:** Only tasks with matching `sprint_id` are returned.  
**Post-conditions:** None  

---

## Notes
- Constraints enforced strictly at PostgreSQL level (`nullable=False`, unique constraints).
- Relational mapping uses SQLAlchemy `Mapped` and `mapped_column` with `| None` for optional fields.
- UUIDs are utilized for all primary keys to prevent ID enumeration.
- Tests executable via `python -m unittest discover`.