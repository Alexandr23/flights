CREATE TABLE airports (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    iata TEXT NOT NULL
);

CREATE TABLE airlines (id SERIAL PRIMARY KEY, name TEXT NOT NULL);

CREATE TABLE flights (
    id SERIAL,
    flight_number TEXT NOT NULL,
    airline_id INT REFERENCES airlines NOT NULL,
    departure_at TIMESTAMP WITH TIME ZONE NOT NULL,
    departure_city TEXT NOT NULL,
    departure_airport_id INT REFERENCES airports NOT NULL,
    arrival_at TIMESTAMP WITH TIME ZONE NOT NULL,
    arrival_city TEXT NOT NULL,
    arrival_airport_id INT REFERENCES airports NOT NULL
);

INSERT INTO
    airports(id, name, iata)
VALUES
    (1, 'Dubai International Airport', 'DXB'),
    (2, 'Al Maktoum International Airport', 'DWC'),
    (3, 'Abu Dhabi International Airport', 'AUH'),
    (4, 'Al Dhafra Air Base', 'DHF'),
    (5, 'Istanbul New Airport', 'IST');

INSERT INTO
    airlines(id, name)
VALUES
    (1, 'Emirates'),
    (2, 'FlyDubai');

INSERT INTO
    flights(
        id,
        flight_number,
        airline_id,
        departure_at,
        departure_city,
        departure_airport_id,
        arrival_at,
        arrival_city,
        arrival_airport_id
    )
VALUES
    (
        '1',
        'EK121',
        1,
        '2022-03-04T10:45:00.000Z',
        'Dubai',
        1,
        '2022-03-04T14:25:00.000Z',
        'Istanbul',
        5
    ),
    (
        '2',
        'EK122',
        1,
        '2022-03-04T14:20:00.000Z',
        'Dubai',
        1,
        '2022-03-04T17:55:00.000Z',
        'Istanbul',
        5
    ),
    (
        '3',
        'EK123',
        1,
        '2022-03-04T18:00:00.000Z',
        'Dubai',
        1,
        '2022-03-04T21:35:00.000Z',
        'Istanbul',
        5
    ),
    (
        '4',
        'EK124',
        2,
        '2022-03-04T18:00:00.000Z',
        'Dubai',
        1,
        '2022-03-04T21:35:00.000Z',
        'Istanbul',
        5
    ),
    (
        '5',
        'EK125',
        1,
        '2022-03-04T11:30:00.000Z',
        'Dubai',
        1,
        '2022-03-04T12:15:00.000Z',
        'Istanbul',
        5
    ),
    (
        '6',
        'EK126',
        1,
        '2022-03-04T22:30:00.000Z',
        'Dubai',
        1,
        '2022-03-04T23:40:00.000Z',
        'Istanbul',
        5
    ),
    (
        '7',
        'EK127',
        1,
        '2022-03-04T18:00:00.000Z',
        'Dubai',
        1,
        '2022-03-04T21:35:00.000Z',
        'Istanbul',
        5
    ),
    (
        '8',
        'EK128',
        1,
        '2022-03-04T12:35:00.000Z',
        'Dubai',
        1,
        '2022-03-04T14:23:00.000Z',
        'Istanbul',
        5
    ),
    (
        '9',
        'EK129',
        1,
        '2022-03-04T22:34:00.000Z',
        'Dubai',
        1,
        '2022-03-05T01:34:00.000Z',
        'Istanbul',
        5
    ),
    (
        '10',
        'EK130',
        2,
        '2022-03-04T22:00:00.000Z',
        'Istanbul',
        2,
        '2022-03-05T02:00:00.000Z',
        'Dubai',
        3
    );