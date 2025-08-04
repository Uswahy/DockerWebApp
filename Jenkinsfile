pipeline {
    agent any

    environment {
        IMAGE_NAME = 'uswahy/dockerwebapp'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Uswahy/DockerWebApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name my_web_app %IMAGE_NAME%'
            }
        }
    }

    post {
        always {
            bat 'docker stop my_web_app || exit 0'
            bat 'docker rm my_web_app || exit 0'
        }
    }
}

