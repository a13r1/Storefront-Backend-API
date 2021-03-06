create table orders (
    id serial primary key,
    product_id int not null,
    quantity int not null,
    user_id int not null,
    status varchar(8) not null,
    foreign key(product_id) references products(id) on delete cascade on update cascade,
    foreign key(user_id) references users(id) on delete cascade on update cascade
);
