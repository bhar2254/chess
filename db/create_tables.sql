DROP TABLE IF EXISTS positions;
CREATE TABLE positions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fen TEXT UNIQUE NOT NULL,
    name TEXT,
    short_name TEXT,
    description TEXT,
    short_description TEXT,
    white_plan TEXT,
    black_counterplay TEXT,
    source TEXT,
    tags TEXT
);

DROP TABLE IF EXISTS puzzles;
CREATE TABLE puzzles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fen TEXT UNIQUE NOT NULL,
    name TEXT,
    short_name TEXT,
    description TEXT,
    short_description TEXT,
    source TEXT,
    tags TEXT
);