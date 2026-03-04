# WEEKLY_STATUS.md
## Project Milestone 3: Weekly Status Report

**Project:** Agile Flow  
**Team Number:** 9  
**Team Name:** DevDash 

---

## Reporting Period
**Week:** 3  
**Meeting Held:** Yes   
**Meeting Date:** March 1,2026  
**Meeting Duration:** 30 minutes - 1hr  
**Meeting Format:** Discord     

---

## Overview


   This document captures the **weekly status** of the Agile Flow project for the specified reporting period. It is intended to provide a **concise snapshot** of progress, plans, and risks, and will be updated weekly throughout the project.



---

## Project Management Snapshot


   The team is using a shared **Jira board** to manage tasks and sprint progress. At the time of this report:
    - Columns include: 
    - Tasks are assigned to individual team members
    - Due dates and priorities are tracked per task

  Snippets of this weeks jira:
  <img width="2000" height="1200" alt="image" src="https://github.com/user-attachments/assets/a437782e-6d47-4353-9eef-8689cab2383d" />
  <img width="500" height="350" alt="image" src="https://github.com/user-attachments/assets/1aed2d08-d531-48b8-9c2d-c32f9621c403" />



---

## Progress Since Last Week

**Sergio Rojas-Aguilar:**

- This week, the I focused on test deployment and file structure of a flask Server. Deployment on render and simple class creation for python. Research into good sql database ([neon.com](https://neon.com/)). Type hinting and vscode setting to allow error from IntelliSense.
    - https://github.com/Sergrojas29/PythonRenderTest
    - https://pythonrendertest.onrender.com/api/test
    - https://pythonrendertest.onrender.com/ 

- Major research and sample for python classes for OOP. (added some interesting differences).
    -  python don't have private and public member function.
    -  Python uses class and more recently in python 3 @Dataclasses as data structs
   -   Class variables are declared in the constructor _ _init_ _(self). Any other variable is consindered a static class variable. 
  - static methods need @staticmethod decorator
    -  class memeber are not inmuttable. can added memebers to Instance on the fly

**Michael Davis:** 

- Started thinking ahead on how to build classes and methods for the back end of Agile Flow.
- Got more familiar with what our end product will look like, and where we should draw the line for an MVP.

**Carolina Perez:** 

-  This week i focused on refamiliarizing myself with OOPs in Python, Class Structures and looking into Render for project deployment, as well as getting everything set up for this week project milestone and meeting since I am the scrum master.  
      -   I did suggest that we use the Pydantic package on python to help with the structures of our python files in place of __init__.
      -  Updated the tickets and wrote the meeting plan, and created new tickets for this week.
      -   Scrum Master for the meeting, helped the team disscuss their progress and come to terms with what we wanted to get done this net sprint.
      -  Working on UI wireframe based off teams suggestions.

**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- Became familiar with the vision behind this project and familiarized myself with the burndown chart that we are seeking to model


---

## Completed Tasks

**Sergio Rojas-Aguilar:**

- Comleted Assigned Team Task (jira include more informaiton):
    - Environment Setup
    - Research OOP in Python
    - Research Deployment on Render.com
- Completed Persoanl Task:
    - Simple API with flask
    - Deploy to flask using render
    - Research Class and File Structure in python



**Michael Davis:** 

- Set Up Environment: Installed Python and Node.js
- Researched OOP in Python: Watched through an overview video on Python OOP, and did some practice

**Carolina Perez:** 

- Updated Jira up to this weeks sprint 
- Defined MVP feature scope - projects user, task and sprint 
- Looked into OOPs and simple API with flask ad well as class structures in python
- Started looking up structure for the backend.
  

**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- Configured Python, Flask, and NodeJS into environment for future development. 
- Set up environment, had first meeting with the team, reviewed tech stack with Sergio


---

## Planned Tasks for Next Week


**Sergio Rojas-Aguilar:**

- Assigned Team Task (Jira includes more information):
    - Research Python File Structure
    - Explore Data Structures in Python
    - DB Schema - mock-up
- Personal Task:
    - Using PostgreSQL, create a test database on neon.com.
    - Expand the test Render API to connect to the Neon DB
    - Research and use the Python PostgreSQL framework.
    - Add project-focused OOP to test the API on render


**Michael Davis:** 

- Build DB Relationships: Create database diagram and rough schema for the project, with 4 data models (user, project, sprint, task)

**Carolina Perez:** 
- Create rough draft of the UI wireframe
- Familiarize myself more with the techstack
- DB Schema - mock-up
  
**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- Construct an ERD to illustrate necessary tables and relationships within the database. 




---

## Blockers and Issues

**Sergio Rojas-Aguilar:**

- Blockers and Issues : At the moment I don't see any blockers or issues. Currently allowing everyone to mock up and test at their own pace. This will allow everyone to understand the basics of our project.


**Michael Davis:** 

- The only issue I see potentially coming up is ability to get the tasks done earlier in the week as opposed to in the 24 hours before the meeting.

**Carolina Perez:** 

- No blockers with me at this time, ths upcoming week we will come together as a team and discuss our findings 

**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- No current blockers or issues at this time



---

## Risks and Mitigation



**Sergio Rojas-Aguilar:**

- *Identified Risk:* Risk could come if one or more are not able to create an SQL mock and will lag behind in the base knowledge of our projects database.
- *Mitigation:* The documentation on Jira created by Carolina based on our meeting is extremely clear if anyone is confused on the initial mock schema for this project.

**Michael Davis:** 

-- *Identified Risk:* There could be potentially very different interpretations of how our relational database should be built.
- *Mitigation:* We will all be able to compare our database diagrams and bridge the gap.

**Carolina Perez:** 

- *Identified Risk:* Different points of understnading the tech stack.
- *Mitigation:* Disscussions and communcation as a team will help us help each other grow as developers!

**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- Sample Risk: ERD models might differ greatly between team members, requiring further discussion to agree on a model
- Sample Mitigation: Dedicate a meeting to establishing an agreed upon ERD for use in the project


---

## Team Reflection


The Team has gotten better as a team when it comes to discussion. The team has improved on
   - setting clear expectations for the sprint, with delieverables,
   - keeping our discussion shorter
   - sharing ideas and staying on topic during the meeting
   - asking questions if understanding is not consistent
     
The team could work on:
   - consistent participation and communication from the entire group
   - being interactive on the jira board
   - time management
   - accountability



---

## Individual Contributions This Week

**Sergio Rojas-Aguilar:**

- Initial Jira creation tasks for initial week as scum master
- Creation of [Figma White Board](https://www.figma.com/board/8n7cFnRBbC0CtSv0sO0taG/User-Stories--Community-?t=LKsH3UYiRODAbSJv-0) template for:
    * User Stories
    * MoSCoW Board
    * PLannig Poker
  


**Michael Davis:** 

- Added Sprint 1 and 2 tasks to Jira;
- Set up personal environment for project development
- Researched Python OOP

**Carolina Perez:** 

- Adding Meeting Notes and Sprint 2 detailed tickets
- scrum master for the meeting
- Comppleted sprint 1 tasks from the previous week 

**Erick Samayoa:** 

-

**Andrew MacRossie:** 

- Reviewed current documentation for project plan, 
- set up personal environment
- researched Render and OOP in Python   


---

## Notes and Etiquette

**This document is to be finished by 11:59 PM MT on Sunday, the night of the relevant Scrum Meeting.**

**Each team member will be responsible to update their individual contributions.**
This file will be updated weekly as the project progresses.  
Earlier weekly entries may be retained below or moved to an archive directory if the file grows large.
