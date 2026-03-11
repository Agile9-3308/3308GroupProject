# PAGE_TESTING.md

This document defines the **pages** AgileFlow will implement and what is required to (1 render them correctly and (2) test them consistently.

At least **5 independent pages** are included below.

---

## Conventions Used in This Document

### Parameter Types
- **Route params**: values embedded in the URL path (e.g., `/groups/:groupId`)
- **Query params**: values after `?` in the URL (e.g., `?tab=tasks`)
- **State params**: values passed through navigation state (optional; avoid for critical data)

### Data Types
- **Auth state**: current user identity + session token
- **API data**: data fetched from backend services
- **UI state**: transient values like form fields, selected filters, toggles

### Mockups
Each page includes a **low-fidelity mockup** (ASCII wireframe). Teams may replace these with hand-drawn screenshots later.

---

# 1. Landing Page (by Erick Samayoa)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for naivgating to this page. If not necessary, list "none".)
- Query params: (List necessary query parameters that should be included in URL. If not necessary, list "none".)

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- (Auth of current user? Otherwise "none")

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- Example: **Log In** → `/login`
- Example: **Sign Up** → `/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Log In and Sign Up buttons are visible and clickable
2. **Redirect behavior for authenticated users** (if necessary)
   - Example: If user is logged in, navigating to `/` redirects to `/dashboard`
3. **Redirect query param**
   - Example: Visiting `/?redirect=/groups/123` and clicking Log In should preserve redirect intent (either via query or state)

---

# 2. Login Page (by Sergio Rojas-Aguilar)

## Page Description
- Purpose: Allows existing users to log in to the application using their credentials.

- Functionality: Authenticates the user and establishes a session before redirecting them to the main dashboard.

## Mockup

<img width="1540" height="900" alt="image" src="./Images/SRA_LOGIN_WireFrame-01.jpg" />

## Parameters Needed for the Page
- Route params: /login

- Query params: Optional redirect parameter (e.g. /login?redirect=/dashboard)

## Data Needed to Render the Page
### Static Content
- Application title / logo

- Login form

   - Email or Username input

   - Password input

- Log In button

- Sign Up link

### API Fetches

- **POST** /api/auth/login

   - Authenticates the user credentials
   - Returns session token or authentication status

### State Parameters

- Authentication state
- Login form input state
- Login error state (invalid credentials, server error)

## Links Rendered on the Page

- **Sign Up** → `*/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**

- Application title or logo is visible
- Email/Username and Password input fields render
- Log In button is visible and clickable
- Sign Up link is visible

2. **Form interaction**
- User can type into input fields
- Login button submits form

3. **Authentication behavior**
- Valid credentials redirect user to /dashboard
- Invalid credentials show an error message

4. **Redirect behavior for authenticated users**
- If a user is already logged in, navigating to /login redirects to /dashboard


---

# 3. Create User Account Page (by Sergio Rojas-Aguilar)

## Page Description
- Purpose: Allows new users to create an account for the application.
- Collects required registration information, validates input, and creates a new user account.

## Mockup
<img width="1540" height="900" alt="image" src="./Images/SRA_SIGNUP_WireFrame-02.jpg" />

## Parameters Needed for the Page
- Route params: /signup
- Query params: None

## Data Needed to Render the Page
### Static Content
**Application title / logo**
- Registration form fields:
   - Username
   - Email
   - Password
   - Confirm Password
- Create Account button
### API Fetches
- POST: /api/users
   - Create NEW User
### State Parameters
- Form input state
- Form validation state
- Account creation status (success / failure)
- Error messages

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Application title is visible
   - All required input fields render
   - Create Account button is visible
2. **Redirect behavior for authenticated users** (if necessary)
   - Invalid inputs display validation errors
   - Password confirmation must match 
3. **Successful account creation**
   - Submitting valid form data creates a new user
   - User is redirected to /login or /dashboard
4. **Access behavior**
   - Page is typically accessed from the login page
   - Already authenticated users may be redirected to /dashboard
---

# 4. Edit User Account Page (by Sergio Rojas-Aguilar)

## Page Description
- Purpose: Allows authenticated users to update their account information.
- Functionality: Users can modify their profile details such as username, email, or password.

## Mockup
<img width="1540" height="900" alt="image" src="./Images/SRA_EDIT_ACCOUNT_WireFrame-03.jpg" />

## Parameters Needed for the Page
- Route params: /account/edit
- Query params: None

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- Application title
- Editable user account form
   - Username
   - Email
   - Password (optional change)
   - Confirm Password
- Save Changes button

## Links Rendered on the Page
**GET:** /api/users/me
   - Retrieves the current user's account information

**PUT:** /api/users/me
   - Updates the user account information

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - User account fields populate with current data
   - Save Changes button is visible
2. **Redirect behavior for authenticated users** (if necessary)
   - User can modify editable fields
   - Validation occurs on submit
3. **Update behavior**
   - Valid changes update the user account
   - Success message appears after update
4. **Authentication requirement**
   - If the user is not authenticated, redirect to /login
---

# 5. Current User Page (by Mike Davis)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for naivgating to this page. If not necessary, list "none".)
- Query params: (List necessary query parameters that should be included in URL. If not necessary, list "none".)

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- (Auth of current user? Otherwise "none")

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- Example: **Log In** → `/login`
- Example: **Sign Up** → `/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Log In and Sign Up buttons are visible and clickable
2. **Redirect behavior for authenticated users** (if necessary)
   - Example: If user is logged in, navigating to `/` redirects to `/dashboard`
3. **Redirect query param**
   - Example: Visiting `/?redirect=/groups/123` and clicking Log In should preserve redirect intent (either via query or state)

---

# 6. Other User Page (by Mike Davis)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for naivgating to this page. If not necessary, list "none".)
- Query params: (List necessary query parameters that should be included in URL. If not necessary, list "none".)

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- (Auth of current user? Otherwise "none")

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- Example: **Log In** → `/login`
- Example: **Sign Up** → `/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Log In and Sign Up buttons are visible and clickable
2. **Redirect behavior for authenticated users** (if necessary)
   - Example: If user is logged in, navigating to `/` redirects to `/dashboard`
3. **Redirect query param**
   - Example: Visiting `/?redirect=/groups/123` and clicking Log In should preserve redirect intent (either via query or state)

---

# 7. Dashboard Page (by Mike Davis)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for naivgating to this page. If not necessary, list "none".)
- Query params: (List necessary query parameters that should be included in URL. If not necessary, list "none".)

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- (Auth of current user? Otherwise "none")

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- Example: **Log In** → `/login`
- Example: **Sign Up** → `/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Log In and Sign Up buttons are visible and clickable
2. **Redirect behavior for authenticated users** (if necessary)
   - Example: If user is logged in, navigating to `/` redirects to `/dashboard`
3. **Redirect query param**
   - Example: Visiting `/?redirect=/groups/123` and clicking Log In should preserve redirect intent (either via query or state)

---

# 8. Project Page (by Carolina Perez)

## Page Description
### Purpose: Overview of a specific project and the sprints,tasks,users and information that are associated with it. 
- Displaying the burndown chart of a project, as well as divding the sprints into three tiers: Current, Upcoming, Past/Archived based on end date of the sprint.
- User is able to see other team members and be able to go to their own user page, projects list page, burndown chart editing page and sprints page from this page.
- User or Viewer should get good sense of the progress of the project and track progress.
- if NO DATA present, then the user will get an error page and a button to redirect ot the projects page

## Mockup
<img width="900" height="500"  alt="image" src="https://github.com/user-attachments/assets/5dc55aca-d365-46a2-93f1-847545f83ff7" />
<img width="900" height="500"  alt="image" src="https://github.com/user-attachments/assets/3b530f23-6773-4e17-8ef8-3a030c222b70" />


## Parameters Needed for the Page
- Route params: project_id -> projects/project_id 
- Query params: none

## Data Needed to Render the Page
### Static Content
- the page content it self -> the text
- the boxes with the content
- user icon
- page title
- table layout without the data
- buttons(back arrow)
- dropdown arrow
     - default dropdowns (Current is default to open and the others are defaulted to close)
- style scheme the group decides  on that will be uniform throughout
### API Fetches
- GET /api/projects/project_id (project details) 
- project name
- project sprints
- project members
- burndown chart and its story points
- sprint info(end date, created at, points, status, priority)
- current, upcoming and past info(end date based)
### State Parameters
- Auth state of the current user 

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
-  **Projects Page** → `/projects`
-  **Sprints Page** → `/sprints`
-  **User Page** → `/user/:user_id`
-  **Burndown Chart Page** → `projects/:project_id/burndown_chart`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Project Name, icons, and boxes are displayed
   - interactive elements work onClick()
   - Members Tab appears onClick or onMouseEnter() - whichever we decide
   - Empty state tests(no sprints allocated to a project)
2. **Redirect behavior for authenticated users** (if necessary)
   - If user is logged in, navigating to `/user` redirects to `/user/user_id` through user button
   - If user clicks back arrow redirects to `/projects`
   - if user clicks sprint text they will get redirected to `/sprint_id`
3. **Redirect query param**
   - N/A

---

# 9. Sprint Page (by Carolina Perez)

## Page Description
- Purpose: his page displays tasks associated with a specific sprint and allows the user to view task details, sort tasks, and edit sprint information such as description, dates, and new tasks
- The user will be shown details of a specific sprint, along with being able to add and sort tasks, view task details and add sprint details such as description, dates and new tasks
- If NO DATA then user will be shown an "error - sprint not found" 

## Mockup
<img width="1540" height="900" alt="image" src="https://github.com/user-attachments/assets/1c646a9d-3223-4e0e-a518-4d0a0803dda1" />


## Parameters Needed for the Page
- Route params: sprint_id, project_id
- Query params: for the sort by function -> `//projects/:project_id/sprints/:sprint_id?sort=due_date` whatever we are sorting the tasks by.

## Data Needed to Render the Page
### Static Content
- table headers(col name) 
- edit pencil icon
- sort dropdown
- add task icon
- buttons (user and sort by button)
- text and outline boxes
- style schema
### API Fetches
- GET /api/projects/:project_id/sprints/:sprint_id
- GET task information such as due date, created at etc
- sprint info such as sprint number
- project name related to sprint
### State Parameters
- Auth of current user
- selected sort parameter

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- **User Page** → `/user/:user_id`
- **Project Page** → `/project/:project_id`
- **Task Page** → `/:task_id`
- **Add Task Button** → opens task creation modal

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Buttons are visible and clickable
   - icons are visible and clickable
   - checkboxes are interactive
   - format is displayed
2. **Redirect behavior for authenticated users** (if necessary)
   - If user is logged in, navigating to `/user` redirects to their user page
   - If user clicks projects name they will be redirected to `/projects/project_id` to see the other tasks
   - If the user clicks onthe task text they will be taken to `/tasks/task_id`  for further information on that task
3. **Redirect query param**
   - Visiting `/sprint_id?sort=due_date` will sort the task in order of Due Date and so on for Priority and Assignee

---

# 10. Task Page (by Andrew MacRossie)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for naivgating to this page. If not necessary, list "none".)
- Query params: (List necessary query parameters that should be included in URL. If not necessary, list "none".)

## Data Needed to Render the Page
### Static Content
- (List these contents.)
### API Fetches
- (List these or write "none")
### State Parameters
- (Auth of current user? Otherwise "none")

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- Example: **Log In** → `/login`
- Example: **Sign Up** → `/signup`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - Example: App title displays
   - Example: Log In and Sign Up buttons are visible and clickable
2. **Redirect behavior for authenticated users** (if necessary)
   - Example: If user is logged in, navigating to `/` redirects to `/dashboard`
3. **Redirect query param**
   - Example: Visiting `/?redirect=/groups/123` and clicking Log In should preserve redirect intent (either via query or state)
