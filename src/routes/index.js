//  index.js

import { rawHtmlResponse } from '../@bhar2254/std'
import { Page } from '../@bhar2254/bs-dom'
import { playableBoard, playableBoardWithOverlay } from '../@bhar2254/chess-bot'
import { Hono } from 'hono';
import puzzles from './puzzles';
import openings from './openings';

const router = new Hono();

router.route('/openings', openings);
router.route('/puzzles', puzzles);

router.get('/img/chesspieces/wikipedia/:filename', async (c) => {
    const filename = c.req.param('filename');
    return c.env.ASSETS.fetch(`https://bhar2254.github.io/src/img/chesspieces/wikipedia/${filename}`);
});

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
    ${playableBoard({autoplay: true, strat: 'always_take'})}
      <script>
        var moves = ["c4", "d5"];
        var i = 0;

        function makeMove() {
          if (i < moves.length) {
            game.move(moves[i]);
            board.position(game.fen());
            i++;
            movePlaSound.play();
            setTimeout(makeMove, 750);
          }
        }

        $(document).ready(function() {
            setTimeout(makeMove, 750);
        });
      </script>`
    const page = new Page({pageTitle: 'Home',body: body})
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
    const page = new Page({pageTitle: 'Home', body})
    return rawHtmlResponse(page.render())
});

router.get('/play/debug', (c) => {
    const { fen = null, autoplay = false } = c.req.queries()
    const body = `<div class="py-5 container">
        <h2 class="text-center">Developers Only!!</h2>
        <p class="text-center">This page is for developing the app further!</p>
        <hr>
        <div class="g-4 row">
            <div class="m-3 p-3 mx-auto col-lg-5 col-md-11 bg-glass-dark-3">
                <span id="moveSpan"></span><br>
                <span id="feedbackSpan"></span>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="boardControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-primary" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                    <button type="button" class="btn btn-secondary" onclick="redoMove();"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
    ${playableBoard({start: fen, autoplay, strat: 'always_take'})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

router.get('/play/standard', (c) => {
    const { fen = null } = c.req.queries()
    const body = `<div class="py-5 container">
        <h2 class="text-center">Play!</h2>
        <p class="text-center">Find a friend and play a game of chess! Or test your skills against yourself</p>
        <hr>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="boardControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-primary" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                    <button type="button" class="btn btn-secondary" onclick="redoMove();"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
    ${playableBoard({start: fen})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

router.get('/play/bot', (c) => {
    const { fen = null } = c.req.queries()
    const body = `<div class="py-5 container">
        <h2 class="text-center">Play against the the computer</h2>
        <p class="text-center">In this game, the computer will play against you!</p>
        <hr>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="boardControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-primary" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                    <button type="button" class="btn btn-secondary" onclick="redoMove();redoMove();"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
    ${playableBoard({start: fen, autoplay: true, strat: 'always_take'})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

router.get('/play/random', (c) => {
    const { fen = null } = c.req.queries()
    const body = `<div class="py-5 container">
        <h2 class="text-center">Play against random moves!</h2>
        <p class="text-center">Play a game against a bot that has no idea what chess is. Okay, it's me. Play a game against me.</p>
        <hr>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="boardControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-primary" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                    <button type="button" class="btn btn-secondary" onclick="redoMove();"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
    ${playableBoard({start: fen, autoplay: true})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

router.get('/play', (c) => {
    return c.redirect('/play/standard');
});

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

router.get('/play/fischer', (c) => {
    const { fen = generateFischerFen() } = c.req.queries()
    const body = `<div class="py-5 container">
        <h2 class="text-center">Play Fischer Random!</h2>
        <p class="text-center">Chess960, also known as Fischer Random Chess, is a chess variant that randomizes the starting position of the pieces on the back rank. It was introduced by former world chess champion Bobby Fischer in 1996 to reduce the emphasis on opening preparation and to encourage creativity in play. Chess960 uses the same board and pieces as classical chess, but the starting position of the pieces on the players' home ranks is randomized, following certain rules. The random setup makes gaining an advantage through the memorization of openings unfeasible. Players instead must rely on their skill and creativity.</p>
        <hr>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="boardControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-primary" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                    <button type="button" class="btn btn-secondary" onclick="redoMove();redoMove();"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11">
                <div id="playableBoard" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
    </div>
    ${playableBoard({type: 'fischer', start: fen, autoplay: true, strat: 'always_take'})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

router.get('/position', (c) => {
    const queens_gambit = ["rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2"]
    const { fen = queens_gambit } = c.req.queries()
    function describeFEN(fen) {
        const [position, turn, castling, enPassant, halfmove, fullmove] = fen.split(" ");
    
        const descriptions = [
            `<p>The board position is represented in FEN notation as:</p><pre class="p-3 bg-glass-dark-5 border">${position}</pre>`,
            `<p>It is <strong>${turn === "w" ? "White" : "Black"}</strong> to move.</p>`,
            `<p>Castling rights are: <strong>${castling !== "-" ? castling : "None"}</strong>.</p>`,
            `<p>En passant target square: <strong>${enPassant !== "-" ? enPassant : "None"}</strong>.</p>`,
            `<p>Halfmove clock (moves since last pawn move or capture): <strong>${halfmove}</strong>.</p>`,
            `<p>Fullmove number (total moves in the game): <strong>${fullmove}</strong>.</p>`
        ];
    
        return `<ul><li>${descriptions.join("</li><li>")}</li></ul>`;
    }
    
    // Example usage
    console.log(fen[0])
    const fenData = describeFEN(fen[0])
    const body = `<div class="py-5 container">
        <h2 class="text-center">Forsyth-Edwards Notation (FEN)</h2>
        <p class="text-center">FEN is a standard notation used to describe chess positions for analysis and recording.</p>
        <hr>
        ${fen === queens_gambit ? `
        <h5 class="card-title">Queen’s Gambit FEN Explained</h5>
        <p>The Queen’s Gambit opening starts with:</p>
        <pre class="bg-glass-dark-5 p-2 border">1. d4 d5 2. c4</pre>`: ``}
        <p>This results in the following FEN string:</p>
        <pre class="bg-glass-dark-5 p-2 border">rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2</pre>
        
        <h6>Breaking it down:</h6>
        <ul>
            ${fenData}
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
                    <a type="button" onclick="setTimeout(resetBoard, 750)" class="btn btn-warning">Reset</a>
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
    ${playableBoard({start: fen})}`
    const page = new Page({pageTitle: 'Home',body})
    return rawHtmlResponse(page.render())
});

export default router