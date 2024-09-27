# Issues Tracker

This project is a simple Issues Tracker built using FastAPI for the backend and React for the frontend. It allows users to create, read, update, and delete issues.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)

## Technologies Used

- **Backend**: FastAPI
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Database**: In-memory (for demonstration purposes)

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Python 3.7 or higher
- Node.js (version 14 or higher)
- pip (Python package installer)

### Backend Setup (FastAPI)

1. **Clone the repository**:

    ```bash
    git clone https://github.com/sunil-00/issues_tracker.git
    cd issues_tracker
    ```

2. **Create a virtual environment (optional but recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies:**

    ```bash
    pip install fastapi uvicorn
    ```

4. **Run the FastAPI server:**

    ```bash
    uvicorn server:app --reload
    ```

The server should now be running at `http://localhost:8000.`



### Frontend Setup (React)

1. **Navigate to the frontend directory:**

    ```bash
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the React app:**

    ```bash
    npm run dev
    ```

The server should now be running at `http://localhost:5173.`

## API Endpoints

### Issues

- **GET /issues/**
  - Retrieve all issues.
  
- **POST /issues/**
  - Create a new issue.
  - **Request Body**: 
    ```json
    {
      "id": "string",
      "title": "string",
      "description": "string"
    }
    ```

- **GET /issues/{id}**
  - Retrieve a specific issue by ID.

- **PUT /issues/{id}**
  - Update a specific issue by ID.
  - **Request Body**: 
    ```json
    {
      "id": "string",
      "title": "string",
      "description": "string"
    }
    ```

- **DELETE /issues/{id}**
  - Delete a specific issue by ID.

## Running the Application

1. **Start the FastAPI server** by following the backend setup instructions.
2. **Start the React frontend** by following the frontend setup instructions.
3. **Open your browser** and go to `http://localhost:5173` to interact with the application.
