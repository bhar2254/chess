//  api.js

import { Hono } from 'hono';
import { rawHtmlResponse } from '../@bhar2254/std'
import { Page } from '../@bhar2254/bs-dom'
import { SQLCrud } from '../@bhar2254/sql-d1'
import { playableBoard } from '../@bhar2254/chess-bot';

const router = new Hono();

const board = (board, start) => {
    return `
      <script>
            var board = null

            var config = {
                position: '${start ? start : 'start'}',
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            ${board} = Chessboard('${board}', config)
      </script>`
}

router.get('/', async (c) => {
    const db = c.env.DB
    const puzzles = new SQLCrud(db, 'puzzles')
    const { results } = await puzzles.read();
    if( !results )
        console.log(`puzzles NOT FOUND in D1! `)
    const accordionElement = (args) => {
        if(!args)
            return 'No arguments provided to accordion!'
        const name = args.name || 'name not defined'
        const index = args.index || ''
        const fen = args.fen || 'fen not defined'
        const id = args.id || 'id not defined'
        const short_description = args.short_description || 'Short_description not defined'
        const short_name = args.short_name || 'short_name not defined'
        // const source = args.source || 'source not defined'
        return `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-${short_name}">
                       ${id} - ${name}
                    </button>
                </h2>
                ${short_name !== 'basic-mate' ? `<script>
                    $(document).ready(function() {
                        $('#accordion-${short_name}').collapse({
                            toggle: false
                        })
                    });
                </script>` : ``}
                <div id="accordion-${short_name}" class="accordion-collapse collapse show" data-bs-parent="#puzzlesAccordion">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="text-center col-lg-6">
                                <p>${short_description}</p>
                                <hr>
                                <div class="btn-group">
                                    <a href="/puzzles/${short_name}" class="btn btn-secondary mt-2">Play the position</a>
                                </div>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board${index}" style="touch-action:none;" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${board(`board${index}`, fen)}`
    }
    const accordion = []
    for ( const [ i, each ] of results.entries() ) {
        each.index = i
        accordion.push(accordionElement(each))
    }
    const body = `<div class="py-5 container">
        <h1>Chess Puzzles</h1>
        <p>These chess puzzles are generated to challenge your skills and teach chess tactics and strategies.</p>
        <div class="accordion" id="puzzlesAccordion">
            ${accordion.join(' ')}
        </div>
    </div>`
    const page = new Page({ pageTitle: 'Puzzles', body })
    return rawHtmlResponse(page.render())
});

router.get('/:short_name', async (c) => {
    const short_name = c.req.param('short_name')
    const db = c.env.DB
    const puzzles = new SQLCrud(db, 'puzzles')
    
    console.log(`short_name is ${short_name} which is ${Number.isInteger(Number(short_name))} and ${Number.isNaN(Number(short_name))}`)

    if (!Number.isNaN(Number(short_name))) { // Properly check if it's a valid number
        const { results } = await puzzles.read({ where: { id: Number(short_name) } });
        
        if (!results.length) return c.redirect('/404');
        
        return c.redirect(`/puzzles/${results[0].short_name}`);
    }

    const { results } = await puzzles.read({where: {short_name}});
    if (!results.length)
        return c.redirect('/404')
    console.log(results)
    const { id, fen, name, description } = results[0]
    const body = `<div class="py-5 container">
        <h2 class="text-center">${name}</h2>
        <p class="text-center">${description}</p>
        <hr>
        <div class="row">
            <div class="mx-auto text-center col-lg-3 col-sm-11">
                <div class="btn-group" id="puzzleControlButtons">
                    <button type="button" class="btn btn-secondary" onclick="undoMove();undoMove();"><i class="fa-solid fa-chevron-left"></i></button>
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
    <script>
        $(document).ready(() => {
            $('#gameOverButtons').html(\`
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" onclick="setTimeout(resetBoard, 750)">Reset Board</button>
                <a type="button" class="btn btn-primary" href="/puzzles/${id + 1}">Next Puzzle</a>\`
            );
        });
    </script>
    ${playableBoard({start: fen, autoplay: true, strat: 'always_take', type: 'puzzle'})}`
    const page = new Page({pageTitle: 'Home',body: body})
    return rawHtmlResponse(page.render())
});

export default router