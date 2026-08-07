pipeline {
    agent any

    stages {
        stage('Deploy Code') {
            steps {
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r ./* /var/www/html/
                    sudo chown -R www-data:www-data /var/www/html
                    sudo find /var/www/html -type d -exec chmod 755 {} \\;
                    sudo find /var/www/html -type f -exec chmod 644 {} \\;
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
