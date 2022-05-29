# AttendFlix
This web application is an attendance tracking application with facial recognition technology. It uses faceApi.js.
The welcome page of the website allows the user to sign up or sign in. In the sign up page, it also asks whether the user is lecturer or student.
It has different versions for Lecturer and for Student.
Lecturer can create a course, create Attendance, accept or kick a student from course and can also close transactions for an attendance. They can also see stats of attendance as well as attendees and absentees for a particular class

Students have to first upload their picture(From disk or webcam) for face recognition in face galary.On successful recognition their face descriptor will be generated and they can save their picture in course gallery. Students can join a course through Course ID and go to attendance room and see the Attendance list where they can see history of their attendance and also give attendance through facial recognition for newly created attendance.They can also see stats of attendance

Users can also edit their profile.

Technologies used in this application are:
1.React
2.HTML+CSS
3.Javascript + NodeJS

Also MongoDB and Cloudinary are used for cloud storage.

## Getting Started
### Requirement
1. You will need a dependency managers such as npm, yarn, brew, etc.
2. I am using npm.
3. Download and install NodeJS if not exist: https://nodejs.org/en/download/


### Step 1: Download the source code


### Step 2: Install the dependency
1. Open project in Visual Studio Code or any IDE.
2. Open CMD in VSCode, change directory to "client" folder and install the dependency [command: cd client && npm i]
3. Open another terminal, change directory to "server" folder and install the dependency [command: cd server && npm i]



## Running the application
### Server
1. Install the "nodemon" which can restart the server script automatically if changes are detected.
2. Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
3. Open CMD under directory "server", type "npm run dev".
4. The server is running on http://localhost:4000.

### Client
1. The client script is built using ReactJS.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

---

