# redmine-ajel


## dependency list
redmine 3.4.11
ruby 2.4.6
rails 4.2.11
postgres 

## commands 

To build a new image:
```
docker-compose build
```

To run this image:
```
docker-compose up
```

To run rake comands:

```
docker-compose run app rake ...
docker-compose run app rake db:migrate
```
