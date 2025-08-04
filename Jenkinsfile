pipeline {
    agent any

    environment {
        IMAGE_NAME = 'uswahy/dockerwebapp' // Replace with your DockerHub repo if needed
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Uswahy/DockerWebApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name my_web_app $IMAGE_NAME'
            }
        }

        // Optional: Push to DockerHub
        // stage('Push to DockerHub') {
        //     steps {
        //         withCredentials([string(credentialsId: 'dockerhub-password', variable: 'DOCKER_PASS')]) {
        //             sh "echo $DOCKER_PASS | docker login -u uswahy --password-stdin"
        //             sh "docker push $IMAGE_NAME"
        //         }
        //     }
        // }
    }

    post {
        always {
            sh 'docker stop my_web_app || true'
            sh 'docker rm my_web_app || true'
        }
    }
}
