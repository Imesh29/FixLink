FixLink – Mini Service Request Board

FixLink is a full-stack web application that allows homeowners to post service requests (such as plumbing, electrical, painting, and joinery jobs) and enables tradespeople to browse available jobs, view details, update job statuses, and delete completed requests.

This project was developed as part of a Full-Stack Developer Intern Technical Assessment.

Features
  Create new service requests
  View all job requests
  Filter jobs by category
  View detailed job information
  Update job status (Open, In Progress, Closed)
  Delete job requests
  Responsive and clean user interface
  RESTful API with validation and error handling

Tech Stack
  Frontend
    Next.js 15 (App Router)
    React
    Tailwind CSS
    Axios
  Backend
    Node.js
    Express.js
    MongoDB
    Mongoose

API Endpoints
  
  Get All Jobs
    GET /api/jobs

  Optional query parameters:

    GET /api/jobs?category=Plumbing
    GET /api/jobs?status=Open
  Get Single Job
    GET /api/jobs/:id
  Create New Job
    POST /api/jobs
  Update Job Status
    PATCH /api/jobs/:id
  Delete Job
    DELETE /api/jobs/:id

Run Backend Server
  npm run dev

Backend will run on:

  http://localhost:5000

Run Frontend
  npm run dev

Frontend will run on:

  http://localhost:3000


Available Categories
  Plumbing
  Electrical
  Painting
  Joinery
Status Values
  Open
  In Progress
  Closed

Pages
Home Page

  Displays all job requests with category filtering.

Create New Job

  Form to submit new service requests.

Job Detail Page

  Shows complete job information with status update and delete options.
