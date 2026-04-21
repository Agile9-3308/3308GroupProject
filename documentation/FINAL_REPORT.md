# AgileFlow Final Report
## Milestone 8: Final Report Submission

## Project Title
AgileFlow - An Agile-Method Project Tracking Platform


## Team Members
- Andrew MacRossie
- Carolina Perez
- Erick Samayoa
- Mike Davis
- Sergio Rojas-Aguilar


## Required Links

- [Jira Project Tracker](https://sergrojas29.atlassian.net/jira/software/projects/AGL/summary)
- [GitHub Repo](https://github.com/Agile9-3308/3308GroupProject)
- [Project Presentation (With Demo)](https://www.youtube.com/watch?v=c3rO-X5K2BQ)
- [AgileFlow Deployed Front End Site](https://three308groupproject.onrender.com)


## Repository Readiness

All team members have verified that their latest work is pushed to the remote repository.

The repository contains the following required files and assets:

- [README.md](../README.md)
- Weekly Status Reports:
    - [3/1/2026](./weekly-status-reports/Weekly-Status-20260301.md)
    - [3/8/2026](./weekly-status-reports/Weekly-Status-20260308.md)
    - [3/15/2026](./weekly-status-reports/Weekly-Status-20260315.md)
    - [3/22/2026](./weekly-status-reports/Weekly-Status-20260322.md)
    - [3/29/2026](./weekly-status-reports/Weekly-Status-20260329.md)
    - [4/5/2026](./weekly-status-reports/Weekly-Status-20260405.md)
    - [4/12/2026](./weekly-status-reports/Weekly-Status-20260412.md)
- [PAGE_TESTING.md](./PAGE_TESTING.md)
- [SQL_DESIGN.md](./sql-testing/SQL_Design.md)
- [FINAL_REPORT.md](./FINAL_REPORT.md)
- [Project Presentation PDF](./DevDash_Milestone7.pdf)
- Video of Demo - Part of [Video Presentation](https://www.youtube.com/watch?v=c3rO-X5K2BQ)
- [Front End Source Code](../front-end/)
- [Back End Source Code](../back-end/)
- [Test Cases - Unit and Integration](../back-end/tests/) 


## Final Status Report

### What We Completed
- Working MVP including:
    - Models for User, Project, Sprint, and Task
    - GET action for all models
    - POST action for Project, Sprint, and Task
    - PUT action for Task
    - DELETE action for Sprint and Task
- React front end with smooth navigation
    -Tailwind CSS for sleek design
- Flask backend with REST endpoints
- PostgreSQL database with relational interconnectedness
- Publicly accessible via deployment through Render
- Project presentation slides and a customer-facing demo video

### What We Were in the Middle of Implementing
- User auth
- Data population of burndown chart
- PUT actions for Sprint and Project
- DELETE action for Project
- Additional value inputs for POST/PUT actions on multiple models

### What We Planned for the Future
- Mobile responsiveness
- Potential mobile app
- Interactions between users, such as comments
- More robust admin permission structures

### Known Problems and Limitations
- Burndown chart is currently a placeholder with no live data
- User auth is non-functional
- Pages have not been built for more detailed views of projects


## System Overview

AgileFlow uses a standard three-tier architecture:

- Frontend: React
- Backend: Flask
- Database: PostgreSQL

The system was implemented to support collaborative incremental development, clear separation of functions/concerns, and straightforward testing structure.


## Pages That Interact with Database

- Home: users
- Dashboard: projects, sprints, tasks


## Page Data Access Tests (High-Level)

### GET Action for Users, Creation of currentUser in Global Context
Home Page fetches data from users (visible in console), affixing the first user object to the global context container for use on sub-pages, as currentUser.

#### Description
Navigation to Dashboard Page will populate page with associated data for currentUser, including projects, sprints, and tasks.

#### Pre-conditions
- At least one user account exists in database
- currentUser object exists in GlobalContext container
- currentUser is part of at least:
    - One project
- At least one of currentUser's projects has at least:
    - One sprint
    - One task

#### Test steps
1. Navigate to Home Page
2. Navigate to Dashboard Page
3. Observe Project(s), Sprint(s), and Task(s)

#### Expected result
- Projects section shows all Project(s), Sprint(s), and Task(s) associated with currentUser

#### Actual result
- Projects section shows all Project(s), Sprint(s), and Task(s) associated with currentUser

#### Status
Pass

#### Notes
N/A

#### Post-conditions
No data is modified.


<hr width="25%" align="left">


### POST/PUT/DELETE Actions on Dashboard Page
Using currentUser as a DB reference point, Dashboard Page will create new projects, create/delete sprints, and create/update/delete tasks.

#### Description
Once currentUser is available in Global Context, user can create, update, and delete different items via fetch requests to the API. Upon a successful return from the fetch request, the updated state of the items will be reflected on the page.

#### Pre-conditions
- At least one user account exists in database
- currentUser object exists in GlobalContext container
- API is running properly, ready to serve fetch requests

#### Test steps
1. Navigate to Home Page
2. Navigate to Dashboard Page
3. Create Project(s), Sprint(s), Task(s)
4. Update Task(s)
5. Delete Task(s), Sprint(s)

#### Expected result
- Projects section shows all associate Project(s), Sprint(s), and Task(s)
- Task items each have a checkbox
- There are functional input boxes for creating a Project, Sprint, and Task
- There are checkboxes for updating Tasks
- There are delete buttons for Tasks and Sprints
- All of this functionality works by triggering fetch requests with the API

#### Actual result
- Projects section shows all associate Project(s), Sprint(s), and Task(s)
- Task items each have a checkbox
- There are functional input boxes for creating a Project, Sprint, and Task
- There are checkboxes for updating Tasks
- There are delete buttons for Tasks and Sprints
- All of this functionality works by triggering fetch requests with the API

#### Status
Pass

#### Notes
N/A

#### Post-conditions
Data from first user in database is modified, based on the actions taken during the test.


## Reflection

AgileFlow gave the team the opportunity to create a robust full-stack web application. Team members gained experience with multiple different technologies, on both the front end and back end. The team also was able to improve their abilities in coordination/delegation, through utilization of Discord and the project management platform Jira.

Key takeaways:
- Ability to adapt to changing priorities and circumstances is paramount in reaching an MVP.
- Testing during every sprint is a great way to reduce big hurdles later in the project timeline.
- Frequent communication and task delegation are important tools for encouraging specialization, while allowing the project to be completed on time.
- Agile Methodologies are very useful in boosting accountability across team members and sprint timelines.
- Software development is a very engaging, fun, and rewarding experience - especially when the product is something that everyone can find a use case for.

