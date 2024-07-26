
# Online Learning Platform with Live Coding

Welcome to the **Online Learning Platform with Live Coding**! This application provides a comprehensive platform for learning coding and development skills through interactive courses, live coding sessions, coding challenges, and peer reviews.

## Features

- **User Authentication and Profiles**: Secure user registration, login, and profile management.
- **Course Management System**: Browse and explore various coding courses.
- **Live Coding Environment**: Participate in live coding sessions and watch real-time coding demonstrations.
- **Interactive Coding Challenges**: Solve coding challenges to test and improve your skills.
- **Peer Review and Feedback System**: Submit and review coding assignments with peer feedback.

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Live Coding**: Integrated code editor for live coding sessions
- **Authentication**: JSON Web Tokens (JWT) for secure authentication

## Installation

### Prerequisites

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- MongoDB installed and running. [Download MongoDB](https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://github.com/Basu0132/online-learning-platform
cd your-repository-name
Backend Setup
Navigate to the backend directory:

cd backend
Install backend dependencies:

npm install
Create a .env file in the backend directory and add your MongoDB connection string:


MONGO_URI=mongodb://localhost:27017/data
JWT_SECRET=your_jwt_secret
Start the backend server:

npm start
Frontend Setup
Navigate to the frontend directory:

cd ../frontend
Install frontend dependencies:

npm install
Start the frontend development server:

npm start
API Endpoints
GET /api/courses: Retrieve a list of all courses
GET /api/courses/
: Retrieve details of a specific course
POST /api/courses: Add a new course (admin only)
PUT /api/courses/
: Update course details (admin only)
DELETE /api/courses/
: Delete a course (admin only)
Running Tests
You can run tests using:

npm test
Contributing
We welcome contributions to improve the platform! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please reach out to your-email@example.com.

Thank you for using and contributing to the Online Learning Platform with Live Coding!
