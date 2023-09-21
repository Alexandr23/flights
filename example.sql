CREATE TABLE airports(
    airport_code char(3) NOT NULL,
    airport_name text NOT NULL,
    city text NOT NULL,
    longitude float NOT NULL,
    latitude float NOT NULL,
    timezone text NOT NULL,
    PRIMARY KEY (airport_code)
);

CREATE TABLE flights(
    flight_id serial NOT NULL,
    flight_no char(6) NOT NULL,
    scheduled_departure timestamptz NOT NULL,
    scheduled_arrival timestamptz NOT NULL,
    departure_airport char(3) NOT NULL,
    arrival_airport char(3) NOT NULL,
    status varchar(20) NOT NULL,
    aircraft_code char(3) NOT NULL,
    actual_departure timestamptz,
    actual_arrival timestamptz,
    CHECK (scheduled_arrival > scheduled_departure),
    CHECK (
        actual_arrival IS NULL
        OR(
            actual_departure IS NOT NULL ANDactual_arrival IS NOT NULL ANDactual_arrival > actual_departure
        )
    ),
    CHECK (
        status IN (
            'On Time',
            'Delayed',
            'Departed',
            'Arrived',
            'Scheduled',
            'Cancelled'
        )
    ),
    PRIMARY KEY (flight_id),
    UNIQUE (flight_no, scheduled_departure),
    FOREIGN KEY (aircraft_code) REFERENCES aircrafts (aircraft_code),
    FOREIGN KEY (arrival_airport) REFERENCES airports (airport_code),
    FOREIGN KEY (departure_airport) REFERENCES airports (airport_code)
);

CREATE TABLE bookings(
    book_ref char(6) NOT NULL,
    book_date timestamptz NOT NULL,
    total_amount numeric(10, 2) NOT NULL,
    PRIMARY KEY (book_ref)
);

CREATE TABLE tickets(
    ticket_no char(13) NOT NULL,
    book_ref char(6) NOT NULL,
    passenger_id varchar(20) NOT NULL,
    passenger_name text NOT NULL,
    contact_data jsonb,
    PRIMARY KEY (ticket_no),
    FOREIGN KEY (book_ref) REFERENCES bookings (book_ref)
);

CREATE TABLE ticket_flights(
    ticket_no char(13) NOT NULL,
    flight_id integer NOT NULL,
    fare_conditions varchar(10) NOT NULL,
    amount numeric(10, 2) NOT NULL,
    CHECK (amount >= 0),
    CHECK (
        fare_conditions IN ('Economy', 'Comfort', 'Business')
    ),
    PRIMARY KEY (ticket_no, flight_id),
    FOREIGN KEY (flight_id) REFERENCES flights (flight_id),
    FOREIGN KEY (ticket_no) REFERENCES tickets (ticket_no)
);

CREATE TABLE boarding_passes(
    ticket_no char(13) NOT NULL,
    flight_id integer NOT NULL,
    boarding_no integer NOT NULL,
    seat_no varchar(4) NOT NULL,
    PRIMARY KEY (ticket_no, flight_id),
    UNIQUE (flight_id, boarding_no),
    UNIQUE (flight_id, seat_no),
    FOREIGN KEY (ticket_no, flight_id) REFERENCES ticket_flights (ticket_no, flight_id)
);

CREATE TABLE fare_conditions(
    fare_conditions_code integer,
    fare_conditions_name varchar(10) NOT NULL,
    PRIMARY KEY (fare_conditions_code)
);