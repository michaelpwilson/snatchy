pipeline {
    agent none

    stages {
        stage('Test') {
            agent {
                docker { image 'node:10.15-alpine' }
            }
            steps {
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}