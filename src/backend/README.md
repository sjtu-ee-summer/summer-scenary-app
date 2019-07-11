# Backend for this project  

This README file is added to prevent duplicate work that might mess up our cloud server

## Done

- Cloned project repository under summer/summer-scenary-app
- Installed Jenkins
- Installed MySQL Docker
- Installed Docker
- Installed Java 1.8 | Java 8
- Installed Maven

## Ongoing

- Configuring Jenkins' Job
- Configuring Jenkins' pipeline

## Pending

- Compile projects' services
- Run project container
- Kubernetes

## Conecting to Server

1. In terminal, create a new file "sshkey3"
2. Run:
```
> chmod 400 sshkey3
> ssh -p 30450 -i sshkey3 ubuntu@202.120.40.8
```
3. Note that external connection can only be used in port range: 30451-30459

## Using MySQL in Docker Container

- Stopping service:
```
> sudo docker stop mysql
```
- Start, Restart service:
```
> sudo docker start mysql
```
- Run service:
user: root
password: 0000
```
> sudo docker exec -it mysql mysql -uroot -p
```

## Using Jenkins

**Jenkins' Credentials**  
URL: http://202.120.40.8:30451/  
Username: admin  
Password: password  

**Freestyle Project**  
Job name: TravelSy  
To run: Modify Jenkinsfile & Build Now  

**Pipeline Project**  
Job name: Travelsy_pipeline  
To run: Build Now

**Pipeline View**
```
> sudo docker image prune -a
> sudo docker images
```  
then  
run in Jenkins' GUI pipeline view

java -jar config-0.0.1-SNAPSHOT.jar 30452 
sudo service mysql start