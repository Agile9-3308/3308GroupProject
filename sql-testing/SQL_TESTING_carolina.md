# SQL_TESTING.md
## Project Milestone 5: SQL Design
**Project:** DevDash  
**Purpose:** Database design and testing specification for developers

---

## Overview

This document describes the **database schema**, **table relationships**, and **data access methods** for the DevDash application. It is intended as a **developer-facing design document** that clearly defines how data is stored, accessed, and validated.

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
- `projects`
- `sprints`

Each table is described below.

---

## 1) Table: Projects

### Table Description
Stores Project information about various projects .

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique project identifier | Primary key |
| name | Project name | NOT NULL |
| description | Projects description | optional |
| start_at | time project is started | NOT NULL , default NOW() |
| end_at| Project is due at timestamp | NOT NULL |
| owner_id| Project owner | NOT NULL | Foriegn Key |

### Relationships
- One-to-many with `sprints`
- Many-to-one with `users` (one owner)


### Table Tests

**Use Case Name:** Create project record 
**Description:** Verify a new project can be stored  
**Pre-conditions:** Database running and users exsist  
**Test Steps:**  
1. Insert valid project row (name, end_at, owner_id)
2. Query project by id 
**Expected Result:** Project row exists  
**Actual Result:** Project returned by query  
**Status:** Pass  
**Post-conditions:** Project persisted  

**Use Case Name:** Validate fields   
**Description:** Ensure required fields cannot be null  
**Pre-conditions:** Database running and project exsists
**Test Steps:**
1. Attempt to insert project without name
2. Attempt to insert project without end_at
3. Attempt to insert project without owner_id
**Expected Result:** Fails   
**Actual Result:** Error raised   
**Status:** Pass   
---

  ## 2) Table: Sprints

### Table Description
Stores sprint information in relation to a project

### Fields
| Field Name | Description | Constraints |
|----------|------------|-------------|
| id | Unique sprint identifier | Primary key |
| label | Sprint label | NOT NULL |
| start_at | Sprint start time | NOT NULL DEFAULT NOW()|
| end-at_at | Sprint end time | NOT NULL |

### Relationships
- One-to-many with `tasks`


### Table Tests

**Use Case Name:** Create sprint record   
**Description:** Verify new sprint can be created   
**Pre-conditions:** Database is running  
**Test Steps:**
1. Insert valid sprint row
2. Query sprint by id
**Expected Result:** Sprint row exsists    
**Actual Result:** Sprint returned by query  
**Status:** Pass  
**Post-conditions:** Sprint persisted  

---

## Notes
- Constraints enforced at DB and ORM levels
- All access methods wrapped in service layer
- Tests executable via integration test suite
