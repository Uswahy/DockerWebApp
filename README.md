# DockerWebApp
🚀 Dockerized Node.js Web App

DockerWebApp is a basic Node.js web application designed to demonstrate containerization using Docker and service orchestration with Docker Compose. The application runs an Express server that responds with a simple "Hello" message in the browser. It is configured to expose port 3000 inside the container and map it to a custom port on the host machine, making it accessible via the browser. This project serves as a beginner-friendly example of how to build, run, and manage a Node.js app using modern container tools.

📂 Project Structure

DockerWebApp/

├── app.js

├── package.json

├── Dockerfile

├── docker-compose.yml

└── .dockerignore

Before running this project, ensure you have:

✅ Docker Desktop installed and running
✅ Node.js installed (optional, only if testing outside Docker)


🚀 Running the App with Docker Compose on cmd,shell

✅  copy the Git Repository path
https://github.com/Uswahy/DockerWebApp.git

✅ make folder GitRepo
now, write this on your shell or cmd

cd ~/Downloads/GitRepo> git clone https://github.com/Uswahy/DockerWebApp.git

cd ~/Downloads/GitRepo/DockerWebApp> 

cd ~/Downloads/GitRepo/DockerWebApp> docker-compose up --build

✅Access the App in Browser:

http://localhost:4000
