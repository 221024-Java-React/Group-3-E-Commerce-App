# Add environment variables

DB_URL : jdbc:postgresql://localhost:5432

DB_USERNAME: admin

DB_PASSWORD: admin

# PostgreSQL

- create a database with the name ecommerce
- create a username admin and password admin for the ecommerce database

# Git Steps

- pull everything from github : git pull or git pull url (if you didn't add the git url as origin)
- create a new branch on the local machine
- work on the feature inside the new branch
- test everything is working
- commit the changes
- from main branch : git merge your-branch
- git push  main or git push url main (if you didn't add the git url as origin)

# Insert Products for Testing

insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 1 description','',CURRENT_DATE, 10.0, 10, 'title 1', 1);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 2 description','',CURRENT_DATE, 11.0, 11, 'title 2', 2);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 3 description','',CURRENT_DATE, 120.0, 12, 'title 3', 3);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 4 description','',CURRENT_DATE, 130.0, 13, 'title 4', 4);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 5 description','',CURRENT_DATE, 150.0, 14, 'title 5', 1);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 6 description','',CURRENT_DATE, 140.0, 15, 'title 6', 2);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 7 description','',CURRENT_DATE, 160.0, 16, 'title 7', 3);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 8 description','',CURRENT_DATE, 170.0, 17, 'title 8', 4);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 9 description','',CURRENT_DATE, 180.0, 18, 'title 9', 2);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 10 description','',CURRENT_DATE, 190.0, 19, 'title 10', 3);
insert into product (description, image,modified_date,price, quantity,title,category_id) values('product 11 description','',CURRENT_DATE, 99.0, 2, 'title 11', 4);
