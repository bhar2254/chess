//  index.js

import { rawHtmlResponse } from '../@bhar2254/std'
import { Page } from '../@bhar2254/bs-dom'
import { Hono } from 'hono';
import openings from './openings';
import { Chess } from 'chess.js'
import { Chessboard } from 'chessboardjs'

const router = new Hono();

router.route('/openings', openings);

router.get('/img/chesspieces/wikipedia/:filename', async (c) => {
    const filename = c.req.param('filename');
    return c.env.ASSETS.fetch(`https://bhar2254.github.io/src/img/chesspieces/wikipedia/${filename}`);
});

const playableBoard = (start) => {
    return `
      
      <script>
            var board = null
            var game = new Chess()
            var whiteSquareGrey = '#a9a9a9'
            var blackSquareGrey = '#696969'

            function removeGreySquares () {
                $('#playableBoard .square-55d63').css('background', '')
            }

            function greySquare (square) {
                var $square = $('#playableBoard .square-' + square)

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
                position: '${start}',
                onDragStart: onDragStart,
                onDrop: onDrop,
                onMouseoutSquare: onMouseoutSquare,
                onMouseoverSquare: onMouseoverSquare,
                onSnapEnd: onSnapEnd,
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            board = Chessboard('playableBoard', config)
      </script>`
}

//	route handler
router.get('/', c => {
    const body = `<div class="py-5 container">
        <h2 class="text-center">Welcome!</h2>
        <hr>
        <p class="text-center">I'm working on this site as a side project to practice my chess strategies. Hopefully by immersing myself in the board I'll pick up a few skills.</p>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
      ${playableBoard('start')}
      <script>
        var moves = ["c4", "d5"];
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
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
				<img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
})

router.get('/developer', async c => {
    const page = new Page({
        pageTitle: 'Developer',
        body: `
        <div class="py-3 mx-auto col-md-10 col-sm-12">
            Hi! My name's Blaine. I make websites and other JavaScript applications. If you're interested in creating your own JavaScript projects like this one, check out my <a href='https://github.com/bhar2254'>GitHub</a> or check out my site <a href='https://blaineharper.com'>BlaineHarper.com</a> for (possibly?) up to date details.
        </div>`
    })
    return rawHtmlResponse(page.render())
})

router.get('/projects', async c => {
    const page = new Page({
        pageTitle: 'Projects',
        body: `
        <div class="py-3 mx-auto col-md-10 col-sm-12">
            If you'd like to view my other projects, check out my <a href='https://github.com/bhar2254'>GitHub</a>!
        </div>`
    })
    return rawHtmlResponse(page.render())
})

router.get('/intro', (c) => {
    const body = `<div class="py-5 container">
        <h1>Overview of Chess Terminology</h1>
        Chess features it's own jargon to help describe the game and its rules. Make sure you're acquainted with these terms before you start playing.
        <section id="terminology" class="my-3">
            <div class="accordion" id="chessTerms">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Checkmate
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#chessTerms">
                        <div class="accordion-body">
                            A position where the king is in check and cannot escape, ending the game.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Stalemate
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#chessTerms">
                        <div class="accordion-body">
                            A situation where a player has no legal moves and their king is not in check, resulting in a draw.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            En Passant
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#chessTerms">
                        <div class="accordion-body">
                            A special pawn capture that can occur when a pawn moves two squares forward and lands beside an opponent's pawn.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                            Castling
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#chessTerms">
                        <div class="accordion-body">
                            A move involving the king and rook, where the king moves two squares towards the rook and the rook jumps to the opposite side.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>`
    const page = new Page({page_title: 'Home', body})
    return rawHtmlResponse(page.render())
});

router.get('/play', (c) => {
    const { fen = 'start' } = c.req.queries()
    console.log(fen)
    const body = `<div class="py-5 container">
        <h2 class="text-center">Play!</h2>
        <p class="text-center">Find a friend and play a game of chess! Or test your skills against yourself</p>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
      ${playableBoard('start')}`
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
                <img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
});

router.get('/position', (c) => {
    const { fen = 'start' } = c.req.queries()
    console.log(fen)
    const body = `<div class="py-5 container">
        <h2 class="text-center">Forsyth-Edwards Notation (FEN)</h2>
        <p class="text-center">FEN is a standard notation used to describe chess positions for analysis and recording.</p>
        <hr>
        <h5 class="card-title">Queen’s Gambit FEN Explained</h5>
        <p>The Queen’s Gambit opening starts with:</p>
        <pre class="bg-glass-dark-5 p-2 border">1. d4 d5 2. c4</pre>
        <p>This results in the following FEN string:</p>
        <pre class="bg-glass-dark-5 p-2 border">rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2</pre>
        
        <h6>Breaking it down:</h6>
        <ul>
            <li><strong>rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR</strong> - Board position.</li>
            <li><strong>w</strong> - White to move.</li>
            <li><strong>KQkq</strong> - Both sides still have castling rights.</li>
            <li><strong>-</strong> - No en passant target square.</li>
            <li><strong>0</strong> - No halfmoves since the last capture or pawn move.</li>
            <li><strong>2</strong> - It’s White’s second move.</li>
        </ul>
        <script>
            function generateFEN() {
                $('#fen').val(game.fen())
            }
        </script>
        <div class="row">
            <form method="get" action="" class="mb-4">
                <div class="input-group">
                    <input id="fen" type="text" name="fen" class="form-control" placeholder="Enter FEN string" required>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="button" onclick="generateFEN()" class="btn btn-secondary">Get FEN</button>
                </div>
            </form>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
      ${playableBoard(fen)}`
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
                <img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
});
router.get('/position', (c) => {
    const { fen = 'start' } = c.req.queries()
    console.log(fen)
    const body = `<div class="py-5 container">
        <h2 class="text-center">Forsyth-Edwards Notation (FEN)</h2>
        <p class="text-center">FEN is a standard notation used to describe chess positions for analysis and recording.</p>
        <hr>
        <h5 class="card-title">Queen’s Gambit FEN Explained</h5>
        <p>The Queen’s Gambit opening starts with:</p>
        <pre class="bg-glass-dark-5 p-2 border">1. d4 d5 2. c4</pre>
        <p>This results in the following FEN string:</p>
        <pre class="bg-glass-dark-5 p-2 border">rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2</pre>
        
        <h6>Breaking it down:</h6>
        <ul>
            <li><strong>rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR</strong> - Board position.</li>
            <li><strong>w</strong> - White to move.</li>
            <li><strong>KQkq</strong> - Both sides still have castling rights.</li>
            <li><strong>-</strong> - No en passant target square.</li>
            <li><strong>0</strong> - No halfmoves since the last capture or pawn move.</li>
            <li><strong>2</strong> - It’s White’s second move.</li>
        </ul>
        <div class="row">
            <form method="get" action="" class="mb-4">
                <div class="input-group">
                    <input type="text" name="fen" class="form-control" placeholder="Enter FEN string" required>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="board" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
      <script>
        var board, game = new Chess();
        $(document).ready(function() {
            board = Chessboard('board', {
                position: '${fen}',
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            });
        });
      </script>`
    const page = new Page({
        page_title: 'Home',
        body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
                <img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
    })
    return rawHtmlResponse(page.render())
});

export default router