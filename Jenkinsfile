
pipeline {
    agent any

    tools {nodejs "Node"}

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
                bat 'npm install lambdatest-cypress-cli'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress:lambda'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

