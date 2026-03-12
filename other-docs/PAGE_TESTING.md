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
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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

# 3. Create User Account Page (by Sergio Rojas-Aguilar)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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

# 4. Edit User Account Page (by Sergio Rojas-Aguilar)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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

# 5. Current User Page (by Mike Davis)

## Page Description
- Purpose: Lay out information about the session's current user
- This page provides user information about the current user including things like username, profile picture, teams/tasks they're assigned to, and other things. There will also be top-of-page navigation links to other pages, and buttons in the main body of the page that navigate to edit account

## Mockup
<img src="./images/mike/current-user-page-mockup.png" width="50%"/>

## Parameters Needed for the Page
- Route params: /users/:id
- Query params: none

## Data Needed to Render the Page
### Static Content
- DevDash logo
- Navigation bar (mostly the same on each page)
- Section headings
- CSS styling information
### API Fetches
- Current user object data fields such as username, when joined, profile picture. This enables the rendering of user profile information.
- Join table data through user object's foreign keys. This information enables the rendering of teams and tasks.
### State Parameters
- Authorization of whether this is the current user, the success of which will show more in-depth private information such as tasks and the edit account button

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- **Home** → `/`
- **About** → `/about`
- **Account** → `/account`
- **Edit Account** → `/account/edit`
- **Team** → `/teams/:id`
- **Task** → `/tasks/:id`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - App logo displays
   - Navigation links display and are clickable
   - Profile picture displays
   - 'Edit Account' button displays and is clickable
   - Links to Teams and Tasks display and are clickable
   - Clicking on "Account" in nav bar doesn't reload page, since that is the current page

---

# 6. Other User Page (by Mike Davis)

## Page Description
- Purpose: Lay out information about a user beside the session's current user
- This page provides user information about another user including things like username, profile picture, teams they're assigned to, and other things. There will also be top-of-page navigation links to other pages, as well as a button in the main body of the page to invite them to one or multiple of the current user's teams

## Mockup
<img src="./images/mike/other-user-page-mockup.png" width="50%"/>

## Parameters Needed for the Page
- Route params: /users/:id
- Query params: none

## Data Needed to Render the Page
### Static Content
- DevDash logo
- Navigation bar (mostly the same on each page)
- Section headings
- CSS styling information
### API Fetches
- Other user object data fields such as username, when joined, profile picture. This enables the rendering of user profile information.
- Join table data through user object's foreign keys. This information enables the rendering of teams shared with current user.
### State Parameters
- Authorization of whether this is the current user, the failure of which will limit the information on the page to less-private information.

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- **Home** → `/`
- **About** → `/about`
- **Account** → `/account`
- **Team** → `/teams/:id`
- **Task** → `/tasks/:id`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - App logo displays
   - Navigation links display and are clickable
   - Profile picture displays
   - 'Invite to Team' button displays and is clickable
   - Clicking 'Invite to Team' will reveal another section or a modal window with options of which teams to invite to
   - Links to Teams display and are clickable

---

# 7. Dashboard Page (by Mike Davis)

## Page Description
- Purpose: Lay out the teams the current user is on, with team summary information and burndown chart.
- This page renders the current user's multiple teams, with information summaries about each team's up-to-date name, members, sprints, tasks, and burndown chart. The information in each team section will be fetched from the database. If there is no current user, this will be a mockup of a dashboard a user could create if they signed up to the website.

## Mockup
<img src="./images/mike/dashboard-page-mockup.png" width="50%"/>

## Parameters Needed for the Page
- Route params: none
- Query params: none

## Data Needed to Render the Page
### Static Content
- DevDash logo
- Navigation bar (mostly the same on each page)
- Section headings
- Dividers
- CSS styling information
- Mock dashboard if no current user
### API Fetches
- Join table(s) data for teams, sprints, tasks, team member info, burndown chart; all using a chain of foreign keys starting with the current user.
### State Parameters
- Authorization of whether there is a current user logged in, the failure of which will show a mock dashboard whose data is stored statically in the webpage directory.

## Links Rendered on the Page
(This can include navigation links and other links/buttons)
- **Home** → `/`
- **About** → `/about`
- **Account** → `/account`
- **Team** → `/teams/:id`
- **Sprint** → `/sprints/:id`
- **Task** → `/tasks/:id`

## Tests for Verifying Rendering of the Page
1. **Renders key UI elements**
   - App logo displays
   - Navigation links display and are clickable
   - Team members' profile pictures display
   - Links to Teams display and are clickable
   - Links to Sprints display and are clickable
   - Links to Tasks display and are clickable
   - Shows burndown chart
   - Shows mock dashboard data when there is no current user

---

# 8. Project Page (by Carolina Perez)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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

# 9. Sprint Page (by Carolina Perez)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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

# 10. Task Page (by Andrew MacRossie)

## Page Description
- Purpose: (One-sentence description of basic utility of this page.)
- (Provide a short feature summary so the purpose is clear before authentication.)

## Mockup
(This should be a wireframe drawing of the page. Just do it on paper and take a picture to place here.)

## Parameters Needed for the Page
- Route params: (List any route parameters necessary for navigating to this page. If not necessary, list "none".)
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