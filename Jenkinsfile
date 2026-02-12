pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker-compose build'
            }
        }

        stage('Start Services') {
            steps {
                echo 'Starting Docker containers...'
                sh 'docker-compose up -d'
            }
        }

        stage('Tests') {
            steps {
                echo 'Running tests...'
                // Add test commands if you have any, e.g., API tests
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker containers...'
            sh 'docker-compose down'
        }
    }
}
