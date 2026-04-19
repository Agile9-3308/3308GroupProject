# AgileFlow Final Report
# AgileFlow Final Report

## Milestone 8: Final Report Submission

## Project Title
AgileFlow - An Agile-Methodology Project Management Platform
AgileFlow - An Agile-Methodology Project Management Platform

## Team Members
- Andrew MacRossie
- Carolina Perez
- Erick Samayoa
- Mike Davis
- Sergio Rojas-Aguilar
- Andrew MacRossie
- Carolina Perez
- Erick Samayoa
- Mike Davis
- Sergio Rojas-Aguilar

## Required Links

- [Jira Project Tracker](https://sergrojas29.atlassian.net/jira/software/projects/AGL/summary)
- [GitHub Repo - Front End](https://github.com/Agile9-3308/3308GroupProject)
- [Github Repo - Back End](https://github.com/Sergrojas29/Agile-Backend)
- [Project Presentation (With Demo)](https://www.youtube.com/watch?v=c3rO-X5K2BQ)
- [AgileFlow Deployed Front End Site](https://three308groupproject.onrender.com)

## Repository Readiness

All team members have verified that their latest work is pushed to the remote repository.

The repository contains the following required files and assets:

- README.md
- WEEKLY_STATUS.md
- PAGE_TESTING.md
- SQL_TESTING.md
- FINAL_REPORT.md
- Project presentation files from the Presentation Milestone
- Video of demo
- Source code (frontend and backend)
- Test cases (unit and integration)
- Source documentation and auto-generated documentation files

## Final Status Report

### What We Completed
- Working MVP including:
  - User authentication
  - Study group creation and membership management
  - Task creation, assignment, and status tracking
  - Weekly availability input
  - Availability overlap calculation
- React frontend with a consistent navigation flow
- FastAPI backend with REST endpoints
- PostgreSQL database with a relational schema
- Public deployment of the application
- Project presentation slides and a customer-facing demo video

### What We Were in the Middle of Implementing
- Improved ranking of suggested meeting times
- Messaging improvements (moving from polling toward real-time updates)
- UI polish and accessibility pass
- Expanded automated test coverage

### What We Planned for the Future
- Mobile-first redesign
- Calendar integrations (Google Calendar, Outlook)
- Notifications for upcoming sessions and deadlines
- Rich messaging features (threads, attachments)
- Additional themes (including dark mode)
- More advanced scheduling preferences

### Known Problems and Limitations
- Messaging uses polling rather than WebSockets
- Scheduling logic is heuristic-based and may not scale well to very large groups
- Mobile layout is usable but not fully optimized
- Error handling is solid for common paths but needs more edge-case coverage

## System Overview

StudySync uses a standard three-tier architecture:

- Frontend: React
- Backend: FastAPI
- Database: PostgreSQL

The system was designed to support incremental development, clear separation of concerns, and straightforward testing.

## Pages That Access Database Information

- Login: users
- Dashboard: users, groups, tasks
- Group Page: groups, group_members, tasks, availability
- Availability Page: availability
- Task Management Page: tasks, users

## Page Data Access Tests (High-Level)

### Use case name
Dashboard loads correct data for the logged-in user

### Description
Verify the dashboard displays only the logged-in user's groups and tasks.

### Pre-conditions
- User account exists
- User is logged in
- User belongs to at least one group
- User has at least one assigned task

### Test steps
1. Navigate to Dashboard
2. Observe Groups list
3. Observe Tasks Due list

### Expected result
- Groups list includes only groups where the user is a member
- Tasks list includes only tasks assigned to the user (excluding completed tasks)

### Actual result
- Dashboard shows the correct groups and tasks for the user

### Status
Pass

### Notes
N/A

### Post-conditions
No data is modified.

## Reflection

This project provided hands-on experience building, testing, deploying, and presenting a full-stack application.

Key takeaways:
- Scope control matters. The MVP focus kept the project shippable.
- Frequent integration reduces surprises later.
- Clear task ownership and weekly check-ins kept progress steady.
- Deployment and CI/CD work early paid off during final integration.

