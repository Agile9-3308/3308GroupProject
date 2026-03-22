# SQL_TESTING.md
## Project Milestone 5: SQL Design
**Project:** Agile Project Management Application  
**Purpose:** Database design and testing specification for developers

---

## Table: Tasks

### Table Description
Stores individual work items belonging to a sprint and assigned to a user. Tasks are the atomic units of work tracked in the system and carry a priority level, time range, name, and work item description.

### Fields

| Field Name | Description | Constraints |
|---|---|---|
| TaskID | Unique task identifier | Primary Key (composite), NOT NULL |
| TaskName | Human-readable task name | NOT NULL |
| TaskStartDate | Expected start date and time | NOT NULL |
| TaskEndDate | Expected completion date and time | NOT NULL |
| TaskItems | Description or checklist of work items | NOT NULL |
| Sprints_SprintID | Sprint this task belongs to | Foreign Key → Sprints(SprintID), NOT NULL |
| AssignedUserID | User assigned to complete the task | Foreign Key → Users(UserID), NOT NULL |
| Priority | Numeric priority level (e.g., 1 = Highest) | NOT NULL |

### Relationships
- Many-to-one with `Sprints`
- Many-to-one with `Users`
- Composite primary key on (`TaskID`, `Sprints_SprintID`, `AssignedUserID`)

### Table Tests

**Use Case Name:** Create task with valid references  
**Description:** Verify a task is successfully created when both foreign keys are valid  
**Pre-conditions:** Sprint with SprintID = 1 and User with UserID = 1 exist  
**Test Steps:**
1. Insert a valid task row
2. Query by TaskID

**Expected Result:** Task row returned with all expected values  
**Status:** Pass  
**Post-conditions:** Task stored and linked to SprintID = 1 and UserID = 1

---

**Use Case Name:** Retrieve tasks ordered by priority  
**Description:** Verify tasks within a sprint are returned in ascending priority order  
**Pre-conditions:** Multiple tasks with varying Priority values exist for SprintID = 1  
**Test Steps:**
1. Query all tasks for SprintID = 1 with ORDER BY Priority ASC

**Expected Result:** Tasks returned sorted from lowest to highest Priority value  
**Status:** Pass  
**Post-conditions:** No data is modified

___
