create table
    users (
        id serial primary key,
        name text not null,
        email text not null,
        password text
    );
create table
    user_details (
        user_id int not null references Users (id),
        phone_no text not null,
        address text not null
    );
create table
    categories (
        id serial primary key,
        category_name text not null
    );
create table
    product_details (
        id serial primary key,
        name text not null,
        description text,
        price float not null,
        sku textnot null,
        category_id int not null references categories (id)
    );
create table
    orders (
        id serial primary key,
        ordered_user_id int not null references users (id),
        order_address text not null,
        total_count int,
        total_cost float
    );
create table
    order_details (
        id serial primary key,
        order_id int not null references orders (id),
        product_id int not null references product_details (id),
        product_count int not null
    );