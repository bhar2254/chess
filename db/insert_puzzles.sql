DROP TABLE IF EXISTS puzzles;
CREATE TABLE puzzles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fen TEXT UNIQUE NOT NULL,
    name TEXT,
    solution_moves TEXT,
    short_name TEXT,
    description TEXT,
    short_description TEXT,
    source TEXT,
    tags TEXT
);
INSERT INTO puzzles (fen, name, solution_moves, short_name, description, short_description, source, tags) VALUES 
('7k/6pp/8/8/8/8/6PP/5RK1 w - - 0 1', 'Basic Checkmate (Back Rank Mate)', '["Rf8#"]', 'basic-mate', 'White to play and deliver checkmate in one move using a back-rank weakness.', 'White to play and deliver checkmate in one move using a back-rank weakness.', null, 'beginner'),
('r2qb1rk/ppb2p1p/2n1pPp1/B3N3/2B1P2Q/2P2R2/1P4PP/7K w - - 0 1', 'Easy Mate in Two', '["Qh7","Rh3#"]', 'easy-mate-two', 'Look for a quick mate in two', 'Look for a quick mate in two', 'source', 'beginner'),
('7k/4K1pp/7N/8/8/8/8/B7 w - - 0 1', 'Escape a Draw', '["Bf6","Kf8+","Nf7#"]', 'escape-a-draw', 'If you''re not careful this game can end in a draw or stalemate!', 'If you''re not careful this game can end in a draw or stalemate!', 'source', 'beginner'),
('8/8/6p1/7k/3r2NP/B5PK/2br1R2/8 w - - 0 1', 'Knights and Bishops', '["Nf6+","Bf8#"]', 'knights-and-bishops', 'See if you can evade the trap!', 'See if you can evade the trap!', 'source', 'beginner');