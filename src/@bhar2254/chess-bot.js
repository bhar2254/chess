
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const generateFischerFen = () => {
    const pieces = 'rnbqkbnr'
    const array = shuffleArray(pieces.split(''))
    const fischerString = array.join('')
    const fen = `${fischerString}/pppppppp/8/8/8/8/PPPPPPPP/${fischerString.toUpperCase()} w KQkq - 0 1`
    return fen
}

export const chessStrategies = (args) => {
    const _args = {...args}
    const { strat = 'random' } = _args
    const strategies = {
        'none': (args) => {
            return null
        },
        'default': (args) => {
            return null
        },
        'random': (args) => {
            return `
                var possibleMoves = game.moves()

                // game over
                if (possibleMoves.length === 0) return

                var randomIdx = Math.floor(Math.random() * possibleMoves.length)
                const move = game.move(possibleMoves[randomIdx])`
        },
        'always_take': (args) => {
            return `
                function filterArrByString(arr, string) {
                    return arr.filter(item => typeof item === 'string' && item.includes(string));
                }
                function randomFromArray(arr) {
                    const randomId = Math.floor(Math.random() * arr.length)
                    return elem = arr[randomId]
                }

                const priority = {
                    'mates': '#',
                    'checks': '+',
                    'takes': 'x',
                    'castles': '0-0',
                }

                const possibleMoves = game.moves()
                let chosen_move = ''

                // game over
                if (possibleMoves.length === 0) return

                let moveDecided = false
                for(const each of Object.values(priority)){
                    if(moveDecided)
                        continue
                    const options = filterArrByString(possibleMoves, each)
                    if(options.length !== 0){
                        moveDecided = true
                        chosen_move = randomFromArray(options)
                    }
                }
                // otherwise pick a random move
                if(!moveDecided){
                    const randomIdx = Math.floor(Math.random() * possibleMoves.length)
                    chosen_move = possibleMoves[randomIdx]
                }

                const move = game.move(chosen_move)`
        }
    }
    return strategies[strat](_args) + `
                // Play sound based on move type
                if (move.flags.includes('p')) {
                    promoteSound.play();  // Capture sound
                } else if (game.in_checkmate() || game.in_draw() || game.in_stalemate() || game.in_threefold_repetition()) {
                    const outcome = (game.in_checkmate() << 3) | ( game.in_draw() << 2) | (game.in_stalemate() << 1) | game.in_threefold_repetition();
                    mateSound.play(); // Check sound
                    onGameOver(outcome);
                } else if (game.in_check()) {
                    checkSound.play(); // Check sound
                } else if (move.flags.includes('c') || move.flags.includes('e')) {
                    captureSound.play();  // Capture sound
                } else {
                    move.color === "w" ? movePlaSound.play() : moveOppSound.play();// Normal move sound
                }
                $("#moveSpan").text(game.moves().join(', '))

                board.position(game.fen())`
}

const starting_positions = {
    'game': 'start',
    'fischer': generateFischerFen()
}

export const playableBoard = (args) => {
    const { overlay = false, type = 'game', board = 'playableBoard', start = null, autoplay = false, strat = 'random' } = args
    const clear_position = starting_positions[type] || 'start'
    return `
        <script>
            var board = null
            var game = new Chess(${start ? `"${start}"` : ``})
            $("#moveSpan").text(game.moves().join(', '))
            var whiteSquareGrey = '#a9a9a9'
            var blackSquareGrey = '#696969'

            var movePlaSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/move-self.webm");
            var moveOppSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/move-opponent.webm");
            var captureSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/capture.webm");
            var promoteSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/promote.webm");
            var checkSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/move-check.webm");
            var mateSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/game-end.webm");
            var illegalSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/illegal.webm");
            var startSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/game-start.webm");
            var endSound = new Audio("https://bhar2254.github.io/src/audio/chess/webm/game-end.webm");

            function removeGreySquares () {
                $('#${board} .square-55d63').css('background', '')
            }

            function greySquare (square) {
                var $square = $('#${board} .square-' + square)

                var background = whiteSquareGrey
                if ($square.hasClass('black-3c85d')) {
                    background = blackSquareGrey
                }

                $square.css('background', background)
            }

            const outcomes = {
                '8': () => {
                    // mate
                    const color = game.turn()
                    const winner = color === 'b' ? 'White' : 'Black'
                    $('#gameOverMessage').text('Congratulations! ' + winner + ' wins the game!')
                }, '6': () => {
                    // stalemate
                    const color = game.turn()
                    const stale = color === 'w' ? 'White' : 'Black'
                    $('#gameOverMessage').text('Stalemate! ' + stale + ' has no more legal moves!')
                }, '5': () => {
                    // threefold_repitition 
                    const color = game.turn()
                    $('#gameOverMessage').text('Threefold Repitition! The game is a draw as each player repeated their last move three times.')
                }, '4': () => {
                    // draw
                    const color = game.turn()
                    $('#gameOverMessage').text('Draw! The game is even!')
                }
            }

            function onGameOver(outcome) {
                const _outcome = Number(outcome)
                outcomes[_outcome]();
                const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'))
                gameOverModal.show();
            }

            function onDragStart (source, piece) {
                // do not pick up pieces if the game is over
                if (game.game_over()) return false

                // or if it's not that side's turn
                if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false
                }
            }

            function botMove() {
                ${chessStrategies({strat})}
            }

            function onDrop (source, target) {
                removeGreySquares()

                // see if the move is legal
                var move = game.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                })

                if (move === null) {
                    illegalSound.play();
                    return 'snapback';
                }

                // Play sound based on move type
                if (move.flags.includes('p')) {
                    promoteSound.play();  // Capture sound
                } else if (game.in_checkmate() || game.in_draw() || game.in_stalemate() || game.in_threefold_repetition()) {
                    const outcome = (game.in_checkmate() << 3) | ( game.in_draw() << 2) | (game.in_stalemate() << 1) | game.in_threefold_repetition();
                    mateSound.play(); // Check sound
                    onGameOver(outcome);
                } else if (game.in_check()) {
                    checkSound.play(); // Check sound
                } else if (move.flags.includes('c') || move.flags.includes('e')) {
                    captureSound.play();  // Capture sound
                } else {
                    move.color === "w" ? movePlaSound.play() : moveOppSound.play();// Normal move sound
                }
                $("#moveSpan").text(game.moves().join(', '))

                // make random legal move for black
                if(${autoplay ? 'true' : 'false'})
                    window.setTimeout(botMove, 1000)
            }

            function onMouseoverSquare (square, piece) {
                // get list of possible moves for this square
                var moves = game.moves({
                    square: square,
                    verbose: true
                })

                // exit if there are no moves available for this square
                if (moves.length === 0) return

                // highlight the square they moused over
                greySquare(square)

                // highlight the possible squares for this piece
                for (var i = 0; i < moves.length; i++) {
                    greySquare(moves[i].to)
                }
            }

            function onMouseoutSquare (square, piece) {
                removeGreySquares()
            }

            function onSnapEnd () {
                board.position(game.fen())
            }

            function resetBoard() {
                var config = {
                    draggable: true,
                    position: "${type !== 'game' ? start : `start`}",
                    onDragStart: onDragStart,
                    onDrop: onDrop,
                    onMouseoutSquare: onMouseoutSquare,
                    onMouseoverSquare: onMouseoverSquare,
                    onSnapEnd: onSnapEnd,
                    pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                }
                game = new Chess(${type !== 'game' ? `"${start}"` : ``});
                board = Chessboard('${board}', config)
            }

            function clearBoard() {
                var config = {
                    draggable: true,
                    position: "${clear_position}",
                    onDragStart: onDragStart,
                    onDrop: onDrop,
                    onMouseoutSquare: onMouseoutSquare,
                    onMouseoverSquare: onMouseoverSquare,
                    onSnapEnd: onSnapEnd,
                    pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                }
                game = new Chess(${type !== 'game' ? `"${clear_position}"` : ``});
                board = Chessboard('${board}', config)
            }

            const storedMoves = []

            function undoMove() {
                const history = game.history()
                storedMoves.push(history[history.length - 1])
                game.turn() === "w" ? movePlaSound.play() : moveOppSound.play();// Normal move sound
                game.undo()
                board.position(game.fen())
            }

            function redoMove() {
                const storedMove = storedMoves.pop()
                const move = game.move(storedMove)

                // Play sound based on move type
                if (move.flags.includes('p')) {
                    promoteSound.play();  // Capture sound
                } else if (game.in_checkmate() || game.in_draw() || game.in_stalemate() || game.in_threefold_repetition()) {
                    mateSound.play(); // Check sound
                } else if (game.in_check()) {
                    checkSound.play(); // Check sound
                } else if (move.flags.includes('c') || move.flags.includes('e')) {
                    captureSound.play();  // Capture sound
                } else {
                    move.color === "b" ? movePlaSound.play() : moveOppSound.play();// Normal move sound
                }

                board.position(game.fen())
            }

            document.addEventListener("DOMContentLoaded", function () {
                const copyButton = document.getElementById("copyButton");

                // Initialize Bootstrap tooltip
                const tooltip = new bootstrap.Tooltip(copyButton, {
                    trigger: "manual" // Prevent default hover behavior
                });

                copyButton.addEventListener("click", function () {
                    // Copy text to clipboard (modify as needed)
                    navigator.clipboard.writeText(game.fen()).then(() => {
                        copyButton.setAttribute("data-bs-original-title", "Copied!");
                        tooltip.show();

                        // Hide tooltip after 1.5 seconds and reset title
                        setTimeout(() => {
                            tooltip.hide();
                            copyButton.setAttribute("data-bs-original-title", "Copy to clipboard");
                        }, 1500);
                    });
                });
            });

            var config = {
                draggable: true,
                position: '${start ? start : 'start'}',
                onDragStart: onDragStart,
                onDrop: onDrop,
                onMouseoutSquare: onMouseoutSquare,
                onMouseoverSquare: onMouseoverSquare,
                onSnapEnd: onSnapEnd,
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            board = Chessboard('${board}', config)

            $(document).ready(function() {
                startSound.play()
            });
      </script>`
}

export const playableBoardMoves = (board, moves) => {
    const autoplay = true
    const strat = 'always_take'
    return `
        ${playableBoard({strat, autoplay, board})}
        <script>
            var moves = ${moves};
            var i = 0;

            function makeMove() {
                if (i < moves.length) {
                    game.move(moves[i]);
                    board.position(game.fen());
                    i++;
                    movePlaSound.play();
                    setTimeout(makeMove, 1000);
                }
            }

            $(document).ready(function() {
                startSound.play()
                setTimeout(makeMove, 1000);
            });
      </script>`
}

export const playableBoardWithOverlay = () => {
    return `
        <div  style="width: 400px; height: 400px; touch-action:none;" ></div>
            <div id="playableBoard_wrapper">
                <canvas id="primary_canvas" width="392" height="392"></canvas>
                <canvas id="drawing_canvas"  width="392" height="392"></canvas>
                <div id="playableBoard" style="width: 400px; height: 400px; touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>`
}