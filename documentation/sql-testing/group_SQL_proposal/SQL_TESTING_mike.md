# SQL_TESTING.md
## Project Milestone 5: SQL Design
**Project:** AgileFlow  
**Purpose:** Database design and testing specification for developers

---

## Overview

This document describes the **database schema**, **table relationships**, and **data access methods** for the AgileFlow application. It is intended as a **developer-facing design document** that clearly defines how data is stored, accessed, and validated.

This document answers the following questions:
- What tables exist in the database?
- What fields and constraints do those tables contain?
- How are tables related?
- What data access methods are required?
- Which pages depend on which data?
- How do we test both the schema and the access routines?

The backend uses **PostgreSQL** accessed through **SQLAlchemy** via a FastAPI service layer.

---

# Database Tables

At minimum, the system requires the following tables:
- `users`
- `projects`
- `project_members`
- `sprints`
- `tasks`

Each table is described below.

---

## 1) Table: users

### Table Description
Stores user account and profile information for all AgileFlow users.

### Fields
| Field Name | Description | Constraints |
|------------|-------------|-------------|
| id | Unique user identifier | Primary key |
| username | Name shown in UI | NOT NULL |
| password_hash | Hashed password | NOT NULL |
| email | User email address | Unique, NOT NULL |
| profile_picture | User picture | None |
| bio | User description | None |
| created_at | Account creation timestamp | NOT NULL, default NOW() |
| created_at | Account creation timestamp | NOT NULL, default created_at |

### Relationships
- One-to-many with `projects` (as admin)
- Many-to-many with `projects`
- One-to-many with `tasks`

### Table Tests
**Use Case Name:** Create user record  
**Description:** Verify a new user can be stored  
**Pre-conditions:** Database running  
**Test Steps:**
1. Insert valid user row
2. Query by email  
**Expected Result:** User row exists  
**Actual Result:** User returned by query  
**Status:** Pass  
**Post-conditions:** User persisted  

---

## 2) Table: projects

### Table Description
Represents a project group created by a user.

### Fields
| Field Name | Description | Constraints |
|------------|-------------|-------------|
| id | Unique project identifier | Primary key |
| name | Project display name | NOT NULL |
| description | User description | None |
| owner_id | User who created project | Foreign key → users.id |
| created_at | Creation timestamp | NOT NULL |

### Relationships
- Many-to-one with `users`
- Many-to-many with `users` via `project_members`
- One-to-many with `sprints`

### Table Tests
**Use Case Name:** Create project  
**Description:** Verify project creation  
**Pre-conditions:** Database running; Owner user exists  
**Test Steps:**
1. Insert valid project row
2. Query by owner_id
**Expected Result:** Project row created  
**Actual Result:** Project returned  
**Status:** Pass  

---

## 3) Table: project_members

### Table Description
Join table mapping users to projects.

### Fields
| Field Name | Description | Constraints |
|------------|-------------|-------------|
| user_id | Member user | Foreign key → users.id |
| project_id | Project joined | Foreign key → projects.id |
| role | Member role (member/admin) | Default 'member' |

### Relationships
- One-to-one with `users`
- One-to-one with `projects`

### Table Tests
**Use Case Name:** Add user to project  
**Description:** Verify membership creation
**Pre-conditions:** Database running; User exists; Project exists
**Test Steps:**
1. Insert (user_id, project_id)
2. Query by user_id, project_id
**Expected Result:** Membership exists  
**Status:** Pass  

---

## 4) Table: sprints

### Table Description
Tracks project sprints within projects.

### Fields
| Field Name | Description | Constraints |
|------------|-------------|-------------|
| id | Sprint identifier | Primary key |
| project_id | Project owning sprint | Foreign key |
| name | Sprint name | NOT NULL |
| description | Sprint description | NOT NULL |
| start_date | Sprint start date | NOT NULL |
| end_date | Sprint end date | NOT NULL |

### Relationships
- Many-to-one with `projects`
- One-to-many with `tasks`

### Table Tests

**Use Case Name:** Create sprint  
**Description:** Verify sprint persistence
**Pre-conditions:** Database running; Project exists
**Test Steps:**
1. Insert valid sprint
2. Query by project_id
**Expected Result:** Task appears  
**Status:** Pass  

---

## 5) Table: tasks

### Table Description
Tracks tasks assigned within study projects.

### Fields
| Field Name | Description | Constraints |
|------------|-------------|-------------|
| id | Task identifier | Primary key |
| name | Task name | NOT NULL |
| description | Task descripion | NOT NULL |
| status | Task state | CHECK (todo, in_progress, complete) |
| due_date | Due date | Nullable |
| sprint_id | Sprint owning task | Foreign key |
| assignee_id | Assigned user | Foreign key |

### Relationships
- Many-to-one with `sprints`
- One-to-one with `users`

### Table Tests

**Use Case Name:** Create task  
**Description:** Verify task persistence
**Pre-conditions:** Database running; Sprint exists
**Test Steps:**
1. Insert valid task
2. Query by sprint_idm user_id
**Expected Result:** Task appears  
**Status:** Pass  

---

# Data Access Methods

Each table has at least one access method.

---

## Access Method: get_user_by_email

### Description
Fetches a user by email for authentication.

### Parameters
- email (string)

### Return Values
- User record or null

### Tests

**Use Case Name:** Verify valid login  
**Pre-conditions:** User exists  
**Test Steps:**
1. Call method with known email  
**Expected Result:** User object returned  
**Post-conditions:** None  

---

## Access Method: get_projects_for_user

### Description
Returns all projects a user belongs to.

### Parameters
- user_id (int)

### Return Values
- List of group objects

### Tests
1. User with memberships returns projects
2. User with none returns empty list

---

## Access Method: get_tasks_for_group

### Description
Returns tasks associated with a group.

### Parameters
- project_id (int)

### Return Values
- List of tasks

### Tests
1. Tasks returned for valid group
2. Empty list for group with no tasks

---

## Access Method: get_availability_overlap

### Description
Computes overlapping availability for a group.

### Parameters
- project_id (int)

### Return Values
- List of overlapping time windows

### Tests
1. Overlapping windows returned for common availability
2. Empty list when no overlap exists

---

# Page-to-Database Mapping

| Page | Tables Accessed |
|----|----------------|
| Login | users |
| Dashboard | users, projects, tasks |
| Group Page | projects, group_members, tasks, availability |
| Availability Page | availability |
| Task Page | tasks, users |

---

# Page Data Access Tests

**Use Case Name:** Dashboard loads user data  
**Description:** Verify dashboard queries correct tables  
**Pre-conditions:** User logged in  
**Test Steps:**
1. Load dashboard
2. Fetch projects and tasks  
**Expected Result:** Correct data displayed  
**Post-conditions:** None  

---

## Notes
- Constraints enforced at DB and ORM levels
- All access methods wrapped in service layer
- Tests executable via integration test suite
