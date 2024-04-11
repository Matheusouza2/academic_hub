install:
	composer update
reload:
	composer dump
server:
	php artisan serve
list:
	php artisan list
env:
	cp .env.example .env
generate: env
	php artisan key:generate
up-db:
	docker start mysql
create-db:
	docker run --name mysql -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:latest
db-create:
	docker exec -it mysql mysql -u root -p -e "create database academic_hub;"
db:
	docker exec -it mysql bash -c "mysql -u root --password=12345678 academic_hub"
up: up-db server
