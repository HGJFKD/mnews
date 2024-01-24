-- ./server/db/init.sql
CREATE DATABASE mns;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    userid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    permissions VARCHAR(50) CHECK (
        permissions IN (
            'director',
            'sales Agent',
            'chief graphic artist',
            'sub graphic designer'
        )
    )
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create Newspapers table
CREATE TABLE newspapers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    pages INT NOT NULL,
    publication_date DATE NOT NULL,
    sum_of_Pages INT DEFAULT 128,
    occupancy INT,
    sa_revenue NUMERIC,
    newspaper_type VARCHAR(20) REFERENCES global_properties_of_newspaper_type(type) NOT NULL,
);

-- Create Global Properties of Newspaper_Type
CREATE TABLE global_properties_of_newspaper_type (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) CHECK (
        type IN ('weekly', 'holiday', 'annual', 'special')
    )
);

-- Insert Rows into Global Properties of Newspaper_Type
INSERT INTO
    global_properties_of_newspaper_type (size)
VALUES
    ('weekly'),
    ('holiday'),
    ('annual'),
    ('special');

-- Create Global Properties of Size table
CREATE TABLE global_properties_of_size (
    id SERIAL PRIMARY KEY,
    size VARCHAR(20) CHECK (
        sum_of_Pagesize IN (
            'gate',
            'back',
            'double',
            'page',
            'half',
            'quarter',
            'eighth',
            'half past eight',
            'needed'
        )
    )
);

-- Insert Rows into Global Properties of Size table
INSERT INTO
    global_properties_of_size (Size)
VALUES
    ('gate'),
    ('back'),
    ('double'),
    ('page'),
    ('half'),
    ('quarter'),
    ('eighth'),
    ('half past eight'),
    ('needed');

-- Create Global Characteristics of Order Status table
CREATE TABLE global_characteristics_of_order_status (
    ID SERIAL PRIMARY KEY,
    status VARCHAR(50) CHECK (
        status IN (
            'main graphic artist',
            'happy',
            'comes ready',
            'assistant graphic designer',
            'editorial board',
            'waiting for update',
            'has not arrived yet',
            'republishing',
            'cancelled',
            'sending materials',
            'waiting for approval',
            'requested change'
        )
    )
);

-- Insert Rows into Global Characteristics of Order Status table
INSERT INTO
    global_characteristics_of_order_status (status)
VALUES
    ('main graphic artist'),
    ('happy'),
    ('comes ready'),
    ('assistant graphic designer'),
    ('editorial board'),
    ('waiting for update'),
    ('has not arrived yet'),
    ('republishing'),
    ('cancelled'),
    ('sending materials'),
    ('waiting for approval'),
    ('requested change');

-- Create Price List table
CREATE TABLE price_List (
    newspaper_type VARCHAR(20) REFERENCES global_properties_of_newspaper_type(type) NOT NULL,
    gate NUMERIC NOT NULL,
    back NUMERIC NOT NULL,
    double NUMERIC NOT NULL,
    page NUMERIC NOT NULL,
    half NUMERIC NOT NULL,
    quarter NUMERIC NOT NULL,
    eighth NUMERIC NOT NULL,
    half_an_eighth NUMERIC NOT NULL,
    wanted NUMERIC NOT NULL
);

-- Create Orders table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id UUID REFERENCES Customers(id) NOT NULL,
    size_id INT REFERENCES global_properties_of_size(id) NOT NULL,
    publication_date DATE NOT NULL,
    price NUMERIC,
    location NUMERIC NOT NULL,
    status INT REFERENCES global_characteristics_of_order_status(status) NOT NULL,
    handler_agent TEXT NOT NULL,
    document_upload BYTEA
);

-- Create Customers table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone INT NOT NULL,
    category VARCHAR(20) CHECK (category IN ('regular', 'business')),
    Ddiscount NUMERIC
);

-- Create global permission setting table
CREATE TABLE global_permission_setting (
    permissions VARCHAR(50) CHECK (
        permissions IN (
            'director',
            'sales agent',
            'chief graphic artist',
            'sub graphic designer'
        )
    ),
    add_or_edit_costumer BOOLEAN,
    discounts BOOLEAN,
    add_order BOOLEAN,
    edit_or_delete_order BOOLEAN,
    add_edit_user BOOLEAN,
    add_edit_newspaper BOOLEAN
);

INSERT INTO
    global_permission_setting (
        Permissions,
        add_or_edit_costumer,
        discounts,
        add_order,
        edit_or_delete_order,
        add_edit_user,
        add_edit_newspaper
    )
VALUES
    ('director', true, true, true, true, true, true),
    ('sales Agent', true, true, true, true, false, false),
    ('chief graphic artist', true, false, true, true, false, false),
    ('sub graphic designer', false, false, false, true, false, false);