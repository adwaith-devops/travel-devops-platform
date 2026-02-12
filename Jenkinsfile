pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Start Services') {
            steps {
                echo 'Starting services using Docker Compose...'
                sh 'docker compose up -d'
            }
        }

        stage('Tests') {
            steps {
                echo 'Running tests...'
                // Add your test commands here if needed
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker containers...'
            sh 'docker compose down'
        }
    }
}

