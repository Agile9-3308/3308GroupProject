# SQL_TESTING.md
## Project Milestone 5: SQL Design
**Project:** StudySync  
**Purpose:** Database design and testing specification for developers

---

## Overview

This document describes the **database schema**, **table relationships**, and **data access methods** for the StudySync application. It is intended as a **developer-facing design document** that clearly defines how data is stored, accessed, and validated.

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
- `groups`
- `group_members`
- `tasks`
- `availability`

Each table is described below.

---

## 1) Table: users

### Table Description
Stores user account and profile information for all StudySync users.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique user identifier | Primary key, UUID, default uuid_generate_v4() |
| email | User email address | Unique, NOT NULL |
| password_hash | Hashed password | NOT NULL |
| display_name | Name shown in UI | NOT NULL |
| created_at | Account creation timestamp | NOT NULL, default NOW() |

### Relationships
- One-to-many with `groups` (as owner)
- Many-to-many with `groups` through `group_members`
- One-to-many with `tasks`
- One-to-many with `availability`

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

## 2) Table: groups

### Table Description
Represents a study group created by users.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique group identifier | Primary key, UUID, default uuid_generate_v4() |
| name | Group display name | NOT NULL |
| owner_id | User who created group | Foreign key → users.id, NOT NULL |
| created_at | Creation timestamp | NOT NULL |

### Relationships
- Many-to-one with `users`
- Many-to-many with `users` via `group_members`
- One-to-many with `tasks`
- One-to-many with `availability`

### Table Tests

**Use Case Name:** Create group  
**Description:** Verify group creation  
**Pre-conditions:** Owner user exists  
**Test Steps:**
1. Insert group with valid owner_id  
**Expected Result:** Group row created  
**Actual Result:** Group returned  
**Status:** Pass
**Post-conditions:** Group persisted  

---

## 3) Table: group_members

### Table Description
Join table mapping users to groups.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| user_id | Member user | Foreign key → users.id, NOT NULL |
| group_id | Group joined | Foreign key → groups.id, NOT NULL |
| role | Member role (member/admin) | Default 'member' |

### Relationships
- Composite primary key (`user_id`, `group_id`)
- Links users and groups

### Table Tests

**Use Case Name:** Add user to group  
**Description:** Verify membership creation  
**Pre-conditions:** User and group exist
**Test Steps:**
1. Insert (user_id, group_id)  
**Expected Result:** Membership exists 
**Status:** Pass  

---

## 4) Table: tasks

### Table Description
Tracks tasks assigned within study groups.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Task identifier | Primary key, UUID, default uuid_generate_v4() |
| group_id | Group owning task | Foreign key → groups.id, NOT NULL |
| assignee_id | Assigned user | Foreign key → users.id, Nullable |
| title | Task description | NOT NULL |
| status | Task state | CHECK (status IN ('todo','in_progress','complete')) |
| due_date | Due date | Nullable |

### Relationships
- Many-to-one with `groups`
- Many-to-one with `users`

### Table Tests

**Use Case Name:** Create task  
**Description:** Verify task persistence  
**Pre-Conditions:** Group exists
**Test Steps:**
1. Insert valid task  
2. Query by group_id  
**Expected Result:** Task appears with correct fields
**Actual Result:** Task returned 
**Status:** Pass  

---

## 5) Table: availability

### Table Description
Stores weekly availability time blocks per user and group.

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Availability record | Primary key, UUID, default uuid_generate_v4() |
| user_id | Owner user | Foreign key → users.id, NOT NULL |
| group_id | Associated group | Foreign key → groups.id, NOT NULL |
| day_of_week | Day label | NOT NULL |
| start_time | Start time | NOT NULL |
| end_time | End time | NOT NULL |

### Relationships
- Many-to-one with users
- Many-to-one with groups

### Table Tests

**Use Case Name:** Store availability  
**Description:** Verify availability persistence  
**Test Steps:**
1. Insert availability row  
2. Query by user_id  
**Expected Result:** Row returned  
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

## Access Method: get_groups_for_user

### Description
Returns all groups a user belongs to.

### Parameters
- user_id (int)

### Return Values
- List of group objects

### Tests
1. User with memberships returns groups
2. User with none returns empty list

---

## Access Method: get_tasks_for_group

### Description
Returns tasks associated with a group.

### Parameters
- group_id (int)

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
- group_id (int)

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
| Dashboard | users, groups, tasks |
| Group Page | groups, group_members, tasks, availability |
| Availability Page | availability |
| Task Page | tasks, users |

---

# Page Data Access Tests

**Use Case Name:** Dashboard loads user data  
**Description:** Verify dashboard queries correct tables  
**Pre-conditions:** User logged in  
**Test Steps:**
1. Load dashboard
2. Fetch groups and tasks  
**Expected Result:** Correct data displayed  
**Post-conditions:** None  

---

## Notes
- Constraints enforced at DB and ORM levels
- All access methods wrapped in service layer
- Tests executable via integration test suite
