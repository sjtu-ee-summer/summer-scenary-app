# Backend for this project  

This README file is added to prevent duplicate work that might mess up our cloud server

## Done

- Cloned project repository under summer/summer-scenary-app
- Installed Jenkins
- Installed MySQL Docker
- Installed Docker
- Installed Java 1.8 | Java 8
- Installed Maven
- Configuring Jenkins' Job
- Configuring Jenkins' pipeline

## Ongoing

*All done*

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

**Pipeline View**
```
> sudo docker image prune -a
> sudo docker images
```

## Using native MySQL  
username: root  
password: 0000  

```
> sudo service mysql start
> mysql -uroot -p
```

## Copy configuration file from git repo to config-server-repo
```
> git pull
> cd into config-server-repo
> cp * ~/summer/config-server-repo/ 
```

## Run microservices

To run in background:  
```
> cd summer/project
> nohup java -jar ?-0.0.1-SNAPSHOT.jar &
```

To get the running processes:  
```
> ps aux | grep java
> kill -9 PID
```

## Redis server

host & port: 127.0.0.1:6379
run: > redis-cli