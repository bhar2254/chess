//  api.js

import { Hono } from 'hono';
import { rawHtmlResponse } from '../@bhar2254/std'
import { Page } from '../@bhar2254/bs-dom'

const router = new Hono();

const playMoves = (moves) => {
    return `var moves = ${moves};
    var i = 0;

    function makeMove() {
        if (i < moves.length) {
            game.move(moves[i]);
            board.position(game.fen());
            i++;
            setTimeout(makeMove, 1000);
        }
    }

    $(document).ready(function() {
        setTimeout(makeMove, 1000);
    });`
}

const playableBoardMoves = (board, moves) => {
    return `
      <script>
            var board = null
            var game = new Chess()
            var whiteSquareGrey = '#a9a9a9'
            var blackSquareGrey = '#696969'

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

            function onDragStart (source, piece) {
                // do not pick up pieces if the game is over
                if (game.game_over()) return false

                // or if it's not that side's turn
                if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false
                }
            }

            function onDrop (source, target) {
                removeGreySquares()

                // see if the move is legal
                var move = game.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                })

                // illegal move
                if (move === null) return 'snapback'
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

            var config = {
                draggable: true,
                position: 'start',
                onDragStart: onDragStart,
                onDrop: onDrop,
                onMouseoutSquare: onMouseoutSquare,
                onMouseoverSquare: onMouseoverSquare,
                onSnapEnd: onSnapEnd,
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            board = Chessboard('${board}', config)
            
            var moves = ${moves};
            var i = 0;

            function makeMove() {
                if (i < moves.length) {
                    game.move(moves[i]);
                    board.position(game.fen());
                    i++;
                    setTimeout(makeMove, 1000);
                }
            }

            $(document).ready(function() {
                setTimeout(makeMove, 1000);
            });
      </script>`
}

const playableBoard = (board, fen) => {
    return `
      
      <script>
            var board = null
            var game = new Chess()
            var whiteSquareGrey = '#a9a9a9'
            var blackSquareGrey = '#696969'

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

            function onDragStart (source, piece) {
                // do not pick up pieces if the game is over
                if (game.game_over()) return false

                // or if it's not that side's turn
                if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false
                }
            }

            function onDrop (source, target) {
                removeGreySquares()

                // see if the move is legal
                var move = game.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                })

                // illegal move
                if (move === null) return 'snapback'
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

            var config = {
                draggable: true,
                position: '${fen}',
                onDragStart: onDragStart,
                onDrop: onDrop,
                onMouseoutSquare: onMouseoutSquare,
                onMouseoverSquare: onMouseoverSquare,
                onSnapEnd: onSnapEnd,
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            board = Chessboard('${board}', config)
      </script>`
}

const setupBoard = (board, moves) => {
    return `
      <script>
        var ${board}, game_${board} = new Chess();
        var moves_${board} = ${moves};
        var i = 0;

        function makeMove_${board}() {
          if (i < moves_${board}.length) {
            game_${board}.move(moves_${board}[i]);
            ${board}.position(game_${board}.fen());
            i++;
            setTimeout(makeMove_${board}, 1000);
          }
        }

        $(document).ready(function() {
            ${board} = Chessboard('${board}', {
                position: 'start',
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            });
            setTimeout(makeMove_${board}, 1000);
        });
      </script>`
}

router.get('/', (c) => {
    const body = `<div class="py-5 container">
        <h1>Overview of Chess Openings</h1>
        <p>Chess openings are the first moves of a game, setting the stage for the middle game. Here are some popular openings:</p>
        <div class="accordion" id="openingsAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#queensGambit">
                        Queen's Gambit
                    </button>
                </h2>
                <div id="queensGambit" class="accordion-collapse collapse show" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <p>A classical opening where White sacrifices a pawn for central control.</p>
                                <hr>
                                <a href="/openings/queens-gambit" class="btn btn-primary mt-2">Learn More</a>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board1" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#kingsGambit">
                        King's Gambit
                    </button>
                </h2>
                <div id="kingsGambit" class="accordion-collapse collapse" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="g-4 row">
                        <div class="col-lg-6">  
                            White gambits the f-pawn to gain rapid development.
                            <hr>
                            <a href="/openings/kings-gambit" class="btn btn-primary mt-2">Learn More</a>
                        </div>
                        <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board2" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sicilianDefense">
                        Sicilian Defense
                    </button>
                </h2>
                <div id="sicilianDefense" class="accordion-collapse collapse" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="g-4 row">
                            <div class="col-lg-6">  
                                A counter-attacking opening for Black starting with 1... c5.
                                <hr>
                                <a href="/openings/sicilian-defense" class="btn btn-primary mt-2">Learn More</a>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board3" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#frenchDefense">
                        French Defense
                    </button>
                </h2>
                <div id="frenchDefense" class="accordion-collapse collapse" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="g-4 row">
                            <div class="col-lg-6">  
                                Black responds with e6, aiming for solid structure.
                                <hr>
                                <a href="/openings/french-defense" class="btn btn-primary mt-2">Learn More</a>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board4" class="m-0 p-0" style="width:100%, height:5rem;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#caroKann">
                        Caro-Kann Defense
                    </button>
                </h2>
                <div id="caroKann" class="accordion-collapse collapse" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="g-4 row">
                            <div class="col-lg-6">  
                                A solid defense for Black focusing on c6 and d5.
                                <hr>
                                <a href="/openings/caro-kann" class="btn btn-primary mt-2">Learn More</a>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board5" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ruyLopez">
                        Ruy-Lopez
                    </button>
                </h2>
                <div id="ruyLopez" class="accordion-collapse collapse" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="g-4 row">
                            <div class="col-lg-6">  
                                A classical opening focusing on central control.
                                <hr>
                                <a href="/openings/ruy-lopez" class="btn btn-primary mt-2">Learn More</a>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board6" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var kingsGambitAccordion = document.getElementById('kingsGambit');
                kingsGambitAccordion.addEventListener('shown.bs.collapse', function () {
                    var config = {
                        position: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2',
                        pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                    }
                    Chessboard('board2', config)
                });
            });
            document.addEventListener('DOMContentLoaded', function () {
                var sicilianDefenseAccordion = document.getElementById('sicilianDefense');
                sicilianDefenseAccordion.addEventListener('shown.bs.collapse', function () {
                    var config3 = {
                        position: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
                        pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                    }
                    Chessboard('board3', config3)
                });
            });
            document.addEventListener('DOMContentLoaded', function () {
                var frenchDefenseAccordion = document.getElementById('frenchDefense');
                frenchDefenseAccordion.addEventListener('shown.bs.collapse', function () {
                    var config4 = {
                        position: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
                        pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                    }
                    Chessboard('board4', config4)
                });
            });
            document.addEventListener('DOMContentLoaded', function () {
                var caroKannAccordion = document.getElementById('caroKann');
                caroKannAccordion.addEventListener('shown.bs.collapse', function () {
                    var config5 = {
                        position: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
                        pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                    }
                    Chessboard('board5', config5)
                });
            });
            document.addEventListener('DOMContentLoaded', function () {
                var ruyLopezAccordion = document.getElementById('ruyLopez');
                ruyLopezAccordion.addEventListener('shown.bs.collapse', function () {
                    var config6 = {
                        position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
                        pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
                    }
                    Chessboard('board6', config6)
                });
            });
        </script>
        ${playableBoardMoves('board1', '["d4", "d5"]')}`
    const page = new Page({ pageTitle: 'Openings', body })
    return rawHtmlResponse(page.render())
});

router.get('/queens-gambit', (c) => {
    const body = `
        <div class="py-5 container">
        <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 shadow-lg">
            <div class="row">
                <ol class="px-3 breadcrumb mb-0 d-flex justify-content-center align-items-center">
                    <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li class="breadcrumb-item" aria-current="page"><a href="/openings">Openings</a></li>
                    <li class="ms-auto"></li>
                </ol>
            </div>
        </nav>
        <hr>
        <h2 class="text-center">Queen\'s Gambit</h2>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-md-9 col-sm-11">
                <p>The Queen's Gambit is one of the oldest and most respected openings in chess. It begins with the moves:</p>
                <pre class="p-3 bg-glass-dark-5">1. d4 d5 2. c4</pre>
                <p>White offers a pawn to gain central control. Black can either accept or decline the gambit.</p>
            </div>
            <div class="mx-auto col-md-6 col-sm-11">
                <h2>Counter-Play for Black</h2>
                <ul>
                    <li><strong>Albin Countergambit:</strong> Black responds with 2... e5, aiming for rapid development.</li>
                    <li><strong>Tarrasch Defense:</strong> Black plays 3... c5, challenging White's center.</li>
                    <li><strong>Chigorin Defense:</strong> Black develops the knight early with 2... Nc6.</li>
                </ul>
            </div>
            <div class="mx-auto col-md-6 col-sm-11">
                <h2>Options for White</h2>
                <ul>
                    <li><strong>Queen's Gambit Accepted (QGA):</strong> Black captures the c4 pawn, leading to dynamic play.</li>
                    <li><strong>Queen's Gambit Declined (QGD):</strong> Black maintains the central structure with 2... e6.</li>
                    <li><strong>Slav Defense:</strong> Black plays 2... c6, reinforcing the d5 pawn.</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                <div id="board" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
        ${playableBoardMoves('board', '["d4", "d5"]')}`
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
				<img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
});

router.get('/kings-gambit', (c) => {
    const body = `
        <div class="py-5 container">
        <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 shadow-lg">
            <div class="row">
                <ol class="px-3 breadcrumb mb-0 d-flex justify-content-center align-items-center">
                    <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li class="breadcrumb-item" aria-current="page"><a href="/openings">Openings</a></li>
                    <li class="ms-auto"></li>
                </ol>
            </div>
        </nav>
        <hr>
        <h2 class="text-center">King\'s Gambit</h2>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-md-9 col-sm-11">
                <section id="explanation" class="mb-5">
                    <h2>Explanation</h2>
                    <p>The King's Gambit is an aggressive chess opening that begins with the moves:</p>
                    <pre>1. e4 e5  2. f4</pre>
                    <p>White sacrifices a pawn to gain rapid development and open lines for an attack. It was a favorite of romantic era players and remains an exciting option for those who enjoy tactical play.</p>
                </section>
            </div>
            <div class="mx-auto col-md-6 col-sm-11">
                <section id="white" class="mb-5">
                    <h2>White Continuations</h2>
                    <p>After 2... exf4, White has multiple ways to proceed:</p>
                    <ul>
                        <li><strong>King's Gambit Accepted (KGA):</strong> White can play 3. Nf3 to prevent ...Qh4+ and prepare to regain the pawn.</li>
                        <li><strong>Bishop's Gambit:</strong> 3. Bc4 aims for quick piece activity and a rapid assault on f7.</li>
                        <li><strong>Muzio Gambit:</strong> A wild choice where White sacrifices a knight with 3. Nf3 g5 4. O-O to gain a strong initiative.</li>
                    </ul>
                </section>
            </div>
            <div class="mx-auto col-md-6 col-sm-11">
                <section id="black" class="mb-5">
                    <h2>Black Counters</h2>
                    <p>Black has several effective ways to counter the King's Gambit:</p>
                    <ul>
                        <li><strong>Classical Defense:</strong> 2... exf4 3. Nf3 g5 aims to hold onto the extra pawn and secure the king.</li>
                        <li><strong>Falkbeer Countergambit:</strong> 2... d5 counterattacks the center immediately.</li>
                        <li><strong>Modern Defense:</strong> 2... d6 avoids taking the gambit pawn and aims for solid development.</li>
                    </ul>
                </section>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                <div id="board" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
        ${playableBoardMoves('board', '["e4", "e5"]')}`
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
				<img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
});

export default router