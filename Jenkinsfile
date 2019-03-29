pipeline {
    agent none

    stages {
        stage('Test') {
            agent {
                docker { image 'node:10.15-alpine' }
            }
            steps {
                sh "npm install"
                sh "npm test"
            }
        }
        stage('Deploy') {
            agent { dockerfile true }
            steps {
                echo 'Deploying....'
            }
        }
    }
}